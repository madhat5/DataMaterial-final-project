// 'use strict'

let fs = require('fs');
const csvParser = require('csv-parser');
const d3 = require('d3');

let dataTemplate = {
    'key': 00,
    'date': String,
    'name': String,
    'tempAvg': 00,
    'tempMax': 00,
    'tempMin': 00
}

let data = []

let weatherData = function () {

    let num = 0

    fs.createReadStream('data/nyc_2020.csv')
        .on('error', () => {
            console.log('error')
        })
        .pipe(csvParser())
        .on('data', (row) => {
            num = num + 1;
            // console.log(num);

            // console.log(row);
            // console.log(row.DATE);
            // console.log(row.NAME);

            let avgTemp = Math.round(((+row.TMAX + +row.TMIN) / 2) * 100) / 100;
            // console.log(avgTemp);

            let alphaTempConvert = d3.scaleLinear()
                    .domain([0.6, 35.6]) 
                    // .range([1, 26]);
                    .range([1, 7]);

            let alphaTemp = Math.round((alphaTempConvert(avgTemp)) * 1) / 1;
            // console.log(alphaTemp);

            let pitchTempConvert = d3.scaleLinear()
                    .domain([-9.9, 27.2]) 
                    // .range([1, 26]);
                    .range([0, 9]);

            let pitchTemp = Math.round((pitchTempConvert(avgTemp)) * 1) / 1;
            // console.log(pitchTemp);

            if (pitchTemp == 10) {
                pitchTemp = 9
            }

            if (alphaTemp == 0) {
                alphaTemp = 1
            }
            let alphaLetter = (alphaTemp + 9).toString(36).toUpperCase();

            let spn = alphaLetter + pitchTemp;

            data.push({
                key: num,
                date: row.DATE,
                // month: ,
                name: row.NAME,
                tempAvg: avgTemp,
                tempMax: +row.TMAX,
                tempMin: +row.TMIN,
                // letterNote: alphaTemp,
                // pitchNote: pitchTemp,
                // letter: alphaLetter,
                spnNote: spn
            })

        })
        .on('end', () => {
            // console.log(data)
            writeFile('nyc2020Weather', data)
        });
}
weatherData();

function writeFile(fsName, fsData) {
    // fs.writeFileSync('data/' + fsName + '.json', JSON.stringify(fsData));
    fs.writeFileSync('data/' + fsName + '.json', JSON.stringify(fsData));
    console.log('*** *** *** *** ***');
    console.log('writeFile complete for', fsName);
}


let tempData = require("./DATA/nyc2020Weather.json")
// console.log(tempData)


// GET MAX AND MIN VALUES FOR DOMAIN
function getMax(arr, prop) {
    var max;
    for (var i = 0; i < arr.length; i++) {
        if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
            max = arr[i];
    }
    return max;
}
// let maxRes = getMax(tempData, "tempAvg");
// let maxRes = getMax(tempData, "tempMax");
let maxRes = getMax(tempData, "tempMin");
// console.log(maxRes)

function getMin(arr, prop) {
    var max;
    for (var i = 0; i < arr.length; i++) {
        if (max == null || parseInt(arr[i][prop]) < parseInt(max[prop]))
            max = arr[i];
    }
    return max;
}
// let minRes = getMin(tempData, "tempAvg");
// let minRes = getMin(tempData, "tempMax");
let minRes = getMin(tempData, "tempMin");
// console.log(minRes)


