#python script to migrate data from csv file to mysql sb

import pandas as pd
import mysql.connector
from datetime import datetime

csv_file = 'csv_migration/compound.csv'
data = pd.read_csv(csv_file)

db = mysql.connector.connect(
    host='127.0.0.1',
    user='root',
    password='password',
    database='chemicaldb'
)

cursor = db.cursor()

insert_query = """INSERT INTO chemical (compoundName, compoundDesc, strImageSource, strImageAttribution, dateModified) VALUES (%s, %s, %s, %s, %s)"""

for index, row in data.iterrows():
    cursor.execute(insert_query, (
        row['CompoundName'], 
        row['CompounrDescription'], 
        row['strImageSource'], 
        row['strImageAttribution'], 
        datetime.strptime(row['dateModified'], '%Y-%m-%d %H:%M:%S')
    ))

db.commit()

cursor.close()
db.close()

print("Data inserted successfully.")
