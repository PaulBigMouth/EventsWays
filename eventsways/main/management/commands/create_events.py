from django.core.management.base import BaseCommand
from main.models import Event, Category, Address
import datetime
import random
import time
from datetime import datetime as dt



categories = ['Sport','LifeStyle','Misic','Travelling']

locations = ['National Library', 'Bar 1703', 'Markos', 'Hostel in Gagrina']

street = ['Lenina', 'Gagarina', 'Mayakovskogo', 'Masherova']

city = ['Horki','Vitebsk','Slutsk', 'Minsk']

region = ['Vitebskaya obl', 'Minskaya obl', 'Brestskaya obl', 'Mohilevskaya obl']

country = ['Belarus', 'Russia', 'Ukraine', 'Kazakhstan']

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

def generate_locations():
    index = random.randint(0,3)
    return locations[index]

def generate_premises():
    index = random.randint(0,500)
    return (str(index) + ' kv')

def generate_street():
    index = random.randint(0,3)
    return street[index]

def generate_city():
    index = random.randint(0,3)
    return city[index]

def generate_region():
    index = random.randint(0,3)
    return region[index]

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
                location = generate_locations()
                premises = generate_premises()
                street = generate_street()
                city = generate_city()
                region = generate_region()
                country = generate_country()



                category = Category.objects.get_or_create(
                    title = category_title,
                    slug = category_title,
                )

                address = Address.objects.get_or_create(
                    premises = premises,
                    street = street,
                    city = city,
                    region = region,
                    country = country
                )

                event = Event.objects.get_or_create(
                    title = title,
                    body = body,
                    events_holding_date = events_holding_date,
                    events_holding_time = events_holding_time,
                    category = Category.objects.get(title=category_title),
                    location = location,
                    address = Address.objects.get(premises=premises, city = city, street = street, region = region, country = country),
                    )


        self.stdout.write(self.style.SUCCESS('Data imported successfully'))
