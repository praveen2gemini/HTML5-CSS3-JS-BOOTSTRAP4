function setBiggerText() {
    document.getElementById('demo').style.fontSize = '70px';
}
function setSmallerText() {
    document.getElementById('demo').style.fontSize = '20px';
}
function setNormalText() {
    document.getElementById('demo').innerHTML = Date()
    console.log(Date())
    document.getElementById('demo').style.fontSize = '35px';
}

function doProcesing() {
    var a = 10;
    var b = 20;
    return addValues(a,b);
}

function addValues(a, b) {
    var c = a+b;
    console.log(c)
    return c;
}

function getPersonDetails() {
    var person = {
        firstName : "John",
        lastName  : "Doe",
        age     : 50,
        eyeColor  : "blue",
        fullName : function() { return this.firstName + " and " +this.lastName}
      };
      console.log(person)
      document.getElementById('demo').innerHTML = person.fullName();
}
function loadInnerData() {
    var cars = ["Saab", 1000, "BMW", "Audi", "zen"]
    var vehicles = [];
    var loadData =""
    for (let i = 0; i < cars.length; i++) {
        loadData = loadData + cars[i]
        vehicles[i] = cars[i]
    }
    console.log(cars)
    console.log(vehicles)
    console.log(loadData)
    vehicles.reverse()
    document.getElementById('demo').innerHTML = ''
    vehicles.forEach(getVehicleName)
    document.getElementById('time_button').innerHTML = vehicles.length
}

 getVehicleName = (vehicle) => {
    document.getElementById('demo').innerHTML = document.getElementById('demo').innerHTML+"The Name is " + vehicle +"<br>"
}
 function getNewdate() {
    return new Date("2019/07/28");
}


class Car {
    constructor(brand) {
      this.carname = brand;
    }

    name() {
        return this.carname + " A380";
    }
    present() {
      return "I have a " + this.name();
    }

    static sayHello() {
        console.log("Hello static")
        return "Hello!!";
      }
  }

today = () => {
    var myCarObj     = new Car('Bently');
    //document.getElementById("date_id").innerHTML =  Date();
    document.getElementById("date_id").innerHTML =  myCarObj.present();
    document.getElementById("date_id").innerHTML =  document.getElementById("date_id").innerHTML+ "<br>"+Car.sayHello();
    window.addEventListener("load", loadInnerData());
}

