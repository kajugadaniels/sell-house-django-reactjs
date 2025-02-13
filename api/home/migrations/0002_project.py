# Generated by Django 5.0.4 on 2024-10-20 19:07

import django.utils.timezone
import home.models
import imagekit.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('slug', models.SlugField(blank=True, unique=True)),
                ('image', imagekit.models.fields.ProcessedImageField(upload_to=home.models.project_image_path)),
                ('total_area', models.CharField(blank=True, max_length=255, null=True)),
                ('living_space', models.CharField(blank=True, max_length=255, null=True)),
                ('price', models.CharField(blank=True, max_length=255, null=True)),
                ('location', models.CharField(blank=True, max_length=255, null=True)),
                ('year', models.CharField(blank=True, max_length=255, null=True)),
                ('category', models.CharField(blank=True, choices=[('Residential', 'Residential'), ('Commercial', 'Regular Projects'), ('Selling', 'Selling')], max_length=50, null=True)),
                ('description', models.TextField()),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
