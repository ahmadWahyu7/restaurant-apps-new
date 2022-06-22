import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = response.json();
    if (responseJson.pending === true) {
      console.log('Hello');
    }
    return responseJson;
  }

  static async addReview(review) {
    const response = await fetch(`${API_ENDPOINT.POST_REVIEW}`, {
      method: 'POST',
      body: JSON.stringify(review),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);
  }
}

export default RestaurantSource;
