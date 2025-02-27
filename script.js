function toggle() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#person img");

  
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/quikire2.jpg");
  } else {
    img.setAttribute("src", "./assets/quikire.jpg");
  }
}
