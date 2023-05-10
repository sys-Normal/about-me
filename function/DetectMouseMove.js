const header = doc.querySelector('.simple_header');

function HeaderMouseEvent(data) {
    Log(`get data: ${data}`)    

    header.addEventListener('mousemove', (data) => {
        Log(`mouse move: ${data}`)
    })
}




header.addEventListener("mouseenter", HeaderMouseEvent);

