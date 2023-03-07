var canva =document.getElementById("canv")

//let name=document.getElementById("aa")

//name.style.backgroundColor="black";

canva.width=800;

let inrange=document.getElementById("ranges")

inrange.oninput=()=>{

 

  canva.width=11*inrange.value+5;

  setup()

}

//canvas.height=500;

let ctx=canva.getContext('2d');

let ch=canva.height;

let r_time=20000/canva.width;

class Block{

  constructor (x,y,w,h){

  this.x=x;this.y=y;this.w=w;this.h=h; 

  this.fill="black"

  }

  draw(ctx){

    ctx.save(); 

    ctx.beginPath(); 

    ctx.rect(this.x,this.y,this.w,this.h)

    ctx.fillStyle=this.fill;

    ctx.strokeStyle="green"

    ctx.lineWidth=0.4;

    ctx.fill()

   ctx.stroke()

   ctx.restore()

  }

}

let block=[]

let ar=[]

let stack=[]

let cn=0;

let z=0;

let g=0;

let y=0;

function setup(){

block=[]

ar=[]

stack=[]

 cn=0;

 z=0;

g=0;

block.size=Math.floor(canva.width/5.02)+1;

for(let i=0;i<block.size;i++){

  let h=Math.floor(Math.random()*ch);

  block[i]=new Block(i*5,ch-h,4,h);

  block[i].draw(ctx)

}

ar.length=block.length;

function put(l,h){  

  if(l>=h) return; 

  let p=Math.floor((l+h)/2); 

  put(l,p); put(p+1,h); 

  stack.push([l,p,h]);

}

y=0;

put(0,block.length-1); 

}

setup()

let startflag=0;

let but1=document.getElementById("but1");

let but2=document.getElementById("but2");

let but3=document.getElementById("but3");

but1.onclick=()=>{

  if(!startflag){

    startflag=1

    animate(); 

  }

 

}

function animate(){

 

 start()

 helper(stack[z][0],stack[z][1],stack[z][2])

}

function helper(l,p,h){

  let j=l,k=p+1;

    let v=[];  

    while (j<=p) 

    v.push(block[j].h),j++;

    let u=[]

    while (k<=h) 

    u.push(block[k].h),k++;

    j=0,k=0;

    let w=[]

    while(j<v.length && k<u.length)   {

      if(v[j]<=u[k])

      w.push(v[j]),ar[l+w.length-1]=l+j,j++;

      else

      w.push(u[k]),ar[l+w.length-1]=p+1+k,k++;

    }

    while(j<v.length)

    w.push(v[j]),ar[l+w.length-1]=l+j,j++; 

    while(k<u.length)

    w.push(u[k]),ar[l+w.length-1]=p+1+k,k++;

     let n=0;

     

  let time=setInterval(run,r_time); 

   but2.onclick=(e) => {

   // console.log(777)

   startflag=0;

  // start()

    clearInterval(time);

    

    

  }

  but3.onclick=(e) => {

    // console.log(777)

    canva.height=ch

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

  function run (){  

    cn++;

    if(z>=stack.length){   

      start()

      clearInterval(time)

      last();

      return;

     }

    else{

    block[l+n].h=w[n]; 

    block[l+n].y=ch-block[l+n].h;

    block[l+n].fill="blue"

    block[ar[l+n]].fill="red"; 

    n++;

   canva.height=ch;//window.innerHeight;

   for(let i=0;i<block.length;i++)

   block[i].draw(ctx);

    

 if(n>=w.length) {

 z++;

 if(z<stack.length){

 j=stack[z][0]

 p=stack[z][1]

 k=stack[z][2]

 l=j,h=k,k=p+1

 n=0;

 w.length=0

 v.length=0

 u.length=0

    while (j<=p) 

    v.push(block[j].h),j++;

    while (k<=h) 

    u.push(block[k].h),k++;

    j=0,k=0;

    

    while(j<v.length && k<u.length) {

      if(v[j]<=u[k])

      w.push(v[j]),ar[l+w.length-1]=l+j,j++;

      else

      w.push(u[k]),ar[l+w.length-1]=p+1+k,k++;

    }

    while(j<v.length)

    w.push(v[j]),ar[l+w.length-1]=l+j,j++; 

    while(k<u.length)

    w.push(u[k]),ar[l+w.length-1]=p+1+k,k++;

}

 for(let i=0;i<block.length;i++)

 block[i].draw(ctx);

 start() 

 }

}

}}

function last(){

  

  let ll=setInterval(anm,5); 

    function anm(){

      block[y].fill="yellow";

      block[y].draw(ctx)

      y++;

   // console.log(block[y].h)

    if(y>=block.length){

    clearInterval(ll)         

    console.log(block)

    }

    }

    //console.log("yay")

}

function start(){

 let n=stack.length-1;

 for(let i=0;i<block.length;i++)

 block[i].fill="white"; 

 if(z<stack.length){

 block[stack[z][0]].fill="black";

 block[stack[z][2]].fill="black";}

 for(let i=0;i<block.length;i++)

 block[i].draw(ctx);

}

//let but2
