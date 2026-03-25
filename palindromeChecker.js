const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

const isPalindrome = (str) => {
  const cleaned = str.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
};

checkBtn.addEventListener("click", () => {
  const value = textInput.value;

  if (!value) {
    alert("Please input a value");
    return;
  }

  const palindrome = isPalindrome(value);
  result.textContent = `${value} is ${palindrome ? "" : "not "}a palindrome`;
});
