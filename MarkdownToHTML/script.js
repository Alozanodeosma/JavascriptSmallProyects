const markdownInput = document.querySelector("#markdown-input");
const rawHTML = document.querySelector("#html-output");
const previewHTML = document.querySelector("#preview");
const headingRegex = /^(#{1,3})\s+(.+)$/;
const boldRegex = /(?:\*\*|__)(.+?)(?:\*\*|__)/g;
const italicRegex = /(?:\*|_)(.+?)(?:\*|_)/g;
const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
const linkRegex = /\[(.*?)\]\((.*?)\)/g;
const quoteRegex = /^>\s(.*)$/;


function convertMarkdown(){
  const linesArray = markdownInput.value.split("\n");
  let rawHTMLString = "";
  //for each line check regex
  for(let line of linesArray){
    //headings
    let htmlConversion = line;
    htmlConversion= htmlConversion.replace(headingRegex, (match, hashes, text) => {
      const numHashes = hashes.length;
      return `<h${numHashes}>${text}</h${numHashes}>`;
    });
    //quote
    htmlConversion = htmlConversion.replace(quoteRegex,'<blockquote>$1</blockquote>');
    //bold
    htmlConversion = htmlConversion.replace(boldRegex,'<strong>$1</strong>');
    //italic
    htmlConversion = htmlConversion.replace(italicRegex,'<em>$1</em>');
    //img
    htmlConversion = htmlConversion.replace(imageRegex, '<img alt="$1" src="$2">');
    //link
    htmlConversion = htmlConversion.replace(linkRegex,'<a href="$2">$1</a>');
    
    rawHTMLString += htmlConversion +"\n";
  }
  rawHTML.textContent = rawHTMLString;
  previewHTML.innerHTML = rawHTMLString;
  return rawHTML.textContent
}    
markdownInput.addEventListener("input", ()=>convertMarkdown());
