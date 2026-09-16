# Developer Resource Explorer

A responsive frontend application for discovering useful developer tools and resources.

Built with React, TypeScript, Vite, Tailwind CSS, and React Router.

## Live Demo

Coming soon.

## Features

- Browse developer resources
- Search resources by name
- Filter by category
- Sort by name or rating
- View individual resource details
- Add and remove favorites
- Favorites persist using localStorage
- Responsive mobile, tablet, and desktop layout
- Empty and no-results states
- Custom 404 page

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- localStorage

## What I Learned

This project helped me practice:

- React component architecture
- Props and TypeScript types
- useState
- useEffect
- Context API
- Controlled form inputs
- Array map, filter, find, and sort
- React Router
- Dynamic routes with useParams
- localStorage
- Responsive design with Tailwind CSS

## Project Structure

https://github.com/divineconnect135/developer-resource-explorer
src/
├── components/
│ ├── Navbar.tsx
│ ├── ResourceCard.tsx
│ └── ResourceGrid.tsx
├── context/
│ ├── FavoritesContext.ts
│ └── FavoritesProvider.tsx
├── data/
│ └── resources.ts
├── pages/
│ ├── Home.tsx
│ ├── Resources.tsx
│ ├── ResourceDetails.tsx
│ ├── Favorites.tsx
│ └── NotFound.tsx
├── types/
│ └── Resource.ts
├── App.tsx
└── main.tsx

```

```
