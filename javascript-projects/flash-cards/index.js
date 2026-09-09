const flashcards = [
  {
    question: "What is the purpose of semantic HTML tags?",
    answer: "Semantic HTML tags clearly describe their meaning to both the browser and the developer (e.g., <header>, <article>, <footer>). They improve SEO, accessibility for screen readers, and code maintainability."
  },
  {
    question: "What is the difference between block-level and inline elements?",
    answer: "Block-level elements (e.g., <div>, <p>) start on a new line and take up the full width available. Inline elements (e.g., <span>, <a>) do not start on a new line and only take up as much width as necessary."
  },
  {
    question: "What is the purpose of the 'alt' attribute on an <img> tag?",
    answer: "The 'alt' attribute provides alternative text for an image if it cannot be displayed. It is crucial for web accessibility (read by screen readers) and helps search engines understand the image content."
  },
  {
    question: "How do you specify a fallback font in HTML/CSS?",
    answer: "Fallback fonts are listed sequentially in the CSS 'font-family' property. If the browser does not support the first font, it tries the second, moving down the list until it finds a supported font (e.g., font-family: 'Open Sans', Arial, sans-serif;)."
  },
  {
    question: "What does the 'defer' attribute do when loading a script tag?",
    answer: "The 'defer' attribute tells the browser to download the JavaScript file in parallel while parsing the HTML document, but it delays execution until the HTML parsing is fully complete."
  },
  {
    question: "What is the purpose of the 'data-*' attribute?",
    answer: "The 'data-*' attribute allows developers to store custom data private to the page or application directly on standard HTML elements, which can then be easily accessed via JavaScript."
  },
  {
    question: "Explain the CSS Box Model.",
    answer: "The CSS Box Model is a container that wraps around every HTML element. It consists of four core components from inside to outside: content, padding (space around content), border (surrounds padding), and margin (space outside the border)."
  },
  {
    question: "What is the difference between 'display: none' and 'visibility: hidden'?",
    answer: "'display: none' removes the element entirely from the document layout, taking up zero space. 'visibility: hidden' hides the element, but it still occupies its original space in the layout."
  },
  {
    question: "What is CSS Specificity and how is it calculated?",
    answer: "Specificity determines which CSS rule is applied by the browser when multiple rules match an element. It is calculated based on a weight hierarchy: Inline styles override IDs, IDs override Classes/Attributes/Pseudo-classes, and Classes override Elements/Pseudo-elements."
  },
  {
    question: "What is the difference between Flexbox and CSS Grid?",
    answer: "Flexbox is designed for one-dimensional layouts (either a single row OR a single column) and aligns items along a single axis. CSS Grid is designed for two-dimensional layouts (both rows AND columns simultaneously)."
  },
  {
    question: "What are CSS Custom Properties (Variables)?",
    answer: "CSS variables allow developers to store reusable design values (like colors or font sizes) in a single place using a special syntax (e.g., --main-color: #333;) and reuse them throughout the stylesheet using the var() function."
  },
  {
    question: "What is the difference between 'position: absolute' and 'position: relative'?",
    answer: "'position: relative' positions an element relative to its normal position in the document flow. 'position: absolute' removes the element from the document flow and positions it relative to its closest positioned ancestor."
  },
  {
    question: "What is the difference between 'var', 'let', and 'const'?",
    answer: "'var' is function-scoped and hoisted with an initial value of undefined. 'let' and 'const' are block-scoped and hoisted to a 'temporal dead zone' (cannot be used before declaration). 'const' cannot be reassigned, whereas 'var' and 'let' can."
  },
  {
    question: "What is the difference between '==' and '==='?",
    answer: "'==' performs loose equality evaluation by converting both operands to a common type before comparing (type coercion). '===' performs strict equality evaluation and returns true only if both operands have the same value and the same data type."
  },
  {
    question: "What is a closure in JavaScript?",
    answer: "A closure is a feature where an inner function retains access to variables from its outer (enclosing) function's scope, even after the outer function has finished executing."
  },
  {
    question: "What is hoisting?",
    answer: "Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their containing scope before code execution. Only the declarations are hoisted, not the initializations."
  },
  {
    question: "What is the Event Loop?",
    answer: "The Event Loop is a mechanism that allows JavaScript to perform non-blocking, asynchronous operations despite being single-threaded. It constantly monitors the call stack and executes deferred tasks from the callback queue once the call stack is empty."
  },
  {
    question: "What is a Promise?",
    answer: "A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It can be in one of three states: pending, fulfilled, or rejected."
  },
  {
    question: "What is the difference between 'null' and 'undefined'?",
    answer: "'undefined' means a variable has been declared but has not yet been assigned a value. 'null' is an assignment value that represents the intentional absence of any object value."
  },
  {
    question: "What is event delegation?",
    answer: "Event delegation is a design pattern where a single event listener is attached to a parent element to manage events for all of its current and future children, leveraging event bubbling."
  }
];

let currentIndex = 0;
let isShowingAnswer = false;

const cardInner = document.getElementById("cardInner");
const questionText = document.getElementById("questionText");
const answerText = document.getElementById("answerText");
const toggleBtn = document.getElementById("toggleBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressFill = document.getElementById("progressFill");
const progressPercent = document.getElementById("progressPercent");
const cardCounter = document.getElementById("cardCounter");

function updateCardContent() {
    const currentCard = flashcards[currentIndex];
    const totalCards = flashcards.length;

    // Insert data into both sides simultaneously
    questionText.textContent = currentCard.question;
    answerText.textContent = currentCard.answer;

    // Update layout metrics 
    const displayNum = currentIndex + 1;
    const percent = Math.round((displayNum / totalCards) * 100);

    progressFill.style.width = `${percent}%`;
    progressPercent.textContent = `${percent}%`;
    cardCounter.textContent = `${displayNum} of ${totalCards}`;
}

function handleToggleView() {
    if (isShowingAnswer) {
        cardInner.classList.add("is-flipped");
        toggleBtn.textContent = "Hide Answer";
    } else {
        cardInner.classList.remove("is-flipped");
        toggleBtn.textContent = "Show Answer";
    }
}

// Event Listeners
toggleBtn.addEventListener("click", () => {
    isShowingAnswer = !isShowingAnswer;
    handleToggleView();
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        isShowingAnswer = false;
        handleToggleView();
        // Wait briefly for flip to clear out before updating next card text
        setTimeout(updateCardContent, 150);
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        isShowingAnswer = false;
        handleToggleView();
        setTimeout(updateCardContent, 150);
    }
});

updateCardContent();
