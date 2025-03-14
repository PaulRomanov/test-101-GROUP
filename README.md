# Transaction History App

Это приложение для просмотра истории транзакций.

## Запуск ДЕМО 

https://test-101-groupspa.vercel.app/


## Запуск локально

1.  **Клонирование репозитория:**

    ```bash
    git clone <ваш_репозиторий>
    cd <название_репозитория>
    ```

2.  **Установка зависимостей:**

    ```bash
    npm install
    ```

3.  **Запуск проекта:**

    ```bash
    npm run dev
    ```

4.  Откройте браузер и перейдите по адресу `http://localhost:5173/`.

## Описание логики фильтрации и сортировки

### Фильтрация

* Фильтрация транзакций осуществляется по типу (все, доход, расход) и по диапазону дат.
* При выборе типа транзакции отображаются только транзакции, соответствующие выбранному типу.
* При выборе диапазона дат отображаются только транзакции, даты которых попадают в выбранный диапазон.
* Если фильтры не выбраны, отображаются все транзакции.

### Сортировка

* Сортировка транзакций осуществляется по дате или сумме.
* Сортировка может быть по возрастанию или по убыванию.
* При выборе критерия сортировки и порядка сортировки транзакции отображаются в соответствии с выбранными параметрами.
* Если сортировка не выбрана, транзакции отображаются в порядке их получения.

## Структура проекта

* `src/components`: Компоненты Vue.
* `src/stores`: Pinia сторы для управления состоянием приложения.
* `src/types`: Типы данных TypeScript.
* `src/assets`: Статические ресурсы (стили, изображения).
* `public`: Публичные ресурсы.


# **Тестовое задание для кандидата на позицию Frontend разработчика (Vue.js) Middle+**

<aside>
🤝 Здравствуйте, благодарим за отклик, предлагаем вам тестовое задание, по результатам которого мы готовы пригласить вас на собеседование.

</aside>

## 📝 **Тестовое задание: Интерфейс управления историей транзакций**

### **📌 Описание**

Вам необходимо разработать **SPA (Single Page Application)** для отображения и управления историей транзакций пользователя. Приложение должно быть интерактивным, с возможностью **фильтрации** и **сортировки** данных.

### **🔧 Требования к реализации**

✅ **Фронтенд**: Vue.js (версии 2 или 3, на ваше усмотрение).

✅ **Стилизация**: Используйте любой UI-фреймворк (**Vuetify**, **TailwindCSS**, **Element UI**) или кастомные стили.

✅ **Состояние**: Vuex / Pinia (по вашему выбору).

✅ **Запросы**: Использование `axios` (хотя данные загружаются из мок-сервиса, реализация запросов обязательна).

✅ **Фильтрация и сортировка**:

- Фильтрация по **типу транзакции** (доход / расход).
- Фильтрация по **диапазону дат**.
- Сортировка по **дате** и **сумме** транзакции.
✅ **Отображение данных**:
- Таблица с историей транзакций.
- Количество записей на странице — 10 (с пагинацией).
✅ **Mock API**: Данные должны браться из JSON-файла или генерироваться через `json-server` / `msw.js`.
✅ **Оформление кода**: Чистая архитектура, переиспользуемые компоненты.
✅ **Формат сдачи**: **GitHub-репозиторий** с Readme-файлом.

---

### **📂 Структура данных (пример JSON)**

```json
[
  {
    "id": 1,
    "date": "2024-02-01",
    "type": "income",
    "amount": 15000,
    "description": "Оплата за проект"
  },
  {
    "id": 2,
    "date": "2024-02-02",
    "type": "expense",
    "amount": 5000,
    "description": "Оплата подрядчику"
  }
]

```

---

### **📦 Что должно быть в репозитории?**

📁 **Исходный код проекта** (Vue + сборщик Webpack/Vite).

📄 [**README.md**](http://readme.md/) с инструкцией по запуску.

📝 **Описание логики фильтрации и сортировки**.

---

### **🎯 Критерии оценки**

🔹 Чистота и структурированность кода.

🔹 Понимание работы с Vue.js и управлением состоянием.

🔹 Реализация фильтрации и сортировки (сделать на моковых данных).

🔹 Удобство интерфейса и UX.

🔹 Работа с mock-данными (без реального бэкенда).

---

### **⏳ Срок выполнения**

**3–5 дней** с момента получения задания.

---

### **📩Результат отправить на почту**

[office@101-group.ru](mailto:office@101-group.ru)

Если есть вопросы — спрашивайте! 😊

Желаем успехов в выполнении задания!