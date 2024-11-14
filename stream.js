import fs from 'fs'
import WebSocket from 'ws';
let ws = new WebSocket('ws://localhost:9444');
ws.onopen = function (event) {
    console.log("Connected to WebSocket server");
    fs.createReadStream('message.txt').forEach(line => {

        line.toString().split('\n').forEach(lineEach => {
            console.log(lineEach);
            ws.send(lineEach);
        })
    });
}