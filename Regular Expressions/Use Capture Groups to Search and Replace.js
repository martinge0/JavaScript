let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);

//"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"