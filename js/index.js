var anims = document.getElementsByClassName('anim');
for (var i = 0; i < anims.length; i++) {
  anims[i].setAttribute('style', 'animation-delay: ' + (i*3) + 's');
}
document.addEventListener("click", function() {
  for (var i = 0; i < anims.length; i++) {
    anims[i].setAttribute('style', 'animation-delay: 0s');
  }
})
