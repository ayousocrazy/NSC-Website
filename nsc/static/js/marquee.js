function makeMarquee(id, speed, reverse = false) {
  const el = document.getElementById(id);
  let text = el.innerHTML;

  while (el.scrollWidth < window.innerWidth * 2) {
    text += " " + text;
    el.innerHTML = text;
  }

  let pos = reverse ? -el.scrollWidth / 2 : 0;

  function animate() {
    pos += reverse ? speed : -speed;

    if (!reverse && Math.abs(pos) >= el.scrollWidth / 2) {
      pos = 0;
    }
    if (reverse && pos >= 0) {
      pos = -el.scrollWidth / 2;
    }

    el.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(animate);
  }

  animate();
}

makeMarquee("marqueeTop", 1.2, false);    
makeMarquee("marqueeBottom", 1.2, true); 