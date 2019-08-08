function makeDraggable(el) {
    el.addEventListener("mousedown", function (event1) {

        let left0 = el.offsetLeft;
        let top0 = el.offsetTop;
        let x0 = event1.clientX;
        let y0 = event1.clientY;

        document.addEventListener("mousemove",mmove);
        document.addEventListener("mouseup",mup);

        function mmove(event2) {
            let x = event2.clientX;
            let y = event2.clientY;

            el.style.left = (left0+(x-x0))+"px";
            el.style.top = (top0+(y-y0))+"px";
        }

        function mup() {
            document.removeEventListener("mousemove", mmove);
            document.removeEventListener("mouseup",mup);
        }

    })
}

makeDraggable(elem);