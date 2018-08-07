const currentUser = {
  wallet: 10
}

const accounts = [
  {
    id: 1,
    pin: 1234,
    name: 'Mimi Magusin',
    balance: 2315
  },
  {
    id: 2,
    pin: 2727,
    name: 'Wouter de Vos',
    balance: 9001
  },
  {
    id: 3,
    pin: 4567,
    name: 'Bram Koot',
    balance: 6754
  },
]

let currentAccount = null

function getAccountNumber(){
  const accountId = parseInt(window.prompt('Please enter your account id'))
  
  if(isNaN(accountId)){ // If parseInt gets anything other than a number it will return NaN
    window.alert('That was not a number, sorry!')
  }

  return accountId
}

function getPin(){
  const pin = parseInt(window.prompt('Please enter your 4 digit pin number'))

  if(isNaN(pin) || pin < 1000 || pin > 9999){ 
    window.alert('That was not a valid pin number, sorry!')
  }

  return pin
}

// @todo: Give user another chance to login. 
// We should let the user try to log in again if they made a mistake in the login process
// We can do this by adding a function call to login (like this -> login() )
// This way login will get called all over again and the user can try once more
// But where should we put this function call?

function login(){
  // Handling errors in user input can be seperated out into different functions
  // This way the login function does not become too long and hard to read
  const accountId = getAccountNumber()
  const pin = getPin()

  accounts.forEach(function(account){
    if (account.id === accountId && account.pin === pin) {
      currentAccount = account
    }
  })

  if (currentAccount !== null) {
    window.alert('You have been logged in!')
  } else {
    // giving feedback if login didn't work
    window.alert('Login failed, invalid account or pin')
  }
}

function createAccount(name, pin){
  const account = {
    id: accounts.length + 1,
    pin: pin,
    name: name,
    balance: 0
  }

  accounts.push(account)
}

function openAccount() {
  const newName = window.prompt('Please enter your name')
  const newPin = parseInt(window.prompt('Please enter a 4 digit pin number'))

  createAccount(newName, newPin)

  window.alert('Account created!')
  initialMenu()
}

function initialMenu(){
  const userInput = window.prompt(`What would you like to do today?
  Please enter a number:
  If you already have an account press 1
  For opening a new account press 2
  To quit press 3`)

  switch (userInput) {
    case '1':
      login()
      break;

    case '2':
      openAccount()
      break;
    
    case '3':
      window.alert('Bye!')
      break;

    default:
      initialMenu()
      break;
  }
}

function start(){
  initialMenu()
}

