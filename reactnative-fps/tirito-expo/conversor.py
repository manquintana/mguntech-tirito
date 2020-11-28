# -*- coding: utf-8 -*-
"""
Created on Sun Nov 22 22:43:48 2020

@author: manuelquintana
"""


route = 'C:/Users/manuelquintana/Desktop/TP4 - BigData/'
file = 'iso3_names_convertion.csv'
import pandas as pd

df = pd.read_csv(route + file)

df = df[['Country', 'Alpha-3 code']]
df = df.rename(columns={'Alpha-3 code': 'Code'})

df['Code'] = df['Code'].str.replace('"','')
df['Code'] = df['Code'].str.replace(' ','')

df

for i in range(len(df)):
    pais = df.loc[i,'Country']
    code = df.loc[i,'Code']
    print('{' + f'\"Country\": \"{pais}\", \"Code\": \"{code}\" ' + '},')
