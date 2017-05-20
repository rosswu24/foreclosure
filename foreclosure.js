'use strict';

var steve;
var stevesLoan;
var month = 0;
var monthsUntilEvicted;

function loan (){
    var account = {};
    account.borrowed = 550000;
    account.balance = 286000;
    account.monthlyPayment = 1700;
    account.defaulted = 0;
    account.defaultsToForeclose = 5;
    account.foreclosed = false;

    function missPayment(){
        account.defaulted ++;
        if (account.defaulted >=account.defaultsToForeclose){
            account.foreclosed = true;

        } // end of if statemnet in missPayment
    } // end of misspayment function within loan function

    return  { 

        getBalance: function (){
        return account.balance;
        }, // end of unamed function
     // return getBalance

 
        receivePayment: function (amount){
            if(amount<account.monthlyPayment){
                missPayment ();
                account.monthlyPayment-=amount;
            }
        },//end of unamed function withing receivePayment Object


    
        getMonthlyPayment: function (){
            return account.monthlyPayment;
        },//end of get MonthlyPayment function
    

    
        isfForeClosed: function (){
            return account.foreclosed;
        } //end of function isForeclosed
     }; // end of unamed object and closure

     function borrower(loan){
        var account = {};
     }//end of borrower function



} // end of loan function

loan();

stevesLoan = loan();


