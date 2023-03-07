let canva=document.getElementById("canv")

let my=canva.height;

let r_time=5000/canva.width;

const ctx=canva.getContext("2d");

//var gradient = ctx.createLinearGradient(0, 150, 100, 0.8);

let a=document.getElementById("myRange")

 

let inrange=document.getElementById("ranges")

inrange.oninput=()=>{

 

  canva.width=(2+6*inrange.value);

  setup()

}

class Block{

  constructor (x,y,w,h){

  this.x=x;this.y=y;this.w=w;this.h=h; 

  this.fill="black";

  this.lw=0.25;

  }

 

  draw(ctx){

    ctx.save(); 

    ctx.beginPath(); 

    ctx.rect(this.x,this.y,this.w,this.h)

    ctx.fillStyle=this.fill;

    ctx.shadowblur=30;

    ctx.strokeStyle="#40cc29";

    ctx.lineWidth=this.lw;

    ctx.fill()

   ctx.stroke()

   ctx.restore()

  }

}

let block=[]

let stack=[]

let k;

let y=0;

function setup(){

block=[]

stack=[]

y=0;

block.size=Math.floor(canva.width/3)+1

for(let i=0;i<block.size;i++){

  let h=Math.floor(Math.random()*(my-3));

  block[i]=new Block(i*3,my-h,2,h);

  block[i].draw(ctx)

}

stack.push([0,block.length-1])

}

setup()

function animate(){

 let n=stack.length-1;

 start()

 k=0

 helper(stack[n][0],stack[n][1])

}

let startflag=0;

but1.onclick=()=>{

  if(!startflag){

    startflag=1

    animate(); 

  }

 

}

//animate(); 

function last(){

  let ll=setInterval(anm,1); 

    function anm(){

      block[y].fill="yellow";

      block[y].draw(ctx)

      y++;

     if(y>=block.length)

     clearInterval(ll);

    }

    

}

let cn=0;

function helper(l,h){

  

  let time=setInterval(run,r_time); 

   but2.onclick=(e) => {

   startflag=0;

    clearInterval(time);

  }

  but3.onclick=(e) => {

    // console.log(777)

    canva.height=canva.height

    setup()

    startflag=0;

     clearInterval(time);

     return;

   }

   inrange.oninput=()=>{

 

    canva.width=10*inrange.value+5;

    clearInterval(time);

    setup()

    

  }

 // let time=requestAnimationFrame(run); 

  function run (){

    

    cn++;

    if(stack.length==0 || l>h){

      start()

      //cancelAnimationFrame(time);

      clearInterval(time)

      last();

     // console.log(cn)

      return;

     }

   if(h<block.length && block[k].h<=block[h].h)

  { 

    let a=block[k].h; 

    block[k].h=block[l].h; 

    block[k].y=my-block[k].h;

    block[l].h=a;

    block[l].y=my-block[l].h;

    block[l].fill="#ff1111"

    block[l].draw(ctx)

   l++;}

   k++;

   if(k>0&&k<block.length && block[k-1].fill=="red")

   block[k-1].fill="green";

   if(k<block.length){

   block[k].fill="red"

   block[k].draw(ctx);}

   canva.height=my;//window.innerHeight;

   for(let i=0;i<block.length;i++)

   block[i].draw(ctx);

    

 if(h<block.length && l<=h && k>=h) {

   

 let a=block[h].h; 

    block[h].h=block[l].h; 

    block[h].y=my-block[h].h;

    block[l].h=a;

    block[l].y=my-block[l].h; 

 let n=stack.length-1;

 if(n>=0){

  a=stack[n][0]

 let b=stack[n][1]

 stack.pop()

 if(b>l && b<block.length)

 stack.push([l,b])

 if(a<l-1 && a>=0)

 stack.push([a,l-1])

 if(block[h].fill=="red")

   block[h].fill="black";}

 

 n=stack.length-1;

 if(n>=0){

 k=stack[n][0]

 l=k; 

 h=stack[n][1]}

 //for(let i=0;i<block.length;i++)

 //block[i].draw(ctx);

 start() 

 }

// requestAnimationFrame(run);

}

}

function start(){

 let n=stack.length-1;

 for(let i=0;i<block.length;i++){

 block[i].lw=0.25;

 block[i].fill="#eeeeff"; }

 if(n>=0){

block[stack[n][1]].fill="black";

 block[stack[n][0]].fill="black";

 block[stack[n][1]].lw=0.3;

 block[stack[n][0]].lw=0.3;

 block[stack[n][1]].draw(ctx);

 block[stack[n][0]].draw(ctx)}

// for(let i=0;i<block.length;i++)

 //block[i].draw(ctx);

}

/*

function helper(l,h){

  let time=setInterval(run,0.6);

 // let time=requestAnimationFrame(run); 

  function run (){

   

    if(stack.length==0 || l>h){

      start()

      //cancelAnimationFrame(time);

      clearInterval(time)

      last();

      //console.log(cn)

      return;

     }

   if(h<block.length && block[k].h<=block[h].h)

  { 

    let a=block[k].h; 

    block[k].h=block[l].h; 

    block[k].y=my-block[k].h;

    block[l].h=a;

    block[l].y=my-block[l].h;

    block[l].fill="red"

    block[l].draw(ctx)

   l++;}

   k++;

   if(k>0&&k<block.length && block[k-1].fill=="red")

   block[k-1].fill="green";

   if(k<block.length){

   block[k].fill="red"

   block[k].draw(ctx);}

   canvas.height=900;//window.innerHeight;

   for(let i=0;i<block.length;i++)

   block[i].draw(ctx);

    

 if(h<block.length && l<=h && k>=h) {

   

 let a=block[h].h; 

    block[h].h=block[l].h; 

    block[h].y=my-block[h].h;

    block[l].h=a;

    block[l].y=my-block[l].h; 

 let n=stack.length-1;

 if(n>=0){

  a=stack[n][0]

 let b=stack[n][1]

 stack.pop()

 if(b>l && b<block.length)

 stack.push([l,b])

 if(a<l-1 && a>=0)

 stack.push([a,l-1])

 if(block[h].fill=="red")

   block[h].fill="black";}

 

 n=stack.length-1;

 if(n>=0){

 k=stack[n][0]

 l=k; 

 h=stack[n][1]}

 for(let i=0;i<block.length;i++)

 block[i].draw(ctx);

 start() 

 }

// requestAnimationFrame(run);

}

}

function start(){

 let n=stack.length-1;

 for(let i=0;i<block.length;i++)

 block[i].fill="#eeeeff"; 

 if(n>=0){

block[stack[n][1]].fill="black";

 block[stack[n][0]].fill="black";}

 for(let i=0;i<block.length;i++)

 block[i].draw(ctx);

}*/
