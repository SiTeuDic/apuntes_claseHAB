"use strict";
import { getData, shuffleArray, randomitem } from "/helpers.js";

const STATE = {
  points: 0,
  articles: [],
};
const HIDDENTEXT = "████████████";
const points = document.querySelector("#points");
const quiz = document.querySelector("#quiz");

async function getArticlesCategories(article) {
  const data = await getData(
    `https://es.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=categories&titles=${article}`
  );
  const key = Object.keys(data.query.pages)[0];
  const categories = data.query.pages[key].categories
    .map((category) => category.title)
    .filter((category) => !category.includes("Wikipedia"));
  return categories;
}
async function getCategoryArticles(category, exclude) {
  const data = await getData(
    `https://es.wikipedia.org/w/api.php?format=json&origin=*&action=query&list=categorymembers&cmlimit=500&cmtitle=${category}`
  );
  const articles = data.query.categorymembers
    .filter(
      (article) => !article.title.includes(":") && article.title !== exclude
    )
    .map((article) => article.title);
  return articles;
}

async function generateQuestions() {
  try {
    const answer = randomitem(STATE.articles);

    const { title, extract } = await getData(
      `https://es.wikipedia.org/api/rest_v1/page/summary/${answer}`
    );

    const regex = new RegExp(title, "ig");
    const clue = extract.replaceAll(regex, HIDDENTEXT);
    if (!clue.includes(HIDDENTEXT)) {
      throw new Error("Cannot find title in extract");
    }
    const categories = await getArticlesCategories(answer);

    const chousenCategory = randomitem(categories);

    const falseOptions = await getCategoryArticles(chousenCategory, title);
    const options = shuffleArray(falseOptions).slice(0, 3);
    if (falseOptions.lenght < 3) {
      throw new Error("Not enought fase options");
    }

    const question = {
      clue: clue,
      answer: title,
      options: [...options, title],
    };
    writeQuestion(question);
  } catch (error) {
    console.error(error);
    generateQuestions();
  }
}

function writeQuestion(question) {
  quiz.innerHTML = "";
  points.innerText = STATE.points;
  const clue = document.createElement("p");
  clue.innerText = question.clue;
  quiz.append(clue);

  for (const answer of question.options) {
    const answerButton = document.createElement("button");
    answerButton.innerText = answer;
    quiz.append(answerButton);
    answerButton.onclick = () => {
      if (answer == question.answer) {
        STATE.points++;
      } else {
        alert("Fallaste, vuelves a empezar!");
        STATE.points = 0;
      }
      generateQuestions();
    };
  }
}

async function start() {
  try {
    const yesterday = new Date(Date.now() - 86400000);
    const year = yesterday.getFullYear();
    const month = String(yesterday.getMonth() + 1).padStart(2, "0");
    const day = String(yesterday.getDate()).padStart(2, "0");

    const data = await getData(
      `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/es.wikipedia.org/all-access/${year}/${month}/${day}`
    );
    const validArticles = data.items[0].articles.filter(
      (item) => !item.article.includes(":")
    );
    const articles = validArticles.map((item) => item.article);
    STATE.articles = articles;
    generateQuestions();
  } catch (error) {
    alert(
      "desactiva el adbolock para jugar no hat publi, es un falso positivo"
    );
    console.error(error);
  }
}

start();

//articulos más vistos ayer
// https://wikimedia.org/api/rest_v1/metrics/pageviews/top/es.wikipedia.org/all-access/2022/11/28
//Información del artículo:
//https://es.wikipedia.org/api/rest_v1/page/summary/Pandemia_de_COVID-19
//Categorías a las que pertenece el artículo
//https://es.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=categories&titles=Pandemia_de_COVID-19
//Artículos de una categoía
//https://es.wikipedia.org/w/api.php?format=json&origin=*&action=query&list=categorymembers&cmlimit=500&cmtitle=Categoíra:Cine
