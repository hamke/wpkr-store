const url = 'https://www.wp-kr.com/store/data/auto-money-system/';

fetch(url)
.then(res => res.json())
.then(feed_provider => {
  let output =
    '<div>' + feed_provider.content + '</div>';
  // output += '</tbody></table></div>';
  document.getElementById('content').innerHTML = output;
})
