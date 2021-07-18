const newQuoteButton = document.querySelector("#js-new-quote");
$(() => {
    $(newQuoteButton).on("click", () => {
        console.log("你按按鈕了");
    });
});