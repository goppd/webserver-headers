// Задание 1

// Логирование запросов в файл

// 1.	Создание сервера:

// Импортируйте модули `http` и `fs`.
// Создайте сервер с использованием метода `http.createServer()`.

// 2.	Логирование информации о запросе:

// В функции обратного вызова для сервера логируйте метод запроса (`req.method`), URL (`req.url`) и текущую дату/время в текстовый файл.
// Используйте метод `fs.appendFile()` для добавления логов в файл `requests.log`.

// 3.	Формирование ответа:

// Установите статус ответа `200`.
// Установите заголовок `Content-Type` в `text/plain`.
// Отправьте текстовый ответ с сообщением "Запрос залогирован".

// 4.	Запуск сервера:

// Настройте сервер на прослушивание порта `3000`.
// Добавьте сообщение в консоль, которое будет выводиться при успешном запуске сервера.

import http from 'http'
import fs from 'fs'

const port = 3333

const server = http.createServer((req, res) => {
  const date = new Date().toLocaleString()
  const log = `${date} - ${req.method} ${req.url}\n`

  fs.appendFile('requests.log', log, (err) => {
    if (err) {
      console.error('Error writing to file:', err)
    } else {
      console.log('Request logged to file')
    }
  })

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Request logged')
})

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
