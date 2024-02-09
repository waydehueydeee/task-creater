// Создание кнопки "Сохранить"
let saveButton = document.createElement("button");
saveButton.id = "save-question-button";
saveButton.textContent = "Сохранить";

// функция по нажатию кнопки "Добавить задание"
let ButtonAddQuestion = document
  .querySelector(".add-question-button")
  .addEventListener("click", function () {
    let questionContainer = document.getElementById("test-container");
    let questionBlocks = document.querySelectorAll(".question");

    // Увеличение номера задания
    let questionNumber = questionBlocks.length + 1;

    // Создание контейнера для каждого задания
    let questionBlock = document.createElement("div");
    questionBlock.classList.add("question");

    // Создание заголовка задания
    let questionNumberElement = document.createElement("span");
    questionNumberElement.classList.add("question-title");
    questionNumberElement.textContent = "Задание №" + questionNumber;

    // Создание описания задания
    let questionDescriptionInput = document.createElement("textarea");
    questionDescriptionInput.classList.add(
      "question-description",
      "question-general-style"
    );
    questionDescriptionInput.setAttribute("placeholder", "Описание задания");

    // Создание текста задания
    let questionTextInput = document.createElement("textarea");
    questionTextInput.classList.add("question-text", "question-general-style");
    questionTextInput.setAttribute("placeholder", "Текст задания");

    // Создание ответа задания
    let questionAnswerInput = document.createElement("input");
    questionAnswerInput.classList.add(
      "question-answer",
      "question-general-style"
    );
    questionAnswerInput.setAttribute("type", "text");
    questionAnswerInput.setAttribute("placeholder", "Ответ");

    // Добавляем в панель кнопку "Сохранить"
    let buttonPanel = document.querySelector(".button-panel");
    buttonPanel.appendChild(saveButton);

    // Создание кнопки удаления
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Удалить";

    // функция по нажатию кнопки "Удалить"
    deleteButton.addEventListener("click", function () {
      questionContainer.removeChild(questionBlock);

      updateQuestionNumbers();
    });

    // Добавляем в контейнер созданные выше элементы
    questionBlock.appendChild(questionNumberElement);
    questionBlock.appendChild(questionDescriptionInput);
    questionBlock.appendChild(questionTextInput);
    questionBlock.appendChild(questionAnswerInput);
    questionBlock.appendChild(deleteButton);
    questionContainer.appendChild(questionBlock);
  });

// Пересчёт кол-ва заданий
function updateQuestionNumbers() {
  let questionBlocks = document.querySelectorAll(".question");

  questionBlocks.forEach((block, index) => {
    let questionNumberElement = block.querySelector("span");
    questionNumberElement.textContent = "Задание №" + (index + 1);
  });

  // Удаление кнопки "Сохранить" если нет заданий
  if (questionBlocks.length == 0) {
    saveButton.remove();
  }
}
