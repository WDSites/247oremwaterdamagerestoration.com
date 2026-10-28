(function () {
  "use strict";
  var BP = 900;
  var root = document.documentElement;
  var burger = document.querySelector(".hamburger");
  var drawer = document.querySelector(".mob-drawer");
  var overlay = document.querySelector(".mob-overlay");
  var closeBtn = document.querySelector(".mob-close");

  function openMenu() {
    if (!drawer) return;
    drawer.classList.add("open");
    overlay.classList.add("open");
    burger.setAttribute("aria-expanded", "true");
    drawer.setAttribute("aria-hidden", "false");
    root.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  }
  function closeMenu() {
    if (!drawer) return;
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
    root.style.overflow = "";
  }
  if (burger) burger.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > BP) closeMenu();
  });

  var qs = document.querySelectorAll(".faq-q");
  function setOpen(item, open) {
    var btn = item.querySelector(".faq-q");
    var ans = item.querySelector(".faq-a");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    item.classList.toggle("open", open);
    ans.style.maxHeight = open ? ans.scrollHeight + 40 + "px" : "0px";
  }
  for (var i = 0; i < qs.length; i++) {
    qs[i].addEventListener("click", function (e) {
      var item = e.currentTarget.parentNode;
      setOpen(item, !item.classList.contains("open"));
    });
  }
  window.addEventListener("resize", function () {
    var open = document.querySelectorAll(".faq-item.open");
    for (var j = 0; j < open.length; j++) {
      open[j].querySelector(".faq-a").style.maxHeight = open[j].querySelector(".faq-a").scrollHeight + 40 + "px";
    }
  });
})();
