/*Create a box object that has three numeric properties to store
its measurements: length, width, and height.
Assign the values 20, 30, and 15 to these properties accordingly.
In addition, as the fourth property of the object you need to create getVolume
function, which should return the volume of the box */

let box = {
    length: 20,
    width: 30,
    height: 15,
    getVolume() {
        return(this.length * this.width * this.height);
    }
};

console.log(box.getVolume());