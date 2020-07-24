/* eslint-disable import/no-cycle */
//import Vue from 'vue';
import Cart from './Cart';

export const init = () => {
  const cart = new Cart();
  window.ehs.js.cart = cart;
};

export default init;