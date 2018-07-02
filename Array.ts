/*
 *jion()
 /
const Array = ['a','b','c'];
last week i write:
//
  for (let i = 0; i < Array.length; i++) {
        if (i < Array.length - 1) {
          let forwardData = Array[i] + '~~';
          reqsetup.postdata += forwarddata;
        } else {
          let backwardData = Array[i];
          reqsetup.postdata += backwarddata;
     };
  };
 console.log(reqset.postdata);//'a~~b~~c'
//
but now:
console.log(Array.join('~~')); // 'a~~b~~c' ^_^


