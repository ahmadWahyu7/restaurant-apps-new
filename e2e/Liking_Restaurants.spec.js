/* eslint-disable no-undef */
Feature('Liking Restaurants');

Scenario('Liking and Unliking a restaurant ', ({ I }) => {
  I.amOnPage('#/');

  I.executeScript('window-scrollTo(0, 1000);');
  I.wait(3);
  I.seeElement('.content-restaurant h3 a');
  I.wait(3);
  I.click(locate('.content-restaurant h3 a').first());
  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.wait(5);
  I.seeElement('.card');
  I.click(locate('.content-restaurant h3 a').first());
  I.wait(3);
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.dontSeeElement('.content-restaurant h3 a');
});
