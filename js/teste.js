const input = gets();

function fib ( input ) {
  
    var index = [0, 1];

    if (input > 0 && input < 46){
        //if (input == 1) {
        //    index = [0];
        //}
        if (input <= 2) {
            index = [0, 1];
        }
        else {
            for (var i = 2; i < input; i++) {
                index.push(index[index.length - 1] + index[index.length - 2]);
                //console.log(index);
            }
        }
    }
  
    //for (j = 0; j <= index.length; j++) {
    //    index[j] = String(index[j])    
    //}
  
    return index;
}

/*
const fib = n => {
  if (n == 2) {
    return [0, 1];
  } else {
    const s = fib ( input );
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
*/

const sequence = fib(input).join(" ");

console.log(sequence);