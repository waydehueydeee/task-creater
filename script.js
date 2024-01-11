// Функция по нажатию кнопки
let createTaskButton = document
  .querySelector(".create-task-button")
  .addEventListener("click", function () {
    // Достаём кол-во заданий
    let taskCount = document.getElementById("taskCount").value;

    // Удаляем всё внутри контейнера
    let tasksContainer = document.getElementById("tasksContainer");
    tasksContainer.innerHTML = "";

    for (var i = 0; i < taskCount; i++) {
      // Создаём контейнер для каждого задания
      var taskDiv = document.createElement("div");

      // Присваиваем класс
      taskDiv.classList.add("task-conteiner");

      // Добавляем html разметку
      taskDiv.innerHTML =
        '<p class="task-number">Задание №' +
        (i + 1) +
        "</p>" +
        '<div class="task-description-block">' +
        '<p class="task-description-title">Описание задания</p>' +
        '<textarea class="task-description"></textarea>' +
        "</div>" +
        '<div class="task-text-block">' +
        '<p class="task-text-title">Текст задания</p>' +
        '<textarea class="task-text"></textarea>' +
        "</div>" +
        '<div class="task-answer-block">' +
        '<p class="task-answer-title">Ответ</p>' +
        '<input type="text" class="task-answer" />' +
        "</div>";
      // Добавляем разметку в контейнер на странице
      tasksContainer.appendChild(taskDiv);
    }
    // Проверяем наличие кнопки сохранить
    if (!document.querySelector(".task-save-button")) {
      // Создаём кнопку
      let taskSaveButton = document.createElement("button");

      //   Добавляем класс
      taskSaveButton.className = "task-save-button";

      //   Добавляем текст
      taskSaveButton.textContent = "Сохранить";

      // Находим тек body
      let bodyTag = document.querySelector("body");

      // Добавляем кнопку в тег body
      bodyTag.appendChild(taskSaveButton);
    }
  });
