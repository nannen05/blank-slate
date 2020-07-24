export const init = () => {
    const addToCartButton = document.querySelector('[data-add-to-cart');
    const productGallery = document.querySelector('[data-product-gallery')
    const variantId = addToCartButton.dataset.variantId;
    const variantQuantity = addToCartButton.dataset.variantQuantity;
    const properties = {};
    console.log('addToCart', addToCartButton.dataset)

    const addToCart = () => {
        console.log("Clicked")
        window.ehs.js.cart.addItem(parseInt(variantId), {variantQuantity, properties})
    }

    addToCartButton.addEventListener('click', addToCart);    
};
  
export default init;