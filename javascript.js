

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
    setTimeout("arrayTimer()",300);
  }
}

console.log(document.getElementById('ruby').style)