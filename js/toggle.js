// show or hide a window
function openClose(clicked_id) {
    const btn = document.getElementById(clicked_id);
    const targetDiv = btn.closest("#hide");
    targetDiv.classList.add('hidden');
};

function fuck(clicked_id) {
    const games = document.getElementById("games");
    const you = document.getElementById("you");
    if (clicked_id == "games") {
        let btn = games.closest("#hide");
        change(games)
        btn.classList.remove('hidden');
    } else if (clicked_id == "you") {
        let btn = you.closest("#hide");
        change(you)
        btn.classList.remove('hidden');
    };
};
baseURL = "https://dreamware-test.netlify.app"
function memberIframe(clicked_id) {
    const addressBar = document.getElementById("members-address-bar")
    const memberBrowser = document.getElementById("member-browser")
    const memberContent = document.getElementById("member-content")

    let btn = memberBrowser.closest("#hide");
    change(memberBrowser)
    btn.classList.remove('hidden');
    url = baseURL + "/members/"

    if (clicked_id == "charlotte") {
        source = "../members/charlotte.html"
        address = url + "charlotte.html"
    } else if (clicked_id == "snow" ){
        source = "../members/snow.html"
        address = url + "snow.html"
    }
    addressBar.value = address;
    $(memberContent).load(source + " #aboutme");
}
function gameFrame(clicked_id) {
    const addressBar = document.getElementById("game-address-bar")
    const memberBrowser = document.getElementById("game-browser")
    let btn = memberBrowser.closest("#hide");
    change(memberBrowser);
    btn.classList.remove('hidden');
    url = baseURL + "/games/"

    if (clicked_id == "daisy-chainsaw") {
        source = "../games/daisychainsaw.html"
        address = url + "daisychainsaw.html";
    } else if (clicked_id == "dotdungeon" ){
        source = "../games/dotdungeon.html";
        address = url + "dotdungeon.html";
    } else if (clicked_id == "songbirds-blue" ){
        source = "../games/songbirds3e.html"
        address = url + "songbirds3e.html"
    } else if (clicked_id == "brats" ){
        source = "../games/brats.html"
        address = url + "brats.html"
    }
    addressBar.value = address
    $("#game-content").load(source + " #game-text");
}

function openIcon(clicked_id) {
    if (clicked_id == "documents") {
        const btn = document.getElementById("welcome");
        const targetDiv = btn.closest("#hide");
        targetDiv.classList.remove('hidden');
    } else if (clicked_id == "outlook-icon") {
        const btn = document.getElementById("outlook");
        change(btn)
        const targetDiv = btn.closest("#hide");
        targetDiv.classList.remove('hidden');
    } else if (clicked_id == "internet-icon") {
        const btn = document.getElementById("internet");
        change(btn)
        const targetDiv = btn.closest("#hide");
        targetDiv.classList.remove('hidden');
    } else if (clicked_id == "chat-icon") {
        const btn = document.getElementById("chat");
        change(btn)
        const targetDiv = btn.closest("#hide");
        targetDiv.classList.remove('hidden');
        pickCard();
    }
};

function openURL(clicked_id) {
    if (clicked_id == "maxNet") {
        const btn = document.getElementById("members-address-bar");
        url = btn.value
        window.open(url)
    } else if (clicked_id == "maxGames") {
        const btn = document.getElementById("game-address-bar");
        url = btn.value
        window.open(url)
    }
};

// random location for popups
function change(btn) {
    var i = Math.floor(Math.random()*75)+1;
    var j = Math.floor(Math.random()*75)+1;
    btn.style.left = i+"vw";
    btn.style.top = j+"vh";
}


// change background image depending on user time
function timeBG() {
    const bg_image = document.getElementById("bg");
    let current_hour = new Date().getHours();
    if (current_hour <= 5 && current_hour >= 20) { // night time
        bg_image.style.backgroundImage = "url('../icon/images/clouds.webp')";
    } else if (current_hour > 5 && current_hour <= 10) {
        bg_image.style.backgroundImage = "url('../icon/images/morning.jpg')";
    } else {
        bg_image.style.backgroundImage = "url('../icon/images/day.jpg')";
    }
}
timeBG()
