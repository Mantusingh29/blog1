# Generated by Django 3.2.5 on 2022-03-11 05:45

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_auto_20220311_1046'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='created_date',
            field=models.DateTimeField(default=datetime.datetime(2022, 3, 11, 5, 45, 8, 475649, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='learn',
            name='pay_time',
            field=models.DateTimeField(default=datetime.datetime(2022, 3, 11, 5, 45, 8, 475649, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='post',
            name='created_date',
            field=models.DateTimeField(default=datetime.datetime(2022, 3, 11, 5, 45, 8, 475649, tzinfo=utc)),
        ),
    ]
