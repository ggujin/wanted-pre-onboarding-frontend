import { Route, RouteProps, Navigate } from "react-router-dom";

export function AuthRoute(props: RouteProps) {
  if (localStorage.getItem("accessToken")) return <Navigate to="/todo" />;

  return <Route {...props} />;
}
