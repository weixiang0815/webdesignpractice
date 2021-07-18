const cubes = document.querySelector(".sk-cube-grid");
const newQuoteButton = document.querySelector("#js-new-quote");
const endpoints = ["https://api.whatdoestrumpthink.com/api/v1/quotes/random", "https://api.quotable.io/random"];
const twittreButton = document.querySelector("#js-tweet");

$(() => {
    $(newQuoteButton).on("click", () => {
        getQuote();
    });
});

async function getQuote() {
    cubes.classList.remove("hidden");
    newQuoteButton.disabled = true;

    try {
        const response = await fetch(endpoints[1]);
        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        displayQuote(json.content);
        setTweetButton(json.content);
    } catch (err) {
        console.log(err);
        alert("產生語錄失敗");
    } finally {
        newQuoteButton.disabled = false;
        cubes.classList.add("hidden");
    };
};

function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
};

function setTweetButton(quote) {
    twittreButton.setAttribute("href", `https://twitter.com/share?text=${quote} - Donald Trump`);
}