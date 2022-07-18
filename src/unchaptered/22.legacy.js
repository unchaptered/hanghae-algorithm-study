const testMap=new Map();
testMap.set("zero",0);
testMap.set("one",1);
testMap.set("two",2);
testMap.set("three",3);
testMap.set("four",4);
testMap.set("five",5);
testMap.set("six",6);
testMap.set("seven",7);
testMap.set("eight",8);
testMap.set("nine",9);

function solution(text) {
    let result="";
    let tmpText="";
    for (const word of text) {
        if (isNaN(word)) {
            tmpText+=word;
        } else {
            result+=word;
        }

        if (testMap.has(tmpText)) {
            result+=testMap.get(tmpText);
            tmpText="";
        }
    }

    return +result;
}