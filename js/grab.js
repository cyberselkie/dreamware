if ($(window).width() > 530) {

var draggableElements = document.getElementsByClassName("draggable");

for(var i = 0; i < draggableElements.length; i++){
    dragElement(draggableElements[i]);
}


function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementsByClassName("draggable")) {
            elmnt.onmousedown = dragMouseDown;  
    } else {
    		elmnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = parseInt(e.clientX);
        pos4 = parseInt(e.clientY);
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        return false;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - parseInt(e.clientX);
        pos2 = pos4 - parseInt(e.clientY);
        pos3 = parseInt(e.clientX);
        pos4 = parseInt(e.clientY);
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

const items = document.querySelectorAll(".window");
    items.forEach(item => {
    item.addEventListener('mousedown', function(){
            items.forEach(item => {
                item.classList.remove("top");
                this.classList.add("top");
                if (item.classList.contains("top")) {
                    item.querySelector(".title-bar").classList.add("active")
                } else {
                    item.querySelector(".title-bar").classList.remove("active")
                }
            })
        })
});
}
