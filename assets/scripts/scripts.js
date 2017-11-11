document.getElementById('shareFacebook').addEventListener('click', () => {

  if(typeof gtag !== undefined) {
    gtag('event', 'facebookShare', {
      'event_category': 'share',
      'event_label': 'Shared on Facebook'
    });
  }

  window.open(
    `https://www.facebook.com/sharer.php?u=${window.location.href}`,
    'sharer',
    'toolbar=0,status=0,width=626,height=436');
});

document.getElementById('shareTwitter').addEventListener('click', () => {

  if(typeof gtag !== undefined) {
    gtag('event', 'twitterShare', {
      'event_category': 'share',
      'event_label': 'Shared on Twitter'
    });
  }

  window.open(
    `http://twitter.com/intent/tweet?text=${encodeURIComponent('Happy Marriage, Isabella! Hope it\'s as weird as you are. ')}${encodeURIComponent(window.location.href)}`,
    'sharer',
    'toolbar=0,status=0,width=626,height=436');
});
