function promptNumbers() {
    let lastInput;

    for (let i = 0; i < 10; i++) {
        lastInput = prompt(`Введіть число більше 100 (спроба ${i + 1}):`);

        if (lastInput === null || lastInput.trim() === "") {
            break; }

        const number = Number(lastInput);
        if (isNaN(number)) {
            break; }

        if (number > 100) {
            break;}
     else {
            alert("Число має бути більше 100. Спробуйте ще раз.");  }  }

    console.log(`Останнє введення користувача: ${lastInput}`);   }

promptNumbers();
