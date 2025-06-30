function fetchData( slug_data, url_data ) {

  fetch( url_data )
  .then(res => res.json())
  .then(feed_provider => {
    // let price_standard_original = feed_provider.price_standard_original;
    let price_standard = feed_provider.price_standard;

    let content = '<span>' + price_standard.toLocaleString() + '</span>';
    // content += '</tbody></table></div>';
    document.getElementById(slug_data).innerHTML = content;
    // console.log(price_deluxe);
  })
}

var slugs = [
  'ai-music-service-starter',
  'auto-academy-starter',
  'auto-ads',
  'auto-affiliate-store-starter',
  'auto-affiliate-system-starter',
  'auto-blog-aliexpress',
  'auto-blog-cp',
  'auto-blog-newspic',
  'auto-community-starter',
  'auto-export-store-starter',
  'auto-importer-blog',
  'auto-importer-blog-01',
  'auto-importer-webpage-01',
  'auto-money-agency',
  'auto-money-blog-fb',
  'auto-money-blog-starter',
  'auto-money-blog-starter-adsense',
  'auto-money-blog-starter-cn',
  'auto-money-blog-starter-en',
  'auto-money-blog-starter-no-adsense',
  'auto-money-blog-video',
  'auto-redirect-link-converter',
  'auto-seller-ebook-store',
  'auto-seller-premium-articles',
  'auto-store-aliexpress',
  'auto-store-cp'
];

for (var i = 0; i < slugs.length; i++) {

  if ( window.location.hostname == 'localhost' ) {
    var url = 'http://localhost:8080/i/wp-kr/' + 'store/data/' + slugs[i] + '/';
  } else {
    var url = 'https://www.wp-kr.com/' + 'store/data/' + slugs[i] + '/';
  }

  fetchData( slugs[i], url );
}
