let teamsSelected = []

const sectionCards = document.getElementById('container-cards')
const cards = sectionCards.children
const teams = [...cards]

const addPlayer = () => {
    const board = document.getElementById('board')
    const sectionBoard = document.getElementById('team-board')
    teams.map((team) => {
        const createSpace = document.createElement('div')
        createSpace.classList = 'space-player'
        team.onclick = () => {
            if(teamsSelected.includes(team.id) || teamsSelected.length === 5) return  
            console.log(team)  
            const divImg = team.children[0]
            const img = divImg.children[0]

            teamsSelected.push(team.id)

            const newImgTeam = document.createElement('img')
            newImgTeam.src = img.src
            
            const newNameTeam = document.createElement('h2')
            newNameTeam.innerHTML = team.id
            
            createSpace.id = team.id
            createSpace.appendChild(newImgTeam)
            createSpace.appendChild(newNameTeam)
            board.appendChild(createSpace)
        }
    })
    return teamsSelected
}

const removePlayer = () => {
    const board = document.getElementById('board')
    const playersBoard = [...board.children]
    playersBoard.map((player) => {
        player.onclick = () => {
            teamsSelected = teamsSelected.filter(item => item !== player.id)
            const elementToRemove = player
            elementToRemove.remove()
        }
    })
}

addPlayer()