// let genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"];

function showGenres() {
  let genres = [
    "Comedy",
    "Drama",
    "Romance",
    "Horror",
    "Sci-Fi",
    "Documentary",
  ];

  let uList = document.createElement("ul");
  uList.classList.add("styleClassForUL");

  for (let i = 0; i < genres.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = genres[i];
    uList.appendChild(listItem);
  }

  document.querySelector("body").appendChild(uList);
}
showGenres();
