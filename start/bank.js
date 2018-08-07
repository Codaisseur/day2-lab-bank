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

function login(){
  // parseInt from window.prompt if you expect a number because it will always return a string
  const userAccountId = parseInt(window.prompt('Please enter your account ID')) 
  const userPin = parseInt(window.prompt('Please enter your 4 digit pin'))

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

