# Generated by Django 3.2 on 2021-05-07 07:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('library_api', '0030_auto_20210507_0721'),
    ]

    operations = [
        migrations.AlterField(
            model_name='meminjam',
            name='tanggal_pengembalian',
            field=models.DateTimeField(null=True),
        ),
    ]
