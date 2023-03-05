const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  console.log(e);
  cursor.setAttribute(
    "style",
    `top: ${e.pageY - 15}px; left: ${e.pageX - 15}px;`
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("clicked");
  setTimeout(() => {
    cursor.classList.remove("clicked");
  }, 400);
});
