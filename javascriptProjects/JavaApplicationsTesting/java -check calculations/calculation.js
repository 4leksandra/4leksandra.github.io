let plan = "loan";
let input = 5000;
let interest = 60;
let term = 5 * 12;
let result;

function calculate() {

    interest /= 100;
    //    let interestInMonths = interest/12;
    interestInMonths = 0.05;
    console.log('interest in months', interestInMonths)


    if (plan = "loan") {
        result = input * interestInMonths / (1.0 - Math.pow((1.0 + interestInMonths), -term));
        //       result = input * (interestInMonths/ (1.0 - (Math.pow(1.0 + interestInMonths, (term*=-1)))))

        //        result = input * (interestInMonths / (1.0 - (Math.pow(1.0 + interestInMonths, term*=-term))));

        //        result = input * interestInMonths/(1 -Math.pow(1 + interestInMonths,(term*= -1)));

        //        double monthlyPayment = 
        //         (loanAmount*monthlyRate) / 
        //            (1-Math.pow(1+monthlyRate, -termInMonths));
        //       

    }
    if (plan = "future") {

    } else {

    }
    console.log(result);
}

calculate();