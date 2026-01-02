const accountId = 144553
let accountEmail = "subhajit@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  // not allowed

accountEmail = "hc@hc.com"
accountPassword = "11111"
accountCity = "Kolkata"

console.log(accountId);
/*
prefer not to use var 
beacuase of issues in block scope {} & functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
