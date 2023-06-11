window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btnTopo").style.display = "block"
  } else {
    document.getElementById("btnTopo").style.display = "none"
  }
}

document.getElementById("btnTopo").onclick = function () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
