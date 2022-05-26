import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Blogs from './pages/Blogs/Blogs';
import SignUp from './pages/Login/SignUp';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import RequireAuth from './pages/Login/RequireAuth';
import DashBoard from './pages/DashBoard/DashBoard';
import AllProducts from './pages/Home/AllProducts';
import Myitems from './pages/DashBoard/Myitems';
import Reviews from './pages/DashBoard/Reviews';
import MyProfile from './pages/DashBoard/MyProfile';
import Footer from './pages/Shared/Footer';
import AllUser from './pages/DashBoard/AllUser';
import ManageAllProducts from './pages/DashBoard/ManageAllProducts';
import ManageAllOrders from './pages/DashBoard/ManageAllOrders';
import AddProduct from './pages/DashBoard/AddProduct';
import Payment from './pages/DashBoard/Payment';
import Error from './pages/Shared/Error';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products/:id' element={
          <RequireAuth>
            <ProductDetails></ProductDetails>
          </RequireAuth>
        }></Route>

        <Route path='/dashboard' element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>

          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="/dashboard/reviews" element={<Reviews></Reviews>}></Route>
          <Route path="/dashboard/myitems" element={<Myitems></Myitems>}></Route>
          <Route path="/dashboard/allusers" element={<AllUser></AllUser>}></Route>
          <Route path="/dashboard/addProduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="/dashboard/manageallproducts" element={<ManageAllProducts></ManageAllProducts>}></Route>
          <Route path="/dashboard/manageallorders" element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path="/dashboard/payment/:id" element={<Payment></Payment>}></Route>

        </Route>

        <Route path='/allproducts' element={<AllProducts></AllProducts>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/myprotfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
