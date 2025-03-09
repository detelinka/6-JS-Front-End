function passwordValidator (password) {
    let isValid = true;
    let digits = 0;
    let isOnlyLettersAndDigits = true;
    let isAtLeastTwoDigits = true;

    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }

    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (!isLetterOrDigit(char)) {
            isOnlyLettersAndDigits = false;
        }
        if (isDigit(char)) {
            digits++;
        }
    }

    if (digits < 2) {
        isAtLeastTwoDigits = false;
    }

    if (!isOnlyLettersAndDigits) {
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }

    if (!isAtLeastTwoDigits) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }

    if (isValid) {
        console.log('Password is valid');
    }

    function isLetterOrDigit(char) {
        return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || isDigit(char);
    }

    function isDigit(char) {
        return char >= '0' && char <= '9';
    }
}