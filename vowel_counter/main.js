function countVowels() {
    let input = document.getElementById('text_input').value;
    if (input.trim() === '') {
        alert("Enter valid text");
        return;
    }
    else if (!isNaN(input.trim())) {
        alert("Enter Only String Value");
        return;
    }
    else{
        let vowels = input.match(/[aeiouAEIOU]/g);
        let count = vowels ? vowels.length : 0;
        document.getElementById('result').textContent = `Number of Vowels: ${count}`

    }
}

function resetInput(){
    document.getElementById('text_input').value = '';
    document.getElementById('result').textContent = '';
}
