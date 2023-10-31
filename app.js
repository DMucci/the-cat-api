// ¿Porque podemos ver un texto 'un gato' al cargar la app por primera vez?
// Porque el atributo alt tiene por valor ese nombre.
// ¿Cuál es la URL que nos va a proporcionar un gato aleatório?
// https://api.thecatapi.com/v1/images/search
// Describe con exactitud el tipo de dato que devuelve esta API
// Devuelve un array con un solo objeto con 4 propiedades y sus respectivos valores, todos entre comillas excepto los valores numerales.

const button = document.querySelector("#get-cat");
const catImage = document.querySelector("#cat-image");
const widthImage = document.querySelector("#width span");
const heightImage = document.querySelector("#height span");

async function updateNewImage() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const randomImage = await response.json();

  console.log("New cat Image: ", randomImage);

  catImage.src = randomImage[0].url;  //debido a que es un array con un objeto, tenemos que poner ese [0], si tuvieramos 3 objetos y quisieramos los datos de ese tercer objeto seria [2].

  widthImage.textContent = randomImage[0].width;

  heightImage.textContent = randomImage[0].height;
}

button.addEventListener("click", updateNewImage);


