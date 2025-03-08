# News Aggregator Web Application

## Overview

The **News Aggregator Web Application** is a platform that allows users to search for articles, filter results, customize their news feed, and view content in a mobile-responsive interface. The application collects news articles from various sources and presents them in a personalized format.

## Features

### 1. Article Search and Filtering

- Users can search for articles by keyword.
- Results can be filtered based on:
  - **Date**
  - **Category**
  - **Source**

### 2. Personalized News Feed

- Users can customize their news feed by selecting:
  - Preferred **sources**
  - Desired **categories**
  - Favorite **authors**

### 3. Mobile-Responsive Design

- The website is fully optimized for mobile devices, ensuring a smooth and accessible browsing experience.

## Installation and Setup

### Prerequisites

- **Docker** must be installed on your system. [Download Docker](https://www.docker.com/get-started)

### Steps to Run

1. **Clone the repository**

```sh
   git clone https://github.com/Muhammad-Shahid-Jamal/news-aggregator.git
   cd news-aggregator
```

2. **Set Up Environment Variables**
- The repository includes a template for environment variables: .env.template.
- Copy and rename it to .env:

```
  cp .env.template .env
```

- Open the .env file and update it with your API keys:
```
  VITE_REACT_APP_NEWS_API_KEY=your_newsapi_key
  VITE_REACT_APP_GUARDIAN_API_KEY=your_guardian_key
  VITE_REACT_APP_NYT_API_KEY=your_nyt_k
```

- Replace your_news_api_key, your_guardian_api_key, and your_nytimes_api_key with actual API keys from:
  - **News API**
  - **The Guardian API**
  - **New York Times Developer**

3. **Build the Docker image**
```
  docker build -t news-aggregator .
```

4. **Run the Docker container**

```
  docker run -d -p 8080:80 news-aggregator
```

5. **Run the Docker container**

```
  http://localhost:8080
```
