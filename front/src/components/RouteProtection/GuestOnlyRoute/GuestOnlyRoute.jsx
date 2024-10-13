import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const GuestOnlyRoute = () => {
  const { user } = useSelector((state) => state.auth);
  // console.log(user)
  return user ?  <Navigate to="/" replace /> :  <Outlet /> ;
};
export default GuestOnlyRoute;
