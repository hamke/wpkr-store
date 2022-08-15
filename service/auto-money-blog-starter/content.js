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

  let price_standard_list = document.querySelectorAll('.price-standard');
  let price_deluxe_list = document.querySelectorAll('.price-deluxe');
  let price_premium_list = document.querySelectorAll('.price-premium');

  for (let i = 0; i < price_standard_list.length; i++) {
    price_standard_list[i].innerHTML = price_standard;
  }
  for (let i = 0; i < price_deluxe_list.length; i++) {
    price_deluxe_list[i].innerHTML = price_deluxe;
  }
  for (let i = 0; i < price_premium_list.length; i++) {
    price_premium_list[i].innerHTML = price_premium;
  }

  let output = '<div>' + feed_provider.content + '</div>';
  // output += '</tbody></table></div>';
  document.getElementById('content').innerHTML = output;
  // console.log(price_deluxe);
})
