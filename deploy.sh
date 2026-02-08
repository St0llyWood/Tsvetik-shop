#!/bin/bash
# Собираем сайт
hugo

# Переходим в папку с собранным сайтом
cd public

# Инициализируем git репозиторий
git init
git add .
git commit -m "Deploy сайта Цветик"

# Добавляем удаленный репозиторий GitHub
git remote add origin https://github.com/St0llyWood/tsvetik-shop.git
git branch -M main
git push -u origin main --force