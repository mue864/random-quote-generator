const authorParagraph = document.getElementById('title');
const quoteParagraph = document.getElementById('quote');  
  
  function getData() {
    fetch('https://dummyjson.com/quotes/random')
    .then (response => response.json())
    .then (data => {
      // get the response
      authorParagraph.textContent = data.author;
      quoteParagraph.textContent = data.quote;
    })
    .catch (error => {
      console.error('Error: ' + error);
    })
  }

  function copyToClipboard() {
    const quoteText = document.getElementById('quote').innerText;
    const authorName = document.getElementById('title').innerText;

    const fullText = `${quoteText} - ${authorName}`;
    // using the clipboard api
    navigator.clipboard.writeText(fullText).then(() =>{
      alert('Copied to clipboard!')
    }).catch(error => {
      console.error('Failed to copy text: ' + error);
    })
  }