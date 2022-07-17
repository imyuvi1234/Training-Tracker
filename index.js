document.addEventListener("DOMContentLoaded", () => {
 
    const quote = document.querySelector("blockquote");
    const cite = document.querySelector("cite");
    async function updateQuote() {
      
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      if (response.ok) {
        quote.textContent = data.content;
        cite.textContent = data.author;
      } else {
        quote.textContent = "An error occured";
        document.write(data);
      }
    }
  
    document.addEventListener("DOMContentLoaded", updateQuote);
  
    updateQuote();
  });