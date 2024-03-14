
window.addEventListener('DOMContentLoaded',()=>{
  
  // Checks to support touch events
  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
  }
  if(!isTouchDevice()){
     alert("your device can not be touch")
     return;
  }
   
  function Touch(){
    let startX;
    let startY;

     this.start = (callback)=>{
        window.addEventListener('touchstart',(event)=>{
            const firstTouch = event.touches[0];
            startX = firstTouch.clientX;
            startY = firstTouch.clientY;
        })
     }
     this.move = (callback)=>{
        window.addEventListener('touchmove',(event)=>{
            if (!startX || !startY) {
                return;
            }
        
            const touch = event.touches[0];
            const deltaX = touch.clientX - startX;
            const deltaY = touch.clientY - startY;
           
             let x = touch.clientX;
             let y = touch.clientY;
            // Detect the direction of movement
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > 0) {
                   callback({moveTo : "move to the right",x:x,y:y})
                } else {
                   callback({moveTo : "move to the left",x:x,y:y })

                }
            } else {
                if (deltaY > 0) {
                    callback({moveTo : "move to the bottom",x:x,y:y})

                } else {
                    callback({moveTo : "move to the top",x:x,y:y})
                }
            }
        })
     }
  }
  
  const touch = new Touch();
  touch.start()
  touch.move(({moveTo,x,y})=>{
     const moveText=document.querySelector('.touch-info span');
     const xText=document.querySelector('.touch-cordinat span.x')
     const yText=document.querySelector('.touch-cordinat span.y')
     xText.textContent = `x : ${x}`
     yText.textContent = `x : ${y}`
     moveText.textContent = `move : ${moveTo}`
  })




  
   
})
 