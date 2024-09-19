<template>
    <teleport to='body' >
        <div class="modalBox">
            <div class="header">
                <p>Modal title</p>
                <p>x</p>  
            </div>
          <hr>
          <p class="content">Modal content</p>
          <hr>
          <div class="footer">
            <div></div>
            <button class="btn">Close</button>
          </div>
          
        </div>
        
    </teleport>
    
</template>

<style scoped>
/* .modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
} */
 .modalBox {
    width: 450px;
    height: 180px;
    border: 2px solid gray;
    margin-left: 100px;
    position: relative;
    top: -40px;
 }
 .header {
    width: 390px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 18px
 }
 .content {
    margin-left: 30px;
 }
 .footer {
    width: 390px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
 }
 .btn {
    background-color: gray;
    color: white;
 }
</style>