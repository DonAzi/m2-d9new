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

const bsAlert = document.querySelector(".alert.alert-success");

function removeClosest(e) {
  const removedAlbumTitle = e.target
    .closest("tr")
    .querySelector("td:first-of-type").innerText;
  //displays alert
  bsAlert.innerHTML =
    "You successfully removed " + "<strong>" + removedAlbumTitle + "</strong>";

  const tr = e.target.closest("tr");

  // <!-- EXERCISE 12
  //   Considering the button you've created in ex. 5 that deletes the row:
  //   Add a fade-out effect to the row before it gets removed, using a CSS transition effect
  // -->
  tr.classList.add("fade-out"); //fades away the tr before removing it from the dom

  setTimeout(function () {
    e.target.closest("tr").remove(); // removes the actual row of the table after the fade-out animation finishes
  }, 1000);

  bsAlert.classList.remove("d-none");

  setTimeout(function () {
    bsAlert.classList.add("fade-out--long", "fade-out");
  }, 2000);
  setTimeout(function () {
    bsAlert.classList.add("d-none");
  }, 4000);
  setTimeout(function () {
    bsAlert.classList.remove("fade-out--long", "fade-out");
  }, 4100);
}
