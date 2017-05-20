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
        } // end of unamed function
    }; // return getBalance

    return {
        receivePayment: function (amount){
            if(amount<account.monthlyPayment){
                misspayment();
                account.monthlyPayment-=amount;
            }
        }//end of unamed function withing receivePayment Object
    }; // return receivePayments



} // end of loan function


