const team = {
    _players : [
                {firstName: 'Pablo', lastName: 'Sanchez', age: 11},
                {firstName: 'Jeff', lastName: 'Santos', age: 13},
                {firstName: 'Carl', lastName: 'Clip', age: 15}
                ],
    _games : [
              {opponent: 'Broncos', teamPoints: 44, opponentPoints: 33},
              {opponent: 'Jets', teamPoints: 42, opponentPoints: 14},
              {opponent: 'Quails', teamPoints: 30, opponentPoints: 25}
    ],
  
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
  
  
  addPlayer(firstName, lastName, age){
    let player = {
      firstName : firstName,
      lastName : lastName,
      age : age
    };
  this.players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints){
    const game = {
      opponent: opponent,
      teamPoints : teamPoints,
      opponentPoints : opponentPoints
    }
    this.games.push(game);
  }
  };
  team.addPlayer("Steph", "Curry", 28);
  team.addPlayer("Lisa", "Leslie", 44);
  team.addPlayer("Bugs", "Bunny", 76);
  
  console.log(team.players);
  
  
  team.addGame("Mantas", 29, 1)
  team.addGame("Spikes", 24, 13)
  team.addGame("Morons", 14, 12)
  
  console.log(team.games);