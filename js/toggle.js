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

function memberIframe(clicked_id) {
    const addressBar = document.getElementById("members-address-bar")
    const memberBrowser = document.getElementById("member-browser")
    let btn = memberBrowser.closest("#hide");
    change(memberBrowser)
    btn.classList.remove('hidden');

    if (clicked_id == "charlotte") {
        source = "../members/charlotte.html"
        address = "https://dreamware.press/members/charlotte.html"
    } else if (clicked_id == "snow" ){
        source = "../members/snow.html"
        address = "https://dreamware.press/members/snow.html"
    }
    addressBar.value = address
    $("#member-content").load(source + " #info");
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

// random location for popups
function change(btn) {
    var i = Math.floor(Math.random()*1000)+1;
    var j = Math.floor(Math.random()*500)+1;
    btn.style.left = i+"px";
    btn.style.top = j+"px";
}

$('#start-menu-btn').change(function() {
    $('#start-menu').toggle();
});

const helpBtn = document.getElementById('help-menu-btn')
helpBtn.addEventListener('click', function(){
    document.getElementById('help').closest('#hide').classList.remove('hidden');
    $('#start-menu').toggle();
});

function message() {
    document.getElementById("chat-box-text").innerHTML = "<moose> irc chat.sadslut.club #happy99 \n<moose> got it?";
 }
 setTimeout(message,180 * 1000);

