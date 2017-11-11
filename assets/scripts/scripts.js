document.getElementById('shareFacebook').addEventListener('click', () => {
  window.open(
    `https://www.facebook.com/sharer.php?u=${window.location.href}&t=${encodeURIComponent('Happy Marriage, Taylor & Isabella! Hope it\'s weird.')}`,
    'sharer',
    'toolbar=0,status=0,width=626,height=436');
});

document.getElementById('shareTwitter').addEventListener('click', () => {
  window.open(
    `http://twitter.com/home?status=${encodeURIComponent('Happy Marriage, Taylor & Isabella! Hope it\'s weird. ')}${encodeURIComponent(window.location.href)}`,
    'sharer',
    'toolbar=0,status=0,width=626,height=436');
});
