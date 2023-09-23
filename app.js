var userInput;
var userNames;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userNames = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
