const peakyBlindersCharacters = [
    { id: 1, name: "Thomas Shelby", occupation: "Gangster" },
    { id: 2, name: "Arthur Shelby", occupation: "Gangster" },
    { id: 3, name: "Polly Gray", occupation: "Businesswoman" },
    { id: 4, name: "Alfie Solomons", occupation: "Gangster" },
    { id: 5, name: "John Shelby", occupation: "Gangster" },
    { id: 6, name: "Ada Shelby", occupation: "Activist" },
    { id: 7, name: "Michael Gray", occupation: "Businessman" },
    { id: 8, name: "Aberama Gold", occupation: "Gangster" },
    { id: 9, name: "Grace Shelby", occupation: "Singer" },
    { id: 10, name: "Lizzie Stark", occupation: "Prostitute" },
  ];
  console.log(peakyBlindersCharacters);

  peakyBlindersCharacters.forEach((character) => {
    if (character.name === "Thomas Shelby") {
      thomasShelbyOccupation = character.occupation;
    }
  });
  
  console.log(thomasShelbyOccupation);