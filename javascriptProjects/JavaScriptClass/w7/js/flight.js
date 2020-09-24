function Flight(airline, depTime, arrTime, stops, priceInUSD, from, to, airClass){
    this.airline = airline;
    this.depTime = depTime;
    this.arrTime = arrTime;
    this.stops = stops;
    this.priceInUSD = priceInUSD;
    this.from = from;
    this.to = to;
    this.airClass = airClass;
    this.numberOfStops = () => {
        return this.stops.length;
    }
    this.priceInCAD = (rate) => {
        return (this.priceInUSD * rate).toFixed(2);
    }
    this.duration = () => {
        //arrTime - depTime = difference in milliseconds
        // milliseconds / 1000 = seconds
        // seconds / 60 = minutes
        // minutes / 60 = hours

        return ((this.arrTime - this.depTime)/(1000 * 60 * 60) + " hours");
    }
    this.numberOfOvernights = () => {

        return (this.arrTime.getDate() - this.depTime.getDate());
        }

 }

let torAirport = new Airport("Pearson", "Toronto", "YYZ");

let myFancyFlight = new Flight("Air Canada", new Date("2019-03-17T22:24:00"), new Date("2019-03-18T03:24:00"), [torAirport], 8500.58, mtlAirport, lndAirport, "First Class");

console.log(myFancyFlight);
console.log(myFancyFlight.priceInUSD);
console.log(myFancyFlight.stops[0].name);
console.log(myFancyFlight.arrTime);
console.log(myFancyFlight.numberOfStops());
console.log(myFancyFlight.priceInCAD(1.32));
console.log(myFancyFlight.arrTime.getHours());

console.log(myFancyFlight.duration());
console.log(myFancyFlight.numberOfOvernights());

// for duration ---- use moment . js (find online)


