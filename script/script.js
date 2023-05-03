document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector(".loading").style.visibility = "visible";
  } else {
    $(".loading").fadeOut();
    document.querySelector("body").style.overflow = "visible";
  }
};
