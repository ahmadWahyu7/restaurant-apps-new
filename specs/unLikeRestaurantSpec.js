/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import FavoriterestaurantIdb from '../src/scripts/data/favorite-restaurant';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking a restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriterestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriterestaurantIdb.deleteRestaurant(1);
  });

  it('Should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]'));
  });

  it('Should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeFalsy();
  });

  it('should be able to remove liked movie from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriterestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('Should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    await FavoriterestaurantIdb.deleteRestaurant(1);

    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriterestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
