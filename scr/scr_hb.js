document.title = 'hist0r1as brev3s pachec4s';
let elTitul = document.createElement('h6');
elTitul.style.fontFamily = '"Lucida Console", "Courier New", monospace';
elTitul.innerText = hb.sentir[0] + hb.sentir[1];
let elBody = document.createElement('div');
elBody.style.fontFamily = '"Lucida Console", "Courier New", monospace';
elBody.innerText = hb.sentir[2];

document.body.appendChild(elTitul);
document.body.appendChild(elBody);

//TODO funct el(elTyp,cntnt,css) return append
