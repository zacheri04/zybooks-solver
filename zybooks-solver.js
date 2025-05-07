// ==UserScript==
// @name         ZyBooks Solver
// @namespace    https://github.com/zacheri04/zybooks-solver
// @version      1.0.1
// @description  Because you already know what a for loop is.
// @author       zacheri04
// @match        *://learn.zybooks.com/zybook/*/chapter/*/section/*
// @supportURL   https://github.com/zacheri04/zybooks-solver/issues
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const checkForProblems = setInterval(() => {
    const radios = document.querySelectorAll(".zb-radio-button input"); // multiple choice
    const checks = document.querySelectorAll(".zb-checkbox input"); // animations
    const starts = document.querySelectorAll("button.start-button"); // animations
    const showAnswers = document.querySelectorAll("button.show-answer-button"); // free response

    // Wait until the textbook is loaded in
    if (
      radios.length + checks.length + starts.length + showAnswers.length >
      0
    ) {
      clearInterval(checkForProblems);

      // Complete animations
      setTimeout(() => {
        // Enable 2x speed
        for (const check of checks) {
          check.click();
        }

        setTimeout(() => {
          for (const start of starts) {
            start.click();
          }
        }, 500);
        // Need to keep pressing the Play button(s) until done
        const startsInterval = setInterval(() => {
          const plays = document.querySelectorAll('button[aria-label="Play"]');
          const pauses = document.querySelectorAll(
            'button[aria-label="Pause"]'
          );
          if (starts.length + plays.length + pauses.length === 0) {
            clearInterval(startsInterval);
          }
          for (const play of plays) {
            play.click();
          }
        }, 1000);
      }, 500);

      // Complete multiple choice problems
      setTimeout(() => {
        const questions = document.getElementsByClassName("question-choices");

        // First pass, just check the first option
        for (const question of questions) {
          const inputs = question.getElementsByTagName("input");
          if (inputs.length > 0) {
            inputs[0].click();
          }
        }

        // Now fix all wrong answers
        // Wait a bit for the "Incorrect" elements to pop up
        // Additionally, option number starts at 1 because we already clicked the 0th option
        let optionNumber = 1;
        const incorrectQuestionCheck = setInterval(() => {
          const incorrects = document.querySelectorAll(
            "div.zb-explanation.incorrect"
          );

          if (incorrects.length === 0) {
            // We're done here
            clearInterval(incorrectQuestionCheck);
          }

          for (const incorrect of incorrects) {
            const questions =
              incorrect.parentElement.getElementsByClassName(
                "question-choices"
              );
            for (const question of questions) {
              const inputs = question.getElementsByTagName("input");
              if (inputs.length >= optionNumber + 1) {
                inputs[optionNumber].click();
              }
            }
          }
          optionNumber++;
        }, 500);
      }, 500);

      // Complete free responses
      setTimeout(() => {
        // Show all answers
        for (const showAnswer of showAnswers) {
          showAnswer.click();
          showAnswer.click();
        }

        // Fill in responses
        setTimeout(() => {
          const answers = document.querySelectorAll(
            "div.has-explanation.forfeit"
          );
          for (const answer of answers) {
            const answerText = answer
              .querySelector(".forfeit-answer")
              .innerText.trim();
            const question =
              answer.parentElement.querySelector("input.zb-input");
            question.value = answerText;
            // Necessary to get it to recognize the new value
            question.dispatchEvent(
              new Event("input", {
                bubbles: true,
              })
            );
          }

          // Click the submit button
          setTimeout(() => {
            const submits = document.querySelectorAll("button.check-button");
            for (const submit of submits) {
              submit.click();
            }
          }, 500);
        }, 500);
      }, 500);
    }
  }, 1000);
})();
