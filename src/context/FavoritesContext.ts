import { createContext, useContext } from "react";

type FavoritesContextType = {
  favoriteIds: number[];
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorite must be inside FavoritesProvider");
  }

  return context;
}
