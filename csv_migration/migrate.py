#python script to migrate data from csv file to mysql sb
import pandas as pd
import mysql.connector
from datetime import datetime
import os

host = os.getenv('DB_HOST', '127.0.0.1')
user = os.getenv('DB_USER', 'root')
password = os.getenv('DB_PASSWORD', 'password')
database = os.getenv('DB_NAME', 'chemicaldb')

csv_file = './compound.csv'
data = pd.read_csv(csv_file)

db = mysql.connector.connect(
    host=host,
    user=user,
    password=password,
    database=database
)

cursor = db.cursor()

cursor.execute("""DROP TABLE IF EXISTS chemical""")

cursor.execute("""CREATE TABLE chemical(
	id INT PRIMARY KEY AUTO_INCREMENT,
    compoundName VARCHAR(255) NOT NULL,
    compoundDesc LONGTEXT,
    strImageSource LONGTEXT,
    strImageAttribution LONGTEXT,
    dateModified DATETIME
);""")

insert_query = """INSERT INTO chemical 
(compoundName, compoundDesc, strImageSource, strImageAttribution, dateModified) 
VALUES (%s, %s, %s, %s, %s)"""

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