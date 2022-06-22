import RestaurantSource from '../data/restaurant-source';

const reviewInitiator = (button, url, name, review) => {
  button.addEventListener('click', async () => {
    const dataReview = {
      id: url,
      name: name.value,
      review: review.value,
    };
    const reviewer = await RestaurantSource.addReview(dataReview);
    return reviewer;
  });
};

export default reviewInitiator;
