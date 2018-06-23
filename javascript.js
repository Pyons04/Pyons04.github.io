
//ruby Hiroki_Sueda.rbのアニメーション始
array = new Array('C\:>','C\:>|','C\:>','C\:>r|','C\:>ru|','C\:>rub|', 'C\:>ruby|','C\:>ruby |','C\:>ruby H|','C\:>ruby Hi|','C\:>ruby Hir|','C\:>ruby Hiro', 'C\:>ruby Hirok|','C\:>ruby Hiroki|', 'C\:>ruby Hiroki','C\:>ruby Hiroki|','C\:>ruby Hiroki_|','C\:>ruby Hiroki_S|','C\:>ruby Hiroki_Su|','C\:>ruby Hiroki_Sue|','C\:>ruby Hiroki_Sued|','C\:>ruby Hiroki_Sueda|','C\:>ruby Hiroki_Sueda.|','C\:>ruby Hiroki_Sueda.r|','C\:>ruby Hiroki_Sueda.rb|','C\:>ruby Hiroki_Sueda.rb','C\:>ruby Hiroki_Sueda.rb|'); 

count = -1; 
arrayTimer();

function arrayTimer() {
  count++; 

  document.getElementById('choice').textContent = array[count]; //*5


  if (count == array.length){
    document.getElementById('choice').textContent = 'C\:>ruby Hiroki_Sueda.rb';
  }
  else{
    setTimeout("arrayTimer()",170);
  }
}
//ruby Hiroki_Sueda.rbのアニメーション終


//portfoliosのpull downのdescription始
function pulldown(){
          console.log('clicked!');
          var save   = document.getElementById('portfolio1').innerHTML;
          document.getElementById('portfolio1').innerHTML = document.getElementById('portfolio1_active').innerHTML;
      }

var action = document.getElementById('readmore');

action.addEventListener('click', pulldown, false);
//portfoliosのpull downのdescription終

//portfolios3のpull downのdescription始
function pulldown3(){
          console.log('clicked!');
          var save   = document.getElementById('portfolio3').innerHTML;
          document.getElementById('portfolio3').innerHTML = document.getElementById('portfolio3_active').innerHTML;
      }

var action = document.getElementById('readmore3');

action.addEventListener('click', pulldown3, false);
//portfolios3のpull downのdescription終

//portfolios4のpull downのdescription始
function pulldown4(){
          console.log('clicked!');
          var save   = document.getElementById('portfolio4').innerHTML;
          document.getElementById('portfolio4').innerHTML = document.getElementById('portfolio4_active').innerHTML;
      }

var action = document.getElementById('readmore4');

action.addEventListener('click', pulldown4, false);
//portfolios4のpull downのdescription終

//言語のスキルレベルがアニメーションで動く仕組み始
function filling(){
          console.log('ruby clicked!');
      }

var action = document.getElementById('ruby');

action.addEventListener('click', filling, false);
//言語のスキルレベルがアニメーションで動く仕組み終