import RestaurantSource from '../../data/favorite-restaurant';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section tabindex="0" id="main-content">
      <h2 tabindex="0" id="main-content">EXPLORE FAVORITE RESTAURANT</h2>
      <div id="list-restaurant" class="container"></div>
    </section>
      `;
  },

  async afterRender() {
    const restaurantList = await RestaurantSource.getAllRestaurants();
    const restaurantContainer = document.querySelector('#list-restaurant');
    restaurantList.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
