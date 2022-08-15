if ( window.location.hostname == 'localhost' ) {
  var url = 'http://localhost:8080/i/wp-kr/' + 'store/data/auto-importer-blog/';
  // console.log( 'Hostname : localhost' );
} else {
  var url = 'https://www.wp-kr.com/' + 'store/data/auto-importer-blog/';
  // console.log( 'Hostname : XXXXXXXXXX' );
}

fetch(url)
.then(res => res.json())
.then(feed_provider => {
  let price_standard_original = feed_provider.price_standard_original;
  let price_standard = feed_provider.price_standard;

  let price_deluxe_original = feed_provider.price_deluxe_original;
  let price_deluxe = feed_provider.price_deluxe;

  let price_premium_original = feed_provider.price_premium_original;
  let price_premium = feed_provider.price_premium;

  let price_standard_list = document.querySelectorAll('.price-standard');
  let price_deluxe_list = document.querySelectorAll('.price-deluxe');
  let price_premium_list = document.querySelectorAll('.price-premium');

  let price_standard_original_list = document.querySelectorAll('.price-standard-original');
  let price_deluxe_original_list = document.querySelectorAll('.price-deluxe-original');
  let price_premium_original_list = document.querySelectorAll('.price-premium-original');

  let summary_standard_list = document.querySelectorAll('.summary-standard');
  let summary_deluxe_list = document.querySelectorAll('.summary-deluxe');
  let summary_premium_list = document.querySelectorAll('.summary-premium');

  let features_standard_list = document.querySelectorAll('.features-standard');
  let features_deluxe_list = document.querySelectorAll('.features-deluxe');
  let features_premium_list = document.querySelectorAll('.features-premium');

  for (let i = 0; i < price_standard_list.length; i++) {
    price_standard_list[i].innerHTML = price_standard.toLocaleString();
  }
  for (let i = 0; i < price_deluxe_list.length; i++) {
    price_deluxe_list[i].innerHTML = price_deluxe.toLocaleString();
  }
  for (let i = 0; i < price_premium_list.length; i++) {
    price_premium_list[i].innerHTML = price_premium.toLocaleString();
  }
  for (let i = 0; i < price_standard_original_list.length; i++) {
    price_standard_original_list[i].innerHTML = price_standard_original.toLocaleString();
  }
  for (let i = 0; i < price_deluxe_original_list.length; i++) {
    price_deluxe_original_list[i].innerHTML = price_deluxe_original.toLocaleString();
  }
  for (let i = 0; i < price_premium_original_list.length; i++) {
    price_premium_original_list[i].innerHTML = price_premium_original.toLocaleString();
  }

  for (let i = 0; i < summary_standard_list.length; i++) {
    summary_standard_list[i].innerHTML = feed_provider.summary_standard;
  }
  for (let i = 0; i < summary_deluxe_list.length; i++) {
    summary_deluxe_list[i].innerHTML = feed_provider.summary_deluxe;
  }
  for (let i = 0; i < summary_premium_list.length; i++) {
    summary_premium_list[i].innerHTML = feed_provider.summary_premium;
  }

  for (let i = 0; i < features_standard_list.length; i++) {
    features_standard_list[i].innerHTML = feed_provider.features_standard;
  }
  for (let i = 0; i < features_deluxe_list.length; i++) {
    features_deluxe_list[i].innerHTML = feed_provider.features_deluxe;
  }
  for (let i = 0; i < features_premium_list.length; i++) {
    features_premium_list[i].innerHTML = feed_provider.features_premium;
  }

  let content = '<div>' + feed_provider.content + '</div>';
  // content += '</tbody></table></div>';
  document.getElementById('content').innerHTML = content;
  // console.log(price_deluxe);
})
