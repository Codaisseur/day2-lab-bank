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

function login(){
  // @todo: We have to tell the user something if something went wrong during login
  // We should check:
  // If accountId is a number, if not window.alert the user
  // If pin is a 4 digit number, if not window.alert the user
  // We should tell the user if logging in failed, if so window.alert the user

  const accountId = parseInt(window.prompt('Please enter your account id'))
  const pin = parseInt(window.prompt('Please enter your 4 digit pin number'))

  // there are a couple of solutions for story 1:

  // using a for loop
  // for (let index = 0; index < accounts.length; index++) {
  //   const accountToCheck = accounts[index];
  //   if (accountToCheck.id === accountId && accountToCheck.pin === pin) {
  //     currentAccount = accountToCheck
  //     break
  //   }
  // }

  // using forEach
  accounts.forEach(function(account){
    if (account.id === accountId && account.pin === pin) {
      currentAccount = account
    }
  })

  // using array.find (you'll learn about this next week!)
  // currentAccount = accounts.find(function(account){
  //   return account.id === accountId && account.pin === pin
  // })

  if (currentAccount !== null) {
    window.alert('You have been logged in!')
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

