// "start": "react-scripts --openssl-legacy-provider start",

// function App() {
//   const admin = useSelector((state) => state.user.currentUser.isAdmin);
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login">
//           <Login />
//         </Route>
//         {admin && (
//           <>
//             <Topbar />
//             <div className="container">
//               <Sidebar />
//               <Route exact path="/">
//                 <Home />
//               </Route>
//               <Route path="/users">
//                 <UserList />
//               </Route>
//               <Route path="/user/:userId">
//                 <User />
//               </Route>
//               <Route path="/newUser">
//                 <NewUser />
//               </Route>
//               <Route path="/products">
//                 <ProductList />
//               </Route>
//               <Route path="/product/:productId">
//                 <Product />
//               </Route>
//               <Route path="/newproduct">
//                 <NewProduct />
//               </Route>
//             </div>
//           </>
//         )}
//       </Routes>
//     </Router>
//   );
// }

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function LoadDashboard({ newRoute }) {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        {newRoute}
      </div>
    </>
  );
}

function App() {
  const admin = useSelector((state) => state.user?.currentUser?.isAdmin);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          {admin && (
            <>
              <Route path="/" element={<LoadDashboard newRoute={<Home />} />} />

              <Route
                path="/users"
                element={<LoadDashboard newRoute={<UserList />} />}
              />

              <Route
                path="/user/:userId"
                element={<LoadDashboard newRoute={<User />} />}
              />

              <Route
                path="/newUser"
                element={<LoadDashboard newRoute={<NewUser />} />}
              />

              <Route
                path="/products"
                element={<LoadDashboard newRoute={<ProductList />} />}
              />

              <Route
                path="/product/:productId"
                element={<LoadDashboard newRoute={<Product />} />}
              />

              <Route
                path="/newProduct"
                element={<LoadDashboard newRoute={<NewProduct />} />}
              />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
}
// return <div>
// <Topbar />
// <div className="container">
//   <Sidebar />
//   <Home />
// </div>
// </div>

export default App;
