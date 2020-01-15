function copy() {

    var copyText = document.getElementById("passW");
    var btn = document.getElementById("copy_button");

    copyText.select();

    document.execCommand("copy");

    btn.innerHTML = "copied!";
    
    setTimeout(function() {
        btn.innerHTML = "copy";
    }, 2000);
}

function getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max));
        }

function newMakeId(length) {
    var chars = "";
    var result = "";
    
    var upB = document.getElementById('upB').checked;
    var lowB = document.getElementById('lowB').checked;
    var numB = document.getElementById('numB').checked;
    var spcB = document.getElementById('spcB').checked;
    
    if (upB) {
        chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    
    if (lowB) {
        chars += 'abcdefghijklmnopqrtuvwxyz';
    }
    
    if (numB) {
        chars += '1234567890';
    }
    
    if (spcB) {
        chars += '!@#$%^&*()_';
    }
    
    while (result.length < length) {
        var randomIndex = getRandomInt(chars.length);
    result += chars[randomIndex];
    }

    document.getElementById("passW").value = result;
}