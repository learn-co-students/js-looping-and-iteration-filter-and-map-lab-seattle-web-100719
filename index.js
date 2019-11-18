// Code your solution here:
function driversWithRevenueOver(drivers, rev)
{
    return drivers.filter(function(driver) { return driver["revenue"] >= rev} ) ;
}

function driverNamesWithRevenueOver(drivers, rev)
{
    return driversWithRevenueOver(drivers, rev).map (function(driver) { return driver["name"] } );
}

function exactMatch(drivers, hash)
{
    return drivers.filter(function(driver) { return hash["name"] === driver["name"] || hash["revenue"] === driver["revenue"]});
}

function  exactMatchToList(drivers, hash)
{
    return exactMatch(drivers, hash).map(function(driver) {return driver["name"]});
}