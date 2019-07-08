const UI = {
  menuBtn: document.getElementById("menu-button"),
  navitems: document.getElementById("navitems")
};

UI.menuBtn.addEventListener("click", () => {
  UI.navitems.classList.toggle("show");
  UI.menuBtn.classList.toggle("show");
});
