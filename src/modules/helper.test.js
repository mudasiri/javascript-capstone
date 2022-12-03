/** @jest-environment jsdom */
import { getAllAstronauts } from './helper.js';

describe('Home Page APIs', () => {
  beforeEach(() => {
    document.body.innerHTML = `
 <span id="count-items"></span>
<main id="astronaut">
 </main> `;
  });
  // arrange
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(
      [
        {
          id: 1,
          name: 'Chen Dong',
          country: 'China',
          flag_code: 'cn',
          agency: 'CNSA',
          position: 'Commander',
          spacecraft: 'Shenzhou 14',
          launched: 1654389841,
          iss: false,
          days_in_space: 33,
          url: 'https://en.wikipedia.org/wiki/Chen_Dong_(taikonaut)',
          image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/%E8%88%AA%E5%A4%A9%E5%91%98%E9%99%88%E5%86%AC_Chen_Dong.jpg',
        },
        {
          id: 2,
          name: 'Liu Yang',
          country: 'China',
          flag_code: 'cn',
          agency: 'CNSA',
          position: 'Operator',
          spacecraft: 'Shenzhou 14',
          launched: 1654389841,
          iss: false,
          days_in_space: 12,
          url: 'https://en.wikipedia.org/wiki/Liu_Yang_(taikonaut)',
          image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Liu_Yang_-_UNOOSA_50_Years_of_Women_in_Space_NHM_Vienna_2013_b.jpg',
        }],
    ),
  }));

  beforeEach(() => {
    fetch.mockClear();
  });

  it('Get all Asttronauts', async () => {
    // act
    const itemsCount = await getAllAstronauts(); // Run the function
    // assert
    expect(itemsCount.length).toEqual(2); // Make an assertion on the result
  });
});