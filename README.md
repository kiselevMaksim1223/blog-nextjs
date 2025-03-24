## Функциональные возможности

- **Главная страница**: Отображает список постов с бесконечной прокруткой.
- **Страница отдельного поста**: Отображает детали отдельного поста.
- **Функциональность поиска**: Позволяет пользователям искать посты с использованием дебаунс-поиска.
- **Управление состоянием**: Использует Zustand для управления состоянием постов и поисковых запросов.

## Технологии

- **Next.js**
- **React**
- **TypeScript**
- **Zustand**
- **Tailwind CSS**
- **FSD**

## Демо

[Демо приложения](https://blog-nextjs-two-omega.vercel.app/)

## Начало работы

### Предварительные требования

- Node.js (>= 14.x)
- npm или yarn

### Установка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/kiselevMaksim1223/blog-nextjs.git
cd blog-nextjs
```

2. Установите зависимости:

```bash
npm install
# или
yarn install
```

### Запуск приложения

1. Запустите сервер разработки:

```bash
npm run dev
# или
yarn dev
```

2. Откройте браузер и перейдите по адресу `http://localhost:3000`.

### Сборка для продакшена

1. Соберите приложение:

```bash
npm run build
# или
yarn build
```

2. Запустите сервер продакшена:

```bash
npm run start
# или
yarn start
```

## Структура проекта

Проект следует методологии Feature-Sliced Design (FSD). Вот обзор основных директорий и файлов:

-entities: Содержит основную бизнес-логику и сущности приложения.

-features: Содержит функциональные возможности приложения, такие как поиск и списки постов.

-shared: Содержит общие утилиты, хуки и компоненты, используемые по всему приложению.

-app: Содержит страницы и логику маршрутизации Next.js.

## Главная страница

Главная страница отображает список постов с бесконечной прокруткой. Первоначальные посты загружаются с использованием серверного рендеринга (SSR) для улучшения производительности и SEO. По мере прокрутки пользователем вниз, больше постов загружается динамически на клиентской стороне.

## Страница отдельного поста

Страница отдельного поста отображает детали отдельного поста. Первые 10 страниц статически генерируются с использованием статической генерации сайтов (SSG) для улучшения производительности и SEO. Для страниц, превышающих первые 10, используется серверный рендеринг (SSR) для загрузки деталей поста.

## Методология

Приложение построено с использованием методологии Feature-Sliced Design (FSD), которая помогает организовать кодовую базу на значимые и поддерживаемые срезы. Каждый срез представляет собой функциональность или часть приложения, что упрощает управление и масштабирование.

## Features

- **Home Page**: Displays a list of posts with infinite scrolling.
- **Single Post Page**: Displays details of a single post.
- **Search Functionality**: Allows users to search posts using debounce search.
- **State Management**: Uses Zustand for managing the state of posts and search queries.

## Technologies

- **Next.js**
- **React**
- **TypeScript**
- **Zustand**
- **Tailwind CSS**
- **FSD**

## Demo

[Application Demo](https://blog-nextjs-two-omega.vercel.app/)

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/kiselevMaksim1223/blog-nextjs.git
cd blog-nextjs
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

### Running the Application

1. Start the development server:

```bash
npm run dev
# or
yarn dev
```

2. Open your browser and go to `http://localhost:3000`.

### Building for Production

1. Build the application:

```bash
npm run build
# or
yarn build
```

2. Start the production server:

```bash
npm run start
# or
yarn start
```

## Project Structure

The project follows the Feature-Sliced Design (FSD) methodology. Here is an overview of the main directories and files:

- entities: Contains the core business logic and entities of the application.
- features: Contains the application's features, such as search and post lists.
- shared: Contains common utilities, hooks, and components used throughout the application.
- app: Contains Next.js pages and routing logic.

## Home Page

The home page displays a list of posts with infinite scrolling. Initial posts are loaded using server-side rendering (SSR) to improve performance and SEO. As the user scrolls down, more posts are dynamically loaded on the client side.

## Single Post Page

The single post page displays details of a single post. The first 10 pages are statically generated using static site generation (SSG) to improve performance and SEO. For pages beyond the first 10, server-side rendering (SSR) is used to load post details.

## Methodology

The application is built using the Feature-Sliced Design (FSD) methodology, which helps organize the codebase into meaningful and maintainable slices. Each slice represents a functionality or part of the application, making it easier to manage and scale.
