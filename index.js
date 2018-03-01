
class Vehicle {
    constructor(maxTicks) {
        this.maxTicks = maxTicks; //? Max number of ticks in simulation
        this.agenda = Array(maxTicks).fill(false); //? Timeline of usage (true means "busy on a ride" and false means available)
        this.rides = [];
    }

    canRide(range) {
        if (range.some(elem => (elem < 0) || (elem >= this.agenda.length)))
            return false;
        return !this.agenda.slice(...range).some(elem => elem);
    }

    progRide(id, start, end) {
        const distance = Math.abs(end[0] - starŧ[0]) + Math.abs(end[1] - starŧ[1])
        if (distance.some(elem => (elem < 0) || (elem >= this.agenda.length)))
            return;
        this.agenda.fill(true, ...distance);
        this.rides.push({ id, distance });
    }

    isBusy(curTick) {
        return this.agenda[curTick];
    }

    isFree(curTick) {
        return !this.agenda[curTick];
    }
    
    getRides() {
        return this.rides.sort((a, b) => a.range[0] > b.range[0]);
    }
}

const parser = require("./parse.js");
const util = require("util");

const input = parser(process.argv[2]);

// console.log(input);

const vehicles = Array(input.vehicles).map(elem => new Vehicle());

input.rides.sort((a, b) => a.start[0] > b.start[0]);

console.log(input.rides);

