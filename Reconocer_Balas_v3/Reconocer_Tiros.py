# -*- coding: utf-8 -*-
"""
Created on Sun Nov 15 21:57:50 2020

@author: Santa
"""
import cv2
import numpy as np
import sys
from scipy.spatial import distance
import os
from shutil import copyfile
from datetime import datetime
import pandas as pd

from pymongo import MongoClient
#docker mongo
client_tirito = MongoClient('mongodb://192.168.0.27:27017/')
db = client_tirito.admin
col_tirito_cliente = db['tirito_cliente']


import sqlalchemy
# Local mysql
DB_USER = 'root'
DB_PASS = 'root'
DB_ADDR = 'localhost'
DB_NAME = 'tirito'
DB_CONN = sqlalchemy.create_engine('mysql+mysqlconnector://{0}:{1}@{2}/{3}'.format(DB_USER, DB_PASS, DB_ADDR, DB_NAME))

import base64
import time
def reconocer_puntos(imagen):


    base64_img_bytes = imagen.encode('utf-8')
    with open('C:/tirito/disparos.png', 'wb') as file_to_save:
        decoded_image_data = base64.decodebytes(base64_img_bytes)
        file_to_save.write(decoded_image_data)
    time.sleep(2)
    img = cv2.imread('C:/tirito/disparos.png')
    img_thresholded = cv2.inRange(img, (60, 60, 60), (140, 140, 140))

    kernel = np.ones((7,7),np.uint8)
    opening = cv2.morphologyEx(img_thresholded, cv2.MORPH_OPEN, kernel)
    contours, hierarchy = cv2.findContours(opening.copy(), cv2.RETR_TREE, cv2.CHAIN_APPROX_NONE)
    centro = (317, 322)
    i = -1
    
    def Puntos(distancia):
        if (distancia <= 15): return 10
        distancia_min = 15
        distancia_suma = 15
        for i in range(9):        
            #print(f"{10-i}:: {distancia_min}-{distancia_min+distancia_suma}")
            if (distancia > distancia_min and distancia <= distancia_min + distancia_suma): return 10-i    
            if (i == 0): 
                distancia_min = 0
                distancia_suma = 30
            distancia_min = distancia_min+distancia_suma
        return 0
    
    lista_puntos = []
    for contour in contours:
        i= i + 1
        (x,y),radius = cv2.minEnclosingCircle(contour)
        center = (int(x),int(y))
        radius = int(radius)
        cv2.circle(img,center,radius,(0,255,0),2)
        # labelling the circles around the centers, in no particular order.
        position = (center[0] - 10, center[1] + 10)
        text_color = (0, 0, 255)
        cv2.putText(img, str(i + 1), position, cv2.FONT_HERSHEY_SIMPLEX, 1, text_color, 3)        
        b = (position[0]+9, position[1]-9)
        
        dst = distance.euclidean(centro, b)
        
        print(f"Bala {i+1}, Pos: {b}, Distancia al centro {dst}, Puntos: {Puntos(dst)}")
        lista_puntos.append(Puntos(dst))
    
    os.remove('C:/tirito/disparos.png')
    return(lista_puntos)
    #PUNTOS - DISTANCIAS
    #10: 0 - 15
    #10: 15 - 30
    #9: 30 - 60
    #8: 60 - 90
    #7: 90 - 120
    #6: 120 - 150
    #5: 150 - 180
    #4: 180 - 210
    #3: 210 - 240
    #2: 240 - 270   
    #1: 270 - 300 




def cargar_puntajes(col, DB_CONN):
    result = col.find()
    # iterate the result Cursor object with documents
    
    for num, doc in enumerate(result):
        # Si Es una imagen
        if (len(doc.keys()) < 7): 
            #imagen = base64.b64encode(bytes(doc['imagen'], 'utf-8'))
            #print(type(imagen))
            
            list_puntos = reconocer_puntos(doc['imagen'][22:]) 
            
            dict_completo = {
                "id": doc['id'],
                "pais": doc['pais'],
                "punto1": list_puntos[0],
                "punto2": list_puntos[1],
                "punto3": list_puntos[2],
                "punto4": list_puntos[3],
                "punto5": list_puntos[4],
                "fecha_procesado": datetime.now().strftime("%Y/%m/%d %H:%M:%S")
            }
        else:
        #Si son puntajes sin imagen
            dict_completo = {
                "id": doc['id'],
                "pais": doc['pais'],
                "punto1": doc['punto1'],
                "punto2": doc['punto2'],
                "punto3": doc['punto3'],
                "punto4": doc['punto4'],
                "punto5": doc['punto5'],
                "fecha_procesado": datetime.now().strftime("%Y/%m/%d %H:%M:%S")       
            }
        
        # Inserta en mysql
        df = pd.DataFrame(dict_completo.items()).transpose()
        df.columns = dict_completo.keys()
        df = df.drop(df.index[0])
        print("\n\nData a insertar:")
        print(df)
        
        df.to_sql(con=DB_CONN, name='puntajes', if_exists='append', index = False)
        
    #Borra los  datos de tirito_cliente (MONGO)
    col_tirito_cliente.remove()
    return True

cargar_puntajes(col_tirito_cliente, DB_CONN)




