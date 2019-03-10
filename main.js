window.onload = function() {
  console.log("I love the web!");
  const line1 = Snap.select("#line-1");
  const line2 = Snap.select("#line-2");
  const line1Points = line1.node.getAttribute("d");
  const line2Points = line2.node.getAttribute("d");
  const to2 = function() {
    line1.animate({ d: line2Points }, 3000, mina.easeinout, to1);
  };
  const to1 = function() {
    line1.animate({ d: line1Points }, 3000, mina.easeinout, to2);
  };
  to2();
};

const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (iOS) {
  document.getElementById("twitter-widget-2").classList.add("iOSCard");
}

if (window.matchMedia("(max-width: 650px)").matches) {
  /* The viewport is at most 650 pixels wide */
  document.getElementById("box").removeAttribute("data-tilt-glare");
}
