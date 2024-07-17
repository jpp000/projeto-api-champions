import PlayerModel from "../models/player-model"

const dataBase: PlayerModel[] = [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 92,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65
        }
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        club: "Al Nassr",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            Overall: 92,
            Pace: 87,
            Shooting: 93,
            Passing: 82,
            Dribbling: 89,
            Defending: 35,
            Physical: 77
        }
    },
    {
        id: 3,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgium",
        position: "Midfielder",
        statistics: {
            Overall: 91,
            Pace: 76,
            Shooting: 86,
            Passing: 93,
            Dribbling: 88,
            Defending: 64,
            Physical: 78
        }
    },
    {
        id: 4,
        name: "Robert Lewandowski",
        club: "Barcelona",
        nationality: "Poland",
        position: "Forward",
        statistics: {
            Overall: 92,
            Pace: 78,
            Shooting: 91,
            Passing: 79,
            Dribbling: 86,
            Defending: 44,
            Physical: 82
        }
    },
    {
        id: 5,
        name: "Virgil van Dijk",
        club: "Liverpool",
        nationality: "Netherlands",
        position: "Defender",
        statistics: {
            Overall: 89,
            Pace: 76,
            Shooting: 60,
            Passing: 70,
            Dribbling: 72,
            Defending: 91,
            Physical: 86
        }
    },
    {
        id: 6,
        name: "Neymar Jr.",
        club: "Paris Saint-Germain",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 91,
            Shooting: 85,
            Passing: 86,
            Dribbling: 94,
            Defending: 37,
            Physical: 61
        }
    },
    {
        id: 7,
        name: "Mohamed Salah",
        club: "Liverpool",
        nationality: "Egypt",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 93,
            Shooting: 87,
            Passing: 81,
            Dribbling: 90,
            Defending: 45,
            Physical: 75
        }
    },
    {
        id: 8,
        name: "Kylian Mbappe",
        club: "Paris Saint-Germain",
        nationality: "France",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 97,
            Shooting: 88,
            Passing: 80,
            Dribbling: 92,
            Defending: 39,
            Physical: 76
        }
    },
    {
        id: 9,
        name: "Luka Modric",
        club: "Real Madrid",
        nationality: "Croatia",
        position: "Midfielder",
        statistics: {
            Overall: 89,
            Pace: 75,
            Shooting: 76,
            Passing: 89,
            Dribbling: 90,
            Defending: 72,
            Physical: 68
        }
    },
    {
        id: 10,
        name: "Sergio Ramos",
        club: "Paris Saint-Germain",
        nationality: "Spain",
        position: "Defender",
        statistics: {
            Overall: 88,
            Pace: 70,
            Shooting: 64,
            Passing: 75,
            Dribbling: 70,
            Defending: 88,
            Physical: 83
        }
    },
    {
        id: 11,
        name: "Jan Oblak",
        club: "Atletico Madrid",
        nationality: "Slovenia",
        position: "Goalkeeper",
        statistics: {
            Overall: 91,
            Pace: 50,
            Shooting: 25,
            Passing: 34,
            Dribbling: 45,
            Defending: 15,
            Physical: 85
        }
    },
    {
        id: 12,
        name: "N'Golo Kante",
        club: "Chelsea",
        nationality: "France",
        position: "Midfielder",
        statistics: {
            Overall: 89,
            Pace: 77,
            Shooting: 66,
            Passing: 78,
            Dribbling: 81,
            Defending: 87,
            Physical: 82
        }
    },
    {
        id: 13,
        name: "Sadio Mane",
        club: "Bayern Munich",
        nationality: "Senegal",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 94,
            Shooting: 83,
            Passing: 80,
            Dribbling: 88,
            Defending: 45,
            Physical: 76
        }
    },
    {
        id: 14,
        name: "Joshua Kimmich",
        club: "Bayern Munich",
        nationality: "Germany",
        position: "Midfielder",
        statistics: {
            Overall: 89,
            Pace: 72,
            Shooting: 73,
            Passing: 86,
            Dribbling: 84,
            Defending: 84,
            Physical: 77
        }
    },
    {
        id: 15,
        name: "Raheem Sterling",
        club: "Chelsea",
        nationality: "England",
        position: "Forward",
        statistics: {
            Overall: 88,
            Pace: 93,
            Shooting: 81,
            Passing: 79,
            Dribbling: 89,
            Defending: 45,
            Physical: 66
        }
    },
    {
        id: 16,
        name: "Karim Benzema",
        club: "Al-Ittihad",
        nationality: "France",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 79,
            Shooting: 88,
            Passing: 84,
            Dribbling: 87,
            Defending: 40,
            Physical: 78
        }
    },
    {
        id: 17,
        name: "Frenkie de Jong",
        club: "Barcelona",
        nationality: "Netherlands",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 81,
            Shooting: 73,
            Passing: 86,
            Dribbling: 88,
            Defending: 76,
            Physical: 78
        }
    },
    {
        id: 18,
        name: "Alisson Becker",
        club: "Liverpool",
        nationality: "Brazil",
        position: "Goalkeeper",
        statistics: {
            Overall: 90,
            Pace: 60,
            Shooting: 40,
            Passing: 51,
            Dribbling: 53,
            Defending: 18,
            Physical: 84
        }
    },
    {
        id: 19,
        name: "Marc-Andre ter Stegen",
        club: "Barcelona",
        nationality: "Germany",
        position: "Goalkeeper",
        statistics: {
            Overall: 90,
            Pace: 61,
            Shooting: 29,
            Passing: 50,
            Dribbling: 52,
            Defending: 27,
            Physical: 83
        }
    },
    {
        id: 20,
        name: "Erling Haaland",
        club: "Manchester City",
        nationality: "Norway",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 89,
            Shooting: 91,
            Passing: 65,
            Dribbling: 80,
            Defending: 45,
            Physical: 88
        }
    }
];


export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return dataBase
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return dataBase.find( player => player.id === id )
}

export const addPlayer = async (player: PlayerModel) => {
    dataBase.push(player)
}

export const deletePlayerById = async (id: number) => {
    const index = dataBase.findIndex( player => player.id === id )

    if(index !== -1){
        dataBase.splice(index,1)
        return true
    }
    
    return false
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
    const index = dataBase.findIndex( player => player.id === id )

    if(index !== -1){
        dataBase[index].statistics = statistics
    }
    
    return dataBase[index]
}