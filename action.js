var tl = new TimelineMax({delay:0.5, repeat:-1, repeatDelay:3});


tl.from(".button", 0.3, {scaleX:2,scaleY:2,rotation:180,ease:Bounce.easeOut, autoAlpha:0})
  .from(".kranten", 0.5, {left:500,autoAlpha:0},"-=0.5")
  .from(".button",1, {left:50,repeat:2,repeatDelay:2});
