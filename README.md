# ONE APP

## Deployed URL: https://one-app-api-rafiulalam98.vercel.app

A Node.js Express.js backend with MongoDB integration for home service.

## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Deployment](#deployment)
- [Acknowledgments](#acknowledgments)

## Introduction

The Home Services App is a robust solution designed to streamline and elevate the management of household tasks. Built on a Node.js Express.js backend with seamless MongoDB integration, this application offers a user-friendly platform for scheduling and booking a variety of home services. Users can enjoy real-time updates on service requests, ensuring efficient and transparent communication. The app prioritizes security and convenience, ongoing a smooth payment processing experience. From browsing available services to scheduling appointments, the Home Services App aims to enhance the overall living experience by simplifying the coordination of essential home-related tasks. Whether you're looking to manage routine maintenance or address unexpected issues, this application provides a centralized and efficient solution for all your home service needs.


## Getting Started

### Prerequisites

- Typescript
- MongoDB
- Node.js

### Installation

```bash
git clone https://github.com/RafiulAlam98/ONE.app-Api
cd project_name
npm install
```

### API Endpoints

### Users

- `GET /api/v1/users`: Get All Users
- `GET /api/v1/users/:id` Get Users By Id
- `POST /api/v1/users/signup`: Add New Users (SignUp)
- `PATCH /api/v1/users/:id`: Update Users by Id
- `DELETE /api/v1/users/:id`: Delete a specific Users.


### Admin

- `GET /api/v1/admins`: Get All Admin
- `GET /api/v1/admins/:id` Get Admin By Id
- `POST /api/v1/admins/create-admin`: Add New Admin (SignUp)
- `PATCH /api/v1/admins/:id`: Update Admin by Id
- `DELETE /api/v1/admins/:id`: Delete a specific Admin.


### Auth

- `POST /api/v1/auth/login`: For Login
- `GET /api/v1/users/my-profile` Get My Profile
- `PATCH api/v1/users/my-profile`: Update My Profile


### Services

- `GET /api/v1/services`: Get All Service
- `GET /api/v1/services/:id` Get Service By Id
- `POST /api/v1/services`: Add New Service
- `PATCH /api/v1/services/:id`: Update Service by Id
- `DELETE /api/v1/services/:id`: Delete a specific service.


### Sub Services

- `GET /api/v1/sub-services`: Get All Sub Services
- `GET /api/v1/sub-services/:id` Get Sub Services By Id
- `POST /api/v1/sub-services`: Add New Sub Services
- `PATCH /api/v1/sub-services/:id`: Update Sub Services by Id
- `DELETE /api/v1/sub-services/:id`: Delete a specific Sub Services.


### Order

- `GET /api/v1/order`: Get All Order
- `GET /api/v1/order/:id` Get Order By Id
- `POST /api/v1/order`: Add New Order
- `PATCH /api/v1/order/:id`: Update Order by Id
- `GET /api/v1/order/:email`: GET Order by User Email
- `DELETE /api/v1/order/:id`: Delete a specific Order.


### Feedback

- `GET /api/v1/feedback`: Get All Feedback
- `GET /api/v1/feedback/:id` Get Feedback By Id
- `POST /api/v1/feedback`: Add New Feedback
- `PATCH /api/v1/feedback/:id`: Update Feedback by Id
- `DELETE /api/v1/feedback/:id`: Delete a specific Feedback.


### Upcoming Services

- `GET /api/v1/upcoming-services`: Get All Upcoming Services
- `GET /api/v1/upcoming-services/:id` Get Upcoming Services By Id
- `POST /api/v1/upcoming-services`: Add New Upcoming Services
- `PATCH /api/v1/upcoming-services/:id`: Update Upcoming Services by Id
- `DELETE /api/v1/upcoming-services/:id`: Delete a specific Upcoming Services.


### Events

- `GET /api/v1/events`: Get All Events
- `GET /api/v1/events/:id` Get Events By Id
- `POST /api/v1/events`: Add New Events
- `PATCH /api/v1/events/:id`: Update Events by Id
- `DELETE /api/v1/events/:id`: Delete a specific Events.


### Blog

- `GET /api/v1/blog`: Get All Blog
- `GET /api/v1/blog/:id` Get Blog By Id
- `POST /api/v1/blog`: Add New Blog
- `PATCH /api/v1/blog/:id`: Update Blog by Id
- `DELETE /api/v1/blog/:id`: Delete a specific Blog.


### Blog

- `GET /api/v1/blog`: Get All Blog
- `GET /api/v1/blog/:id` Get Blog By Id
- `POST /api/v1/blog`: Add New Blog
- `PATCH /api/v1/blog/:id`: Update Blog by Id
- `DELETE /api/v1/blog/:id`: Delete a specific Blog.


### Faq

- `GET /api/v1/faq`: Get All Faq
- `GET /api/v1/faq/:id` Get Faq By Id
- `POST /api/v1/faq`: Add New Faq
- `PATCH /api/v1/faq/:id`: Update Faq by Id
- `DELETE /api/v1/faq/:id`: Delete a specific Faq.






