"use strict";

//Fetch
//recibe 2 promesas

async function main() {
  try {
    const respuesta = await fetch("https://api.github.com/users/SiTeuDic");
    console.log(respuesta.status);

    if (respuesta.ok) {
      const data = await respuesta.json();

      const image = document.createElement("img");

      image.setAttribute("src", data.avatar_url);

      document.body.append(image);
      console.log(data);
    } else {
      console.log("hay algo aqui que va mal ");
    }
  } catch (error) {
    console.log(error);
  }
}

main();
