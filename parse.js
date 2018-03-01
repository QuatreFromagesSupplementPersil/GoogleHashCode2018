
const fs = require("fs");

function parseFile(file) {
    const content = fs.readFileSync(file).toString();

    const lines = content.split("\n").filter(line => line.length > 0);
    const n = lines[0].split(" ").map(n => parseInt(n, 10));

    lines.shift();

    return {
        rows: n[0],
        columns: n[1],
        vehicles: n[2],
        rideCount: n[3],
        bonus: n[4],
        steps: n[5],
        rides: lines.map(line => {
            const tab = line.split(" ").map(n => parseInt(n, 10));
            return {
                start: [tab[0], tab[1]],
                end: [tab[2], tab[3]],
                early: tab[4],
                late: tab[5]
            }
        })
    };
}

module.exports = parseFile;
