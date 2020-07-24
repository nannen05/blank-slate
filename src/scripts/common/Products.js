//import dom from 'common/Dom';
//import { getAlternativeTemplate } from 'common/Helpers';
import $ from 'jquery';

const getAlternativeTemplate = async (resource, templateName, json = false) => {
    const url = `/${resource}?view=${templateName}`;
    console.log(url)
    const options = { credentials: 'include' };
    return await fetch(url, options).then(res => (json) ? res.json() : res.text());
}

class Products {
  constructor() {
    this.products = [];
    this.loadProducts();
  }

  loadProducts() {
    $('[data-product-data]').get().map(node => {
      const data = JSON.parse(node.innerText);
      this.products.push(data);
    });

    console.log(this.products)
  }

  // For retrieving and caching product JSON data
  async getProduct(handle) {
    const found = this.products.find(product => product.handle === handle);

    if (!found) {
      try {
        const product = await getAlternativeTemplate(`products/${handle}`, 'json', true);

        if (product) {
          this.products.push(product);
          return product;
        }
      } catch (error) {
        console.error(error, 'error');
        return undefined;
      }
    }

    return found;
  }
};

export default (new Products);