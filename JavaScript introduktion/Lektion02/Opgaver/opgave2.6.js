let kode = 'function test() {let arr = [1,2, (3+4)]; return arr; }';

function erBalanceret(str) {
    let stack = [];
    let parentesMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of str) {
        //Venstre paranteser
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char)
        }
        //højere parantes -> se stakken
        else if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0) {
                return false;
            }


            let top = stack.pop(); //Fjern det sidste element i stakken
            if (parentesMap[top] !== char) {
                return false;
            }
        }
    }


    return stack.length === 0;

}

console.log(erBalanceret(kode)); // true

console.log(erBalanceret("([)]")); // false
console.log(erBalanceret("((()))")); // true
console.log(erBalanceret("{ [ ( ) ] }")); // true
console.log(erBalanceret("{ [ ( ] ) }")); // false