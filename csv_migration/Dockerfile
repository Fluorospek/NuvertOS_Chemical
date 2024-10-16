FROM python:3.10
WORKDIR /usr/src/app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY migrate.py ./
COPY compound.csv ./
COPY wait-for-it.sh /usr/src/app/wait-for-it.sh
RUN chmod +x /usr/src/app/wait-for-it.sh
CMD ["./wait-for-it.sh", "db:3306", "--", "python", "load_data.py"]