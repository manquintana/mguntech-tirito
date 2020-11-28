
from pymongo import MongoClient
client_tirito = MongoClient('mongodb://127.0.0.1:27017/')
db = client_tirito.admin
col_tirito = db['tirito']
col_tirito_cliente = db['tirito-cliente']


def cargar_imagenes(col):
    result = col.find()
    # get all of the attributes of the Cursor object returned by API
    print ("Cursor attr:", result.__dict__, "\n\n")

    # iterate the result Cursor object with documents
    for num, doc in enumerate(result):
        print (num, "--", doc, "\n\n")
    
    return True
    
cargar_imagenes(col_tirito)
