const inputElement = document.getElementById("text-input");
const outputElement = document.getElementById("result");
const buttonElement = document.getElementById("check-btn");

buttonElement.addEventListener('click', function() {
    outputScreen(inputElement);
});

inputElement.addEventListener("keydown",function() {
    if(event.key === 'Enter'){outputScreen(inputElement);}
})

function outputScreen(spell) {
    if (spell.value==='') {
        alert("Please enter a value");
        spell.focus();
        outputElement.style.display = "none";
        return;
    }
    else{
        outputElement.style.display = "block";
    }
    if (isPalindrome(spell.value)) {
        outputElement.innerText = `${spell.value} is Palindrome`;
    } else {
        outputElement.innerText = `${spell.value} is not Palindrome`;
    }
};

function isPalindrome(abc) {
    const cleanStr = abc.toLowerCase().replace(/[^a-z0-9]/g, '');
    const lst = cleanStr.split('');
    let left = 0;
    let right = lst.length - 1;
    while (left < right) {
        if (lst[left] !== lst[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}