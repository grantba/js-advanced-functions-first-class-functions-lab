// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    return array.slice(0, 2);
}

const returnLastTwoDrivers = (array) => {
    return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(int) {
    return function(fare) {return fare * int};
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(array, fx) {
    return fx(array);
}