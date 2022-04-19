function getSplitName(personName) {
    if (personName == null) {
        return 'Error input Argument'
    }
    if (typeof personName !== 'string') {
        return 'Error input string argumen'
    }
    if (personName.split(' ').length > 3) {
        return 'Error only 3 character'
    }

    // PROSES
    const splitName = personName.split(' ');
    const firstName = splitName.shift();
    const lastName = splitName.pop();
    const middleName = splitName.pop();

    return {
        firstName: firstName ? firstName : null,
        middleName: middleName ? middleName : null,
        lastName: lastName ? lastName : null
    };
}

console.log (getSplitName)