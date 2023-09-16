# Lunch Go Where
 Lunch Go Where is an app that helps users decide where to go for lunch

## Description

Lunch Go Where helps users decide where to go for lunch by return a random restaurant from submitted suggestions from a group of colleagues. This project aims to let a group of co-workers decide in a location to head to for lunch without much fuss.

### Technical Used

- PERN stack - PostgreSQL, Express, React, Node.js
- CSS - Tailwind
- Restful APIs
- axios

### User Stories

Project users are group of co-workers trying to decide where to head for lunch.

User must be able to:

- Input a restaurant of their choice, which is submitted to a backend service via an API call
- Remove wrong inputs
- Request for a random choice based on submitted choices

## Planning and Development Process

I started off planning the wireframes to have a rough idea of how the app should look like. Next, I planned the database table and included primary key and foreign key, and also to determine which values should be unique and not null.

I started developing the project from the frontend with CSS and skeleton of the body. Next, I coded the backend with CRUDs. After, I tried to link the backend and frontend with axios. I continued on from there and edit the backend and frontend as and when needed. Lots of debugging required.

### Problem-Solving Strategy

I console.logged from where the error is to determine where the problem lies in the code and tried to move from there by debugging the codes.
I also googled the error messages if I am not sure what that error means to find the answer.

## APIs Used

- Restful APIs
  
| Purpose        | HTTP Verb  |
| ------------- |-------------|
| Retrieve submitted responses     |GET |
| Insert submitted responses to database     | POST |
| Delete wrong input of submitted response     | DELETE |
| Get random choice based on submitted responses  | GET |
