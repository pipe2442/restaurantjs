/* eslint-disable import/no-cycle */
import nav from '../index';

function homefile() {
  document.getElementById('content').innerHTML = '';
  nav();
  const homeDiv = document.createElement('div');
  homeDiv.innerHTML
    += '<div class="mainpage">'
    + '<h1>ASIA DRAGON</h1>'
    + '</div>'
    + '<div class="description">'
        + '<img src="./assets/images/salmon.jpg" alt="salmon">'
        + '<div class="innerText">'
            + '<h1>ABOUT US</h1>'
            + '<p>'
                + 'ASIA DRAGON made its debut on Sunset Blvd in Los Angeles in 1983, introducing dim sum and other'
                + 'Chinese favorites prepared using traditional Cantonese cooking techniques. Each dish is made with'
                + 'premium ingredients, fresh-to-order, without adding any MSG, and served in a contemporary environment'
                + 'with friendly and efficient service.'
            + '</p>'
        + '</div>'
    + '</div>';
  document.getElementById('content').appendChild(homeDiv);
  const footDiv = document.createElement('div');
  footDiv.innerHTML = '<div class="footer">'
        + '<p>© Copyright Luis Felipe Angulo Torres</p>'
    + '</div>';
  document.getElementById('content').appendChild(footDiv);
}

export default homefile;
