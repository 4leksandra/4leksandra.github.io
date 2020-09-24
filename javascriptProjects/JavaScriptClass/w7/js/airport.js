// === AIRPORT CONSTRUCTOR === 
function Airport(name, city, code){
    this.name = name;
    this.city = city;
    this.code = code;
}

let mtlAirport = new Airport("Pierre-Trudeau", "Montreal", "YUL");
let lndAirport = new Airport("Heathrew", "London", "HWT");

console.log(mtlAirport);
console.log(lndAirport.city);
console.log(lndAirport["code"]);