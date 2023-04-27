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

function App() {
  return (
    <>
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
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
