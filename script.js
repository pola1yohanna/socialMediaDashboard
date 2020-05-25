function toggleTheme()
{

  let body=document.getElementsByTagName("body");
  let patterns= document.getElementsByClassName("pattern");
  let cards= document.getElementsByClassName("card");
  let chbox =  document.getElementById("chbox");
  if (chbox.checked)
  {
      console.log("anything");
    body[0].style.backgroundColor='hsl(230, 17%, 14%)';
    body[0].style.color='hsl(0, 0%, 100%)';
    [].forEach.call(patterns, function (pattern) {pattern.style.backgroundColor='hsl(232, 19%, 15%)'});
    [].forEach.call(cards,function(card){card.style.backgroundColor='hsl(228, 28%, 20%)'});
  }
  else {
    body[0].style.backgroundColor='hsl(0, 0%, 100%)';
    body[0].style.color='hsl(228, 12%, 44%)';
    [].forEach.call(patterns, function (pattern) {pattern.style.backgroundColor='hsl(225, 100%, 98%)'});
    [].forEach.call(cards,function(card){card.style.backgroundColor='hsl(227, 47%, 96%)'});
  }
}
