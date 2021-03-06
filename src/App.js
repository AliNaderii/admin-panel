// tools
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
// pages && components
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import SingleCustomer from './pages/single/SingleCustomer';
import SingleProduct from './pages/single/SingleProduct';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
// form inputs data
import { userInputs, customerInitialState, productInputs, productInitialState } from './constants/formSource';
// firebase tools
import { customersRef } from './firebase';
import { productsRef } from './firebase';
// table columns
import customersTableColumns from './assets/table-columns/customersTableColumns';
import productsTableColumns from './assets/table-columns/productsTableColumns';
// styles
import './App.scss';
// custom hooks
import { useTheme } from './hooks/useTheme';

function App() {
  const { user } = useAuth();
  const { theme } = useTheme();


  const CheckAuth = ({ children }) => {
    return user ? children : <Navigate to='/login' />;
  };

  return (
    <div
      className={ theme === 'light' ? 'main-container' : 'main-container dark' }
    >
      <Router>
        { user && (
          <div className="side-container">
            <Sidebar />
          </div>
        ) }
        <div className='page-container' >
          { user && <Navbar /> }
          <Routes>
            <Route path='/'>
              <Route
                index
                element={
                  <CheckAuth>
                    <Home />
                  </CheckAuth>
                }
              />
              <Route path='login' element={ <Login /> } />

              <Route path='customers'>
                <Route
                  index
                  element={
                    <CheckAuth>
                      <List
                        addNewLink='/customers/new'
                        linkText='Add new customer'
                        databaseRef={ customersRef }
                        tableTitle='Customers'
                        tableColumns={ customersTableColumns }
                      />
                    </CheckAuth>
                  }
                />
                <Route
                  path='new'
                  element={
                    <CheckAuth>
                      <New
                        formInputFields={ userInputs }
                        initialState={ customerInitialState }
                        title='Add new customer'
                        databaseRef={ customersRef }
                      />
                    </CheckAuth>
                  }
                />
                <Route
                  path=':customerId'
                  element={
                    <CheckAuth>
                      <SingleCustomer />
                    </CheckAuth>
                  }
                />
              </Route>

              <Route path='products'>
                <Route
                  index
                  element={
                    <CheckAuth>
                      <List
                        addNewLink='/products/new'
                        linkText='Add new product'
                        databaseRef={ productsRef }
                        tableTitle='Products'
                        tableColumns={ productsTableColumns }
                      />
                    </CheckAuth>
                  }
                />
                <Route
                  path='new'
                  element={
                    <CheckAuth>
                      <New
                        formInputFields={ productInputs }
                        initialState={ productInitialState }
                        title='Add new product'
                        databaseRef={ productsRef }
                      />
                    </CheckAuth>
                  }
                />
                <Route
                  path=':productId'
                  element={
                    <CheckAuth>
                      <SingleProduct />
                    </CheckAuth>
                  }
                />
              </Route>
            </Route>
          </Routes>
        </div>
      </Router>
    </div >
  );
}

export default App;
