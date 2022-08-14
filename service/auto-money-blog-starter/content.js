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
  let output =
    '<div>' + feed_provider.content + '</div>';
  // output += '</tbody></table></div>';
  document.getElementById('content').innerHTML = output;
})
