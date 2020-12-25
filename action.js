function isdotted(){
    let input = document.getElementsByClassName('second')[0];
    let pos = input.innerHTML.length-1;
    while (pos > 0)
    {
        let ch = input.innerHTML.charAt(pos);
        if (ch == '.')
          return true;
        pos -=1;
    }
    return false;
}

document.addEventListener("DOMContentLoaded", function(){document.getElementsByClassName('second')[0].innerHTML = '0'});
function press(val){
    let notfirst = ['=', '/', '*', '\u2190'];
    let maybefirst = ['.', '+', '-'];
    let all = ['=', '/', '*', '\u2190', '+', '-'];
    let input = document.getElementsByClassName('second')[0];
    let input2 = document.getElementsByClassName('first')[0];
    switch(val){
        case '=':
            input.innerHTML = eval(input2.innerHTML+input.innerHTML);
            input2.innerHTML ='';
            break;
        case 'C':
            input.innerHTML = '';input2.innerHTML = ''; break;
        case '\u2190':
            if(input.innerHTML == '0'){
                input2.innerHTML = '';
            }
            input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1); break;
        case '.':
            if (all.indexOf(input.innerHTML.charAt(-1))!=-1){input.innerHTML += '0.'; break;}
            if(!isdotted()){
                input.innerHTML += val;
            }
            break;
        case '-':
        case '+':
        case '/':
        case '*':
            if(input.innerHTML == '0'){
                break;
            }
            if(all.indexOf(input2.innerHTML.substr(-1))!=-1 && input.innerHTML == '0'){
                input2.innerHTML = input2.innerHTML.substr(0, input.innerHTML.length-1) + val;
            }
            input2.innerHTML = eval(input2.innerHTML + input.innerHTML) + val;
            input.innerHTML = '';
            break;
        default:
            if (input.innerHTML == 'Infinity' || input.innerHTML == 'NaN')
            {
              break;
            }
            if (input.innerHTML == '0')
            {
                input.innerHTML = val;
            }
            else
            {
                input.innerHTML += val;
            }
        break;}
    if (input.innerHTML == ''){
        input.innerHTML = '0';
    }
}
