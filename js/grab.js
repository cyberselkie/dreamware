
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

const position = { x: 0, y: 0 }

interact('.draggable').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})