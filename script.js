let playersSelected = []

const sectionCards = document.getElementById('container-cards')
const cards = sectionCards.children
const players = [...cards] 

const addPlayer = () => {
    const board = document.getElementById('board')
    const sectionBoard = document.getElementById('team-board')
    players.map((player) => {
        const createSpace = document.createElement('div')
        createSpace.classList = 'space-player'
        player.onclick = () => {
            if(playersSelected.includes(player.id) || playersSelected.length === 5) return    

            playersSelected.push(player.id)
            
            const imgPlayer = document.createElement('img')
            imgPlayer.src = player.src
            
            const namePlayer = document.createElement('h2')
            namePlayer.innerHTML = player.id
            
            createSpace.id = player.id
            createSpace.appendChild(imgPlayer)
            createSpace.appendChild(namePlayer)
            board.appendChild(createSpace)
        }
    })
    return playersSelected
}

const removePlayer = () => {
    const board = document.getElementById('board')
    const playersBoard = [...board.children]
    playersBoard.map((player) => {
        player.onclick = () => {
            playersSelected = playersSelected.filter(item => item !== player.id)
            const elementToRemove = player
            elementToRemove.remove()
        }
    })
}

addPlayer()