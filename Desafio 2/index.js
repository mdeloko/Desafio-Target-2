const str = String(process.argv[2]);
let timesTheLetterAppeared = 0;
const vec = str.split("");

function countLetters(vec){
    for(const letter in vec){
        if(vec[letter] == 'a'||vec[letter] == 'A'){
            timesTheLetterAppeared++;
        }
    }
    return timesTheLetterAppeared;
}

function doesStringHaveLetterA(){
    if(timesTheLetterAppeared==0){
        return false;
    }
    return true;
}

console.log("A string passada foi:",str);
countLetters(vec);
if(doesStringHaveLetterA()){
    console.log("E possui",timesTheLetterAppeared,"letras \"A\"");
}else{
    console.log("E não possui letras \"A\"");
}