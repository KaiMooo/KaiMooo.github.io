window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let headerRect = document
    .querySelector("#page-header.full_page.fixed")
    .getBoundingClientRect();

  // 根据滚动位置计算模糊值并应用
  let headerHeight = headerRect.height;
  let blurValue = Math.min((scrollTop / headerHeight) * maxBlur, maxBlur);
  document.documentElement.style.setProperty("--blur-value", `${blurValue}px`);
});
