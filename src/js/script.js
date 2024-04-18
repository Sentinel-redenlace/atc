var intervalID = window.setInterval(updateScreen, 200);
var c = document.getElementById("console");

document.addEventListener('DOMContentLoaded', function() {
    const el = document.documentElement;

    // Solicitar modo de pantalla completa
    if (el.requestFullscreen) {
        el.requestFullscreen();
    } else if (el.mozRequestFullScreen) { /* Firefox */
        el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) { /* Chrome, Safari y Opera */
        el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) { /* IE/Edge */
        el.msRequestFullscreen();
    }
        });

var txt = [
    "FORCE: XX0022. ENCYPT://18 de april 2024 ",
    "PASSWOARD: ********* AUTH CODE: ALPHA GAMMA: ___ @redenlace.ccom.bo____",
    "RETRY: REINDEER FLOTILLA",
    "Z:> /ATC/TICTACTOE/ EXECUTE -PLAYERS 0",
    "================================================",
    "Priority 1 // local / scanning...",
    "scanning ports...",
    "BACKDOOR FOUND (23.45.23.12.00000000)",
    "BACKDOOR FOUND (13.66.23.12.00110000)",
    "BACKDOOR FOUND (13.66.23.12.00110044)",
    "...",
    "...",
    "BRUTE.EXE -r -z",
    "...locating vulnerabilities...",
    "...vulnerabilities found...",
    "MCP/> DEPLOY CLU",
    "SCAN: __ 0100.0000.0554.0080 GLPI",
    "SCAN: __ 0020.0000.0553.0080 ASISTENCIA.net",
    "SCAN: __ 0001.0000.0554.0550 NAZIR",
    "SCAN: __ 0012.0000.0553.0030 GESTOR DOCUMENTAL",
    "SCAN: __ 0100.0000.0554.0080 FRM",
    "SCAN: __ 0020.0000.0553.0080 VRM",
    "FORCE: XX0022. ENCYPT://000.222.2345",
    "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
    "RETRY: REINDEER FLOTILLA",
    "Z:> /FALKEN/GAMES/TICTACTOE/ EXECUTE -PLAYERS 0",
    "================================================",
    "Priority 1 // local / scanning...",
    "scanning ports...",
    "BACKDOOR FOUND (23.45.23.12.00000000)",
    "BACKDOOR FOUND (13.66.23.12.00110000)",
    "BACKDOOR FOUND (13.66.23.12.00110044)",
    "...",
    "...",
    "BRUTE.EXE -r -z",
    "...locating vulnerabilities...",
    "...vulnerabilities found...",
    "SCAN: __ 0100.0000.0554.0080 GLPI",
    "SCAN: __ 0020.0000.0553.0080 ASISTENCIA.net",
    "SCAN: __ 0001.0000.0554.0550 NAZIR",
    "SCAN: __ 0012.0000.0553.0030 GESTOR DOCUMENTAL",
    "SCAN: __ 0100.0000.0554.0080 FRM",
    "SCAN: __ 0020.0000.0553.0080 VRM",
]

var docfrag = document.createDocumentFragment();

function updateScreen() {
    //Shuffle the "txt" array
    txt.push(txt.shift());
    //Rebuild document fragment
    txt.forEach(function(e) {
        var p = document.createElement("p");
        p.textContent = e;
        docfrag.appendChild(p);
    });
    //Clear DOM body
    while (c.firstChild) {
        c.removeChild(c.firstChild);
    }
    c.appendChild(docfrag);
}
