import {load} from '@shopify/theme-sections';
import '../sections/product';

import { init as productFormInit } from '../components/ProductForm';
import { init as productTileInit } from '../components/ProductTile';
import { productGallerySlider } from '../components/Sliders';

import Products from '../common/Products';

load('*');

document.addEventListener('DOMContentLoaded', () => {
    productFormInit()
    productTileInit()
    productGallerySlider()

    const upSells = document.querySelectorAll('[data-upsell-product]')
    upSells.forEach((product) => {
        console.log(product)
        window.ehs.upSells.push(product)
        const data = JSON.parse(product);
        window.ehs.upSells.push(data);
    });

    console.log(Products)
});
  
window.addEventListener('load', () => {

});
 