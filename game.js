const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
  imageChange(0)
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
  imageChange(nextTextNodeId -1)
}

function imageChange(option){
  let image = document.getElementById('image')
  let images = ['IMAGES/1.png','IMAGES/2.jpeg', 'IMAGES/3.png', 'IMAGES/4.jpeg', 'IMAGES/5.png', 'IMAGES/6.jpg', 'IMAGES/7.png', 'IMAGES/8.jpg', 'IMAGES/9.png', 'IMAGES/10.png', 'IMAGES/11.png', 'IMAGES/12.png', 'IMAGES/13.png', 'IMAGES/14.png', 'IMAGES/15.png', 'IMAGES/16.png']
  if (option == -1){
    image.src = images[0]
  }else{
    image.src = images[option]
  }
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
    text: 'You leave the event with curiosity. What do you want to do next with your fish?',
    options: [
      {
        text: 'Return to your dorm',
        nextText: 4
      },
      {
        text: 'Throw the fish into the pond',
        nextText: 15 // RE-ASSIGN THIS ENDING
      },
      {
        text: 'Give the fish to your new friend',
        nextText: 16
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
        nextText: 14
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
        nextText: 13
      }
    ]
  },
  {
    id: 7, // SALT WATER ENDING
    text: 'Salt water is not good for the fish!! It passes away after you expose it to salt water. Fin.',
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
        nextText: 11
      },
      {
        text: 'Peas that have been sitting in your freezer',
        nextText: 12
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
    id: 11, // DORITOS ENDING
    text: "You feed the fish crushed up doritos, it doesn't eat it. Because of that, it passes away the same day. Fin.",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 12, // PEAS ENDING
    text: "You feed the fish peas, it likes the peas! You can feed it peas since it's a vegetable. While you feed it you go to the store and buy fish food. The fish continues to live a long and happy life. Fin.",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 13, // VITAMIN WATER ENDING
    text: 'You fill the tank with VitaminWater that you found in the fridge. The fish passed away the next day. Fin.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 14, // PLASTIC BAG ENDING
    text: 'A plastic bag is supposed to be temporary, not a permanent residency! The fish passes away days later due to the lack of environment, and imbalance of water and air. Fin.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 15, // POND ENDING
    text: "You throw the fish into Choate Pond. What you don't realize is that Goldfish are predatory to ponds and aren't supposed to be in there. This leads to the fish to mutate overtime, and become intelligent. The fish grows in size and begins to destroy Pace. Look at what you've done. Fin.",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 16, // FRIEND ENDING
    text: 'You give the fish to your friend. They decide to not bother to care for the fish and flush it down the toilet, and it ventures into the sewers. The fish develops powers from the waste its been swimming within, and destroys the entire school. Fin.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
]

startGame()
imageChange(0)