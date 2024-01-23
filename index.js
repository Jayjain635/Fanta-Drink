//timeline is used bcoz we want to do animation one-by one
//scrub is used so that whenever we go back to initial position elements are back to there initial position 

var tl = gsap.timeline({scrollTrigger:{
   trigger:".two",
   start:"0% 95%",
   end:"50% 50%",
   scrub:true,
//    markers:true
}})
tl.to("#fanta",{
    top:"120%",
    left:"0%"
},'orange'),

tl.to("#orange",{
    width : "15%",
    top: "165%",
    right:"1%"
},'orange')

tl.to("#orange-cut",{
    top:"160%",
    left: "23%"
}, 'orange')

tl.to("#leaf2",{
    top:"110%",
    left:"3%"
}, 'orange')

tl.to("#leaf",{
    top:"100%",
    rotate: "130deg",
    left: "80%"
}, 'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"20% 50%",
    scrub:true,
    markers:false
 }})
 tl2.to("#fanta",{
    top:"215%",
    left:"33%",
    width:"35%"
 },'ca')
 tl2.to("#orange-cut",{
    top:"205%",
    left:"40.5%",
    width:"20%"
 }, 'ca')
 
tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')

 tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#pepsi",{
   rotate: "90deg",
   left: "100%",
   top: "110%"
}, 'ca')