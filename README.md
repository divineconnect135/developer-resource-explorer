# Developer Resource Explorer

A responsive web application for discovering useful developer tools and resources.

Built with React, TypeScript, Tailwind CSS, React Router, and Context API, the application allows users to search, filter, sort, favorite, and explore developer resources through a clean and responsive interface.

## Live Demo

[View Live Demo](https://developer-resource-explorer.vercel.app/)

## Features

- Browse developer tools and resources
- Search resources by name
- Filter resources by category
- Sort resources
- View detailed resource information
- Add resources to favorites
- Remove resources from favorites
- Persistent favorites using localStorage
- Dynamic resource detail pages
- Empty-state handling
- No-results handling
- Custom 404 page
- Responsive layout for mobile, tablet, and desktop

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Context API
- localStorage

## Technical Implementation

### Search and Filtering

Users can search resources and filter them by category to quickly find relevant developer tools.

### Sorting

Resources can be sorted to make browsing and comparing available tools easier.

### Dynamic Routing

React Router is used to create individual detail pages for each resource.

Dynamic route parameters are used to determine which resource should be displayed.

### Favorites Management

Favorites are managed globally using React Context API.

Favorite resources are stored in localStorage so they remain available after the browser is refreshed.

### UI States

The application includes dedicated states for:

- No search results
- Empty favorites
- Missing resources
- Invalid routes
- 404 pages

### Responsive Design

Tailwind CSS is used to create layouts that adapt across mobile, tablet, and desktop screen sizes.

## What I Learned

This project helped me strengthen my understanding of:

- React component architecture
- TypeScript types and interfaces
- React Router
- Dynamic routes
- `useParams`
- Context API
- Global state management
- Controlled inputs
- Search and filtering logic
- Sorting data
- Array methods such as `map`, `filter`, `find`, and `sort`
- localStorage
- Persistent state
- Empty and error states
- Responsive design with Tailwind CSS

## Run Locally

Clone the repository:

```bash
git clone https://github.com/divineconnect135/developer-resource-explorer.git
