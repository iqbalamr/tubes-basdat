# Generated by Django 3.2 on 2021-05-09 21:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('library_api', '0034_alter_buku_gambar'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='meminjam',
            name='id_peminjam',
        ),
        migrations.AddField(
            model_name='meminjam',
            name='id_peminjam',
            field=models.ManyToManyField(blank=True, to='library_api.Peminjam'),
        ),
    ]
