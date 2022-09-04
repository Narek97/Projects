import { Switch, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp/index";
import SignIn from "../pages/SignIn/index";
import Home from "../pages/Home/index";
import Settings from "../pages/Settings";
import AdminPanel from "../pages/AdminPanel/index";
// import { useSelector } from "react-redux";

export const useRouter = (isAuthenticated = false) => {
  return (
    <Switch>
      <Route path="/" exact>
        <SignIn />
      </Route>
      <Route path="/signup" exact>
        <SignUp />
      </Route>
      <Route path="/signin" exact>
        <SignIn />
      </Route>
      <Route path="/admin" exact>
        <AdminPanel />
      </Route>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/settings" exact>
        <Settings />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

// export const useRouter = (isAuthenticated = false) => {
//   const { role } = useSelector((state) => state.user.userData);
//   if (isAuthenticated) {
//     return (
//       <Switch>
//         {role === "admin" ? (
//           <Route path="/admin" exact>
//             <AdminPanel />
//           </Route>
//         ) : (
//           <Route path="/home" exact>
//             <Home />
//           </Route>
//         )}
//         <Route path="/settings" exact>
//           <Settings />
//         </Route>
//         <Route path="*" exact>
//           <NotFound />
//         </Route>
//       </Switch>
//     );
//   } else {
//     return (
//       <Switch>
//         <Route path="/" exact>
//           <SignIn />
//         </Route>
//         <Route path="/signup" exact>
//           <SignUp />
//         </Route>
//         <Route path="/signin" exact>
//           <SignIn />
//         </Route>
//         <Route path="*" exact>
//           <NotFound />
//         </Route>
//       </Switch>
//     );
//   }
// };
