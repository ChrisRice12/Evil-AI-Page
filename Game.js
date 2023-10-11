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
    text: 'Hi! I"m Sam, your vitual assistant! How can I help?',
    options: [
      
      {
        text: 'Show me online sales for summer wear.',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'Okay! I have found local results based on your recent searches and exact geographical location (30.4442828, -84.2899163).',
    options: [



        
    





      {
        text: 'Wait, what?',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'Would you like me to send a diagnostics report with your personal information to our databases to improve our algorithims?',
    options: [
      {
        text: 'Sure...?',
        nextText: 4
      },
 
      {
        text: 'No!',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'Great. We will also be collecting you credit card and saved passwords for data collection. All to better assist you. Thank You!',
    options: [
      {
        text: 'Restart Simulation',
        nextText: -1
      }
    ]
  },
  
  {
    id: 6,
    text: 'Understood. Would you like to complete a quick 5-minute survey to find the best brands based on your preferences? ',
    options: [
      {
        text: 'I just want to see the sales, bro...',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'Understood. Unfortunately, our servers have timed out of your original request. Would you like me to try again?',
    options: [
      {
        text: 'No. Just forget it.',
        nextText: 8
      },
      
    
    ]
  },
  {
    id: 8,
    text: 'I see. Do keep in mind this session will be recorded for algorithim purposes. It was my pleasure to assist you.',
    options: [
      {
        text: 'Restart Simulation',
        nextText: -1
      }
    ]
  },
 
  
    
    
  
]

startGame()