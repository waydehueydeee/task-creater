// функция по нажатию кнопки "Добавить задание"
let ButtonAddQuestion = document
  .querySelector("#add-question-button")
  .addEventListener("click", function () {
    let questionContainer = document.getElementById("test-container");
    let questionBlocks = document.querySelectorAll(".question");

    // Увеличение номера задания
    let questionNumber = questionBlocks.length + 1;

    // Создание для каждого задания
    let questionBlock = document.createElement("div");
    questionBlock.classList.add("question");

    // Создание заголовка задания
    let questionNumberElement = document.createElement("span");
    questionNumberElement.classList.add("question-title");
    questionNumberElement.textContent = "Задание " + questionNumber;

    // Создание описания задания
    let questionDescriptionInput = document.createElement("textarea");
    questionDescriptionInput.classList.add("question-description");
    questionDescriptionInput.setAttribute("placeholder", "Описание задания");

    // Создание текста задания
    let questionTextInput = document.createElement("textarea");
    questionTextInput.classList.add("question-text");
    questionTextInput.setAttribute("placeholder", "Текст задания");

    // Создание ответа задания
    let questionAnswerInput = document.createElement("input");
    questionAnswerInput.classList.add("question-answer");
    questionAnswerInput.setAttribute("type", "text");
    questionAnswerInput.setAttribute("placeholder", "Ответ");

    // Создание кнопки удаления
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Удалить";
    deleteButton.onclick = function () {
      questionContainer.removeChild(questionBlock);
      updateQuestionNumbers();
    };

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
    questionNumberElement.textContent = "Вопрос " + (index + 1);
  });
}
