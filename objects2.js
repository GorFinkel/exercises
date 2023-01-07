const team={
  _players:[
{firstname:'John',lastName:'McNey',age:22},
    {firstname:'Paul',lastName:'Alan',age:32},  {firstname:'Fred',lastName:'Jersia',age:29}
  ],
  _games:[
    {opponent:'Chickago Bulls',teampoints:10,opponentPoints:33},{opponent:'Minisota Eagles',teampoints:30,opponentPoints:23},{opponent:'New York Yankees','team points':20,'opponent points':20}
  ],
  get players (){
return this._players
  },
  get games (){
return this._games
  },
  addPlayer(newFirstName, newLastName, newAge){
let player={
firstName:newFirstName,
  lastName:newLastName,
  age:newAge
}
this._players.push(player)
  },
addGame(newOpponent, newTeamPoints, newOpponentPoints){
  let game = {
    opponent:newOpponent , 'team points': newTeamPoints,
'opponent Points': newOpponentPoints
  }
  team._games.push(game)
}
}
team.addPlayer('a','v',2)
`team.addGame('Minisota Dolphins', 22, 11)
`
console.log(team.players)
console.log(team.games)
