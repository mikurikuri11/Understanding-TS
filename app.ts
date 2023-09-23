let userInput: unknown;
let userNames: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
  userNames = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

generateError('An error occurred!', 500);