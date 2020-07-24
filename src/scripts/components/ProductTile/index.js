/* eslint-disable import/no-cycle */
//import Vue from 'vue';
import Products from '../../common/Products';

export const init = () => {
  //const cart = new Cart();
  //window.ehs.js.products = Products;
  document.querySelectorAll('[data-product-tile]')
    .forEach((product) => {
        console.log(product)
    });
};

export default init;