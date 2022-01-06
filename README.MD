# Jobs API

## Welcome! 👋

Test the API [Here 👋](https://s-jobs-api.herokuapp.com/api-docs/)

## Table of contents 🙂

- [Overview](#overview)
  - [Routes](#routes)
  - [Built with](#built-with)
- [Author](#author)

## Overview 🍡

This API is built to manage career. This API helps people organize their job applications. You need to register or login to use this api.

## Routes 🔥

#### Register User

<code>POST: https://s-jobs-api.herokuapp.com/api/v1/auth/register</code>

```json
{
  "name": "name",
  "email": "email",
  "password": "password"
}
```

#### Login User

<code>POST: https://s-jobs-api.herokuapp.com/api/v1/auth/login</code>

```json
{
  "email": "email",
  "password": "password"
}
```

#### Post Job

<code>POST: https://s-jobs-api.herokuapp.com/api/v1/jobs</code>

```json
{
  "company": "company",
  "position": "position"
}
```

#### Get All Jobs

<code>GET: https://s-jobs-api.herokuapp.com/api/v1/jobs</code>

```json
{
  "jobs": [
    {
      "status": "Applied",
      "_id": "61d654faa0ee313eef273814",
      "company": "Shopify",
      "position": "backend dev",
      "createdBy": "61d65251e061113a43f54de0",
      "createdAt": "2022-01-06T02:33:30.744Z",
      "updatedAt": "2022-01-06T06:34:57.604Z",
      "__v": 0
    },
    {
      "status": "Applied",
      "_id": "61d68d51f077880004bff429",
      "company": "Google",
      "position": "Backend Dev",
      "createdBy": "61d65251e061113a43f54de0",
      "createdAt": "2022-01-06T06:33:53.167Z",
      "updatedAt": "2022-01-06T06:33:53.167Z",
      "__v": 0
    }
  ],
  "count": 2
}
```

#### Get Single Job

<code>GET: https://s-jobs-api.herokuapp.com/api/v1/jobs/{:id}</code>

#### Update Job

<code>PATCH: https://s-jobs-api.herokuapp.com/api/v1/jobs/{:id}</code>

```json
{
  "company": "company",
  "position": "position"
}
```

#### Delete Job

<code>DELETE: https://s-jobs-api.herokuapp.com/api/v1/jobs/{:id}</code>

## Built with 🧰

- Node JS
- Express
- Mongo DB
- Mongoose
- Json Web Token
- Helmet
- Swagger UI

## Author ✨

- Linkedin - [@Saliou](https://saliou1920.github.io/Images-Gallery/)
