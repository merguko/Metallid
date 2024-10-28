const s=document.querySelector(".scon")
const sm=document.querySelector(".smcon")
const sra=document.querySelector(".sracon")
const sr=document.querySelector(".srcon")
const btn=document.querySelectorAll("btn")
const bs=document.querySelector(".sbtn")
const bsm=document.querySelector(".smbtn")
const bsra=document.querySelector(".srabtn")
const bsr=document.querySelector(".srbtn")
const ts=document.querySelector(".stex")
const tsm=document.querySelector(".smtex")
const tsra=document.querySelector(".sratex")
const tsr=document.querySelector(".srtex")
const t=document.querySelector(".tex")
const se=document.querySelector("section")

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        button.textContent = button.textContent === "+" ? "-" : "+";
    });
});

bs.addEventListener("click",function(){
    if(bs.textContent==="+"){
        s.style.display="block"
    }
    else{
        t.style.display="block"
    }
    if(bs.textContent==="-"){
        s.style.display="block"
        se.style.marginTop = "-244px";
    }
    else{
        t.style.display="none"
        se.style.marginTop = "-57px";
        tsra.style.display="none"
        bsra.textContent="+"
        tsr.style.display="none"
        bsr.textContent="+"
        tsm.style.display="none"
        bsm.textContent="+"
    }
})
bsm.addEventListener("click",function(){
    if(bsm.textContent==="+"){
        sm.style.display="block"
    }
    else{
        tsm.style.display="block"
    }
    if(bsm.textContent==="-"){
        sm.style.display="block"
        tsra.style.display="none"
        bsra.textContent="+"
        tsr.style.display="none"
        bsr.textContent="+"
        se.style.marginTop = "-423px";
    }
    else{
        tsm.style.display="none" 
        se.style.marginTop = "-244px";
    }
})
bsra.addEventListener("click",function(){
    if(bsra.textContent==="+"){
        sra.style.display="block"
    }
    else{
        tsra.style.display="block"
    }
    if(bsra.textContent==="-"){
        sra.style.display="block"
        se.style.marginTop = "-364px";
        tsm.style.display="none"
        bsm.textContent="+"
        tsr.style.display="none"
        bsr.textContent="+"
    }
    else{
        tsra.style.display="none"
        se.style.marginTop = "-244px";
    }
})
bsr.addEventListener("click",function(){
    if(bsr.textContent==="+"){
        sr.style.display="block"
    }
    else{
        tsr.style.display="block"
    }
    if(bsr.textContent==="-"){
        sr.style.display="block"
        se.style.marginTop = "-394px";
        tsra.style.display="none"
        bsra.textContent="+"
        tsm.style.display="none"
        bsm.textContent="+"
    }
    else{
        tsr.style.display="none"
        se.style.marginTop = "-244px";
    }
})