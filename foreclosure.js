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
    

    
        isForeclosed: function (){
            return account.foreclosed;
        } //end of function isForeclosed
     }; // end of unamed object and closure
} // end of loan function

    function borrower(loan){
        var account = {};
        account.monthlyIncome = 1350;
        account.funds = 2800;
        account.loan = loan;


        return { getFunds: function(){
            return account.funds;
        }, // end of getFunds object

        makePayment: function(){
            if(account.funds > account.loan){
                account.funds -=account.monthlyPayment;
                
            }
        }

        

        }; // end of object
     }//end of borrower function

loan();
stevesLoan = loan();

borrower(stevesLoan);
steve = borrower;



