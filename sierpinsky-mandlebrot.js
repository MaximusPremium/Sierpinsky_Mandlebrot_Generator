const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const W = canvas.width = 5000
const H = canvas.height = 5000
canvas.style.background = 'black'

const arr = [[W/2,0],[W,H/2],[0,H/2]]
let pnt = [W/2,0]
ctx.strokeStyle = 'white'
ctx.fillStyle = 'yellow'
ctx.lineWidth = 1
const pointSize = 1

ctx.beginPath()
drawMandlebrot()

window.setInterval(()=>{
    drawSierpinsky()
    //drawMandlebrot()
},10)

function drawMandlebrot(){
    let max = 10
    for (let row = 0; row < H; row+=5) {
        for (let col = 0; col < W; col+=5) {
            let c_re = (col - W/2.0)*4.0/W;
            let c_im = (row - H/2.0)*4.0/W;
            let x = 0;
            let y = 0;
            let iteration = 0;
            while (x*x+y*y <= 4 && iteration < max) {
                x_new = x*x - y*y + c_re;
                y = 2*x*y + c_im;
                x = x_new;
                iteration++;
            }
            if (iteration < max) {
                ctx.fillRect(row,col,1,1)
            }
        }
    }
}

function drawSierpinsky(){
    for(let i=0;i<1000;i++){
        ctx.fillRect(pnt[0],pnt[1],pointSize,pointSize)
        //let tmp = pnt
        //ctx.moveTo(tmp[0],tmp[1])
        pnt = getMidPoint(pnt,arr[Math.floor(Math.random() * 3)])
        //ctx.lineTo(pnt[0],pnt[1])
        //ctx.stroke()
    }
}

function getMidPoint(a,b){
    return [(b[0]-a[0])/2+a[0],(b[1]-a[1])/2+a[1]]
}