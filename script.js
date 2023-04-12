"use strict";

let objectType = document.querySelector(".object__type");
let number = document.querySelector(".number");
let resultBlock = document.querySelector(".result");
let errorBlock = document.querySelector(".errors");

function getData() {
  resultBlock.textContent = "";
  errorBlock.textContent = "";
  fetch(`https://swapi.dev/api/${objectType.value}/${number.value}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error("Ошибка " + response.status);
    })
    .then((data) => {
      if (objectType.value === "films") {
        resultBlock.textContent = `TITLE: ${data.title} DIRECTOR: ${data.director}`;
      }
      if (objectType.value === "people") {
        resultBlock.textContent = `NAME: ${data.name} GENDER: ${data.gender}`;
      }
      if (objectType.value === "planets") {
        resultBlock.textContent = `NAME: ${data.name} POPULATION: ${data.population}`;
      }
      if (objectType.value === "species") {
        resultBlock.textContent = `NAME: ${data.name}`;
      }
      if (objectType.value === "starships") {
        resultBlock.textContent = `NAME: ${data.name} MAX SPEED: ${data.max_atmosphering_speed}`;
      }
      if (objectType.value === "vehicles") {
        resultBlock.textContent = `NAME: ${data.name} MAX SPEED: ${data.max_atmosphering_speed}`;
      }
    })
    .catch((e) => (errorBlock.textContent = e));
}
