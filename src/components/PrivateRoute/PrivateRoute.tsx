import { Route, RouteProps, Navigate } from "react-router-dom";

export function PrivateRoute(props: RouteProps) {
  if (!localStorage.getItem("accessToken")) return <Navigate to="/signin" />;

  return <Route {...props} />;
}
