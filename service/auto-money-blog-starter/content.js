if ( window.location.hostname == 'localhost' ) {
  var url = 'http://localhost:8080/i/wp-kr/' + 'store/data/auto-money-blog-starter/';
  // console.log( 'Hostname : localhost' );
} else {
  var url = 'https://www.wp-kr.com/' + 'store/data/auto-money-blog-starter/';
  // console.log( 'Hostname : XXXXXXXXXX' );
}

fetch(url)
.then(res => res.json())
.then(feed_provider => {
  let price_standard = feed_provider.price_standard;
  let price_deluxe = feed_provider.price_deluxe;
  let price_premium = feed_provider.price_premium;
  let output =
    '<div>' + feed_provider.content + '</div>';
  // output += '</tbody></table></div>';
  document.getElementById('price-standard').innerHTML = price_standard;
  document.getElementById('price-deluxe').innerHTML = price_deluxe;
  document.getElementById('price-premium').innerHTML = price_premium;
  document.getElementById('content').innerHTML = output;
})
