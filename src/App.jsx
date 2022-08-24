import React from 'react';
import { Switch, Route} from "react-router-dom";
import "swiper/css/bundle";

import './App.css';
import Accordeon from './components/accordion/Accordeon';
import Blogs from "./components/foydaliBlog/Blogs"  
import Form from "./components/form/Form"
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Production from './components/production/Production';
import Nav from './components/header/Nav';
import Product from './components/production/Product';
import Category from './components/category/Category';
import ProductAbout from "./components/ProductAbout/ProductAbout"
import More from "./components/more/More"
import MoreAbout from './components/moreAbout/MoreAbout';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/">
              <Header />
              <Production />
              <Accordeon />
              <Blogs />
              <Form />
          </Route>
          <Route path="/categoryId=:id" element={<Category/>}>
             <Nav />
             <Product />
             <Blogs />
            <Form />
          </Route>
          <Route path="/productId=:productId" element={<ProductAbout/>}>
            <Nav />
            <ProductAbout/>
            <Form />
          </Route>

          <Route path="/more" element={<More/>}>
            <Header/>   
            <More/>
            <Form />
          </Route>

          <Route path="/moreId=:moreId" element={<MoreAbout/>}>
            <Nav/>
            <MoreAbout/>
            <Form />
          </Route>

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
