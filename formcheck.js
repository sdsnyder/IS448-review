/*
    Sebastian Snyder
    Homework 4
    IS 448
    The Form Check Script
*/
"use strict";

window.onload = pageLoad;
function pageLoad(){
    document.getElementById("state").onblur=chkState;
    document.getElementById("email").onblur=chkEmail;
    document.getElementById("phone").onblur=chkPhone;
    document.getElementById("submit").onclick=chkForm;
}

function chkState(){
    var state = document.getElementById("state").value;
    var regex = /^[A-Za-z]{2}$/;
    var result = regex.test(state);
    if (result){
        if (state == "MD" || state == "NJ"|| state == "NY" || state == "DC" || state == "PA"){
            console.log(result);
            return true;
        }else{ 
            alert("We're only accepting local responses at this time \n Please enter either MD, NJ, NY, DC, or PA");
            document.getElementById("state").focus();
            document.getElementById("state").select();
            //return false;
        }
    }else{
        alert("Please only enter an abbreviation for the state");
        document.getElementById("state").focus();
        document.getElementById("state").select();
        //return false;
    }
}

function chkEmail(){
    var email = document.getElementById("email").value;
    var regex = /^[A-Za-z_0-9]+@{1}[A-Za-z]+\.com$/
    var result = regex.test(email);
    if (result){
        console.log(result);
        return true;
    }else{
        alert("Invalid Email Address Format!");
        return false;
    }
}

function chkPhone(){
    var phone = document.getElementById("phone").value;
    var regex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    var result = regex.test(phone);
    if (result){
        console.log(result);
        return true; 
    }else{
        alert("invalid phone number format. \n Use 000-000-0000");
        return false;
    }
}

function chkForm(){
    var uname = document.getElementById("name").value;
    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (uname == "" || street == "" || city == "" || state == "" || email == "" || phone == ""){
        alert("You are missing one or more parameters.");
        return false;
    }else{
        return true;
    }
}