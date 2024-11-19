'use strict'

var firstName = 'Zbigniew'
var lastName = 'Nędzi'


var car = {
    brand: 'Volvo',
    model: 'XC70'
}

var me = {
    firstName: firstName,
    lastName: lastName,
    car: car,
}

me.name = me.firstName + ' ' + me.lastName

firstName = 'Marek'

car.model = 'V70'

car = null //przypisanie do zmiennej 'car' wartości null nie jest równoznaczne ze skarowaniem obiektu


console.log(me.car.brand)
console.log(me.car.model)
console.log(me);
