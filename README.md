#Simple starter kit "StartMe"

###Установка

У вас в системе должны быть установлены gulp и bower:
- `npm i gulp-cli gulp bower -g`

Создайте папку для проекта: 
- `mkdir projectName`

Склонируйте репозиторий:
- `git clone https://github.com/makaspell/startme.git projectName`

###Запуск

Перейдите в папку проекта:
- `cd projectName`

Установите зависимости:
- `npm i && bower i`

Запустите проект:
- `gulp`

---

#####Gulp tasks
- `gulp` - запуск веб-сервера со слежением за изменением файлов
- `gulp clean` - удаление папки `build` вместе с содержимым
- `gulp html` - компиляция html
- `gulp css` - компиляция css
- `gulp js` - компиляция js