# Generated by Django 4.2.20 on 2025-05-06 14:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0004_remove_product_image_secondaryimage'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images'),
        ),
    ]
