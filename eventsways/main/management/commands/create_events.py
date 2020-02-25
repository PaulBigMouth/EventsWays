from django.core.management.base import BaseCommand
from main.models import Event, Category
import datetime
import random
import time
from datetime import datetime as dt



categories = ['Спорт','Стиль Жизни','Музыка','Путешествия']

place = ['Национальная библиотека', 'Bar 1703', 'ТЦ Пирамида', 'Отель ТётяМарина228']

street = ['Ленина', 'Гагарина', 'Маяковского', 'Машерова']

city = ['Горки','Витебск','Слуцк', 'Минск']

region = ['Витебская область', 'Минская область', 'Брестская область', 'Могилёвская область']

country = ['Беларусь', 'Россия', 'Украина', 'Казахстан']

def generate_holding_date():
    year = random.randint(2000, 2030)
    month = random.randint(1, 12)
    day = random.randint(1, 28)
    return datetime.date(year, month, day)

def generate_holding_time():
    hours = random.randint(1,23)
    minutes = random.randint(1, 59)
    seconds = random.randint(1, 59)
    return datetime.time(hours, minutes, seconds)

def generate_category_title():
    index = random.randint(0,3)
    return categories[index]

def generate_street_and_premis():
    index_street = random.randint(0,500)
    index = random.randint(0,3)
    return (street[index] + ' кв ' + str(index_street))

def generate_place():
    index = random.randint(0,3)
    return place[index]


def generate_lng_and_lat():
    lngfloat = random.random()
    lngint = random.randint(1,100)
    return (float(lngfloat+lngint)) 

def generate_checked():
    checked = random.choice([True, False])
    return checked

def generate_city():
    index = random.randint(0,3)
    return city[index]

def generate_country():
    index = random.randint(0,3)
    return country[index]

"""
def generate_category_slug():
    now = dt.now()
    dt_string = now.strftime("%d/%m/%Y %H:%M:%S")
    category_slug = ('slug' + '-' + dt_string + str(random.randint(0,10000)))
    return category_slug
"""


class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument('file_name', type=str, help='The txt file that contains events titles')

    def handle(self, *args, **kwargs):
        file_name = kwargs['file_name']
        with open(f'{file_name}.txt') as file:
            for row in file:
                title = row
                body = row
                events_holding_date = generate_holding_date()
                events_holding_time = generate_holding_time()
                category_title = generate_category_title()
                street_and_premis = generate_street_and_premis()
                city = generate_city()
                place = generate_place()
                country = generate_country()
                lng = generate_lng_and_lat()
                lat = generate_lng_and_lat()
                checked = generate_checked()
                email = (row + '@gmail.com')

                
                category = Category.objects.get_or_create(
                    title = category_title,
                    slug = category_title,
                )

                event = Event.objects.get_or_create(
                    title = title,
                    body = body,
                    events_holding_date = events_holding_date,
                    events_holding_time = events_holding_time,
                    category = Category.objects.get(title=category_title),
                    lng = lng,
                    lat = lat,
                    place = place,
                    street_and_premis = street_and_premis,
                    city = city,
                    country = country,
                    checked = checked,
                    email = email,
                )

        self.stdout.write(self.style.SUCCESS('Data imported successfully'))
