import { createBrowserRouter, RouteObject } from "react-router-dom";

const sharedRouters: RouteObject[] = [
];

// const publicRouters: RouteObject[] = [];

// const privateRoters: RouteObject[] = [];

export const routers = () => {
  return createBrowserRouter([...sharedRouters]);
};
