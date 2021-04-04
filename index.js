// Code your solutions in this file
const names = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(names,message) {
    const arrayMessage = [];
    for (let i = 0; i < names.length; i++) {
        //arrayMessage[i] = `Thank you, ${names[i]}, for the wonderful ${message} gift!`;
        arrayMessage.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`);
    }
    return arrayMessage;
}

function countDown(number) {
    let countup = 0;
    while (countup <= number) {
        console.log(number);
        number--;
    }
}
