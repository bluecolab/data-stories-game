const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'The Goldfish That Came from Choate Pond: A BlueColab Story',
    options: [
      {
        text: 'Start',
        nextText: 2
      },
    ]
  },
  {
    id: 2,
    text: 'Welcome to Pace! You begin your journey as a freshman, and you are given a fish. What do you do?',
    options: [
      {
        text: 'Take the fish',
        setState: { fish: true },
        
        nextText: 3
      },
      {
        text: "Don't take the fish",
        nextText: 10
      },
    ]
  },
  {
    id: 3,
    text: 'You leave the event with curiousity. What do you want to do next with your fish?',
    options: [
      {
        text: 'Return to your dorm',
        nextText: 4
      },
      {
        text: 'Throw the fish into the pond',
        nextText: 5 // RE-ASSIGN THIS ENDING
      },
      {
        text: 'Give the fish to your new friend',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'You return to your dorm, you discover that you NEED to put the fish in a proper setting. Where is the fish going to go?',
    options: [
      {
        text: 'Throw the fish into the toilet',
        nextText: 5
      },
      {
        text: 'Buy a goldfish bowl for the fish',
        nextText: 6
      },
      {
        text: 'Leave it in the plastic',
        nextText: 5
      }
    ]
  },
  {
    id: 5, // THE TOILET ENDING
    text: 'You throw the fish into the toilet, and it ventures into the sewers. The fish develops powers from the waste its been swimming within, and destroys the entire school. Fin.',
    options: [
      {
        text: 'Start Over',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'You buy a goldish bowl for your new little friend, but then you start to panick about what kind of water it needs. What are you going to fill in the tank?',
    options: [
      {
        text: 'Salt Water',
        nextText: 7
      },
      {
        text: 'Fresh water',
        nextText: 8
      },
      {
        text: 'VitaminWater',
        nextText: 7
      }
    ]
  },
  {
    id: 7, // Salt Water Ending
    text: 'Salt water is not good for the fish!! It dies minutes after you expose it to salt water. Fin.',
    options: [
      {
        text: 'Start Over',
        nextText: -1
      }
    ]
  },
  {
    id: 8,
    text: 'You give it the proper water it needs to survive. But now the fish is hungry, what do you give the fish?',
    options: [
      {
        text: 'Fish food',
        nextText: 9
      },
      {
        text: 'Crushed-up doritos',
        nextText: -1
      },
      {
        text: 'Peas that have been sitting in your freezer',
        nextText: -1
      }
    ]
  },
  {
    id: 9, // FISH FOOD ENDING
    text: 'You give the fish the proper food it needs. You are trusted enough to be able to take care of the fish for the rest of its healthy days! Be proud of yourself. :) Fin.',
    options: [
      {
        text: 'Start Over',
        nextText: -1
      }
    ]
  },
  {
    // NEUTRAL ENDING
    id: 10,
    text: "You don't take the fish, and you carry on with your day. Fin.",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    // 
    id: 11,
    text: 'TO BE DETERMINED',
    options: [
      {
        text: 'TO BE DETERMINED',
        nextText: 12
      }
    ]
  },
  {
    // 
    id: 12,
    text: 'TO BE DETERMINED',
    options: [
      {
        text: 'TO BE DETERMINED',
        nextText: 13
      }
    ]
  }
]

startGame()