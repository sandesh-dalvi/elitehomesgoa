function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav-logo").style.maxWidth = "130px";
    document.getElementById("nav-header-primary").style.backgroundColor =
      "#ffffff";
    document.getElementById("nav-items-header").style.color = "#000000";
  } else {
    document.getElementById("nav-logo").style.maxWidth = "220px";
    document.getElementById("nav-header-primary").style.backgroundColor =
      "#00000095";
    document.getElementById("nav-items-header").style.color = "#ffffff";
  }
}

document.getElementById("preloader").style.display = "grid";

setTimeout(() => {
  document.getElementById("preloader").style.display = "none";
}, 2000);

window.onscroll = function () {
  scrollFunction();
};

function showSidebar() {
  const sidebar = document.getElementById("sidebar");

  sidebar.style.width = "250px";
}

function hideSidebar() {
  const sidebar = document.getElementById("sidebar");

  sidebar.style.width = "0px";
}
