
function func(str){
    //var str = 'gooG'
    //var str = 'wsdgss'
    var diff = 0;

    temp = str.toLowerCase();
    for (i = 0; i < Math.floor(temp.length/2); i++){
        if (temp[i] !== temp[temp.length-i-1])        
            diff = 1;
    }


    (diff ? console.log('NO') : console.log('YES') )

}

func('gooGdd')