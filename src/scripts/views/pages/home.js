import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section tabindex="0" id="main-content">
        <h2 tabindex="0" id="main-content">EXPLORE RESTAURANT</h2>
        <div id="list-restaurant" class="container"></div>
      </section>
      `;
  },

  async afterRender() {
    const restaurantList = await RestaurantSource.listRestaurant();
    const restaurantContainer = document.querySelector('#list-restaurant');
    restaurantList.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
