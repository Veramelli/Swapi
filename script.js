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
      throw new Error("Сервер не доступен, попробуйте позже");
    })
    .then((data) => {
      if (objectType.value === "films") {
        resultBlock.textContent = data.title + data.director;
      }
      if (objectType.value === "people") {
        resultBlock.textContent = data.name + data.gender;
      }
      if (objectType.value === "planets") {
        resultBlock.textContent = data.name + data.population;
      }
      if (objectType.value === "species") {
        resultBlock.textContent = data.name;
      }
      if (objectType.value === "starships") {
        resultBlock.textContent = data.name + data.max_atmosphering_speed;
      }
      if (objectType.value === "vehicles") {
        resultBlock.textContent = data.name + data.max_atmosphering_speed;
      }
    })
    .catch((err) => (errorBlock.textContent = "Ошибка"));
}

/* Обязательно добавьте обработчик ответа: если ответ успешный, следующий обработчик then получит объект ответа на вход, если с ответом что-то не так, отклоните промис (для этого верните Promise.reject с кодом статуса ответа). Блок catch и finally использовать обязательно. */
