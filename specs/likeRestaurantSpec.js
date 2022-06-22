/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import FavoriterestaurantIdb from '../src/scripts/data/favorite-restaurant';
import * as TestFactories from './helpers/testFactories';

describe('Liking a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeTruthy();
  });

  it('Should not show the unlike button when the restaurant has not been liked befoer', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeFalsy();
  });

  it('Should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.getElementById('likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriterestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });
    FavoriterestaurantIdb.deleteRestaurant(1);
  });

  it('Should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriterestaurantIdb.putRestaurant({ id: 1 });
    document.getElementById('likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriterestaurantIdb.getAllRestaurants()).toEqual([
      { id: 1 },
    ]);
    FavoriterestaurantIdb.deleteRestaurant(1);
  });

  it('Should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.getElementById('likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriterestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
