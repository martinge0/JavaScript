function nonMutatingSplice(cities) {

    let newArray = [];
    newArray = cities.slice(0,3);
    return newArray
  
  }
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);