
function findMax(str) {
    var strObj = {};
    for (var i = 0; i < str.length; i++) {
        var letter = str.charAt(i);
        if (strObj[letter]) {
            strObj[letter]++
        } else {
            strObj[letter] = 1;
        }
    };
    console.log(strObj);

    var maxnum = 0;
    var maxletter;
    for (var i in strObj) {
        if (strObj[i] > maxnum) {//不管有多少个出现次数同样的字母，查出结果为出现的第一个字母;
            maxnum = strObj[i];
            maxletter = i;
        }
    };
    //最大数已出现，查询是否有同样次数的字母
    var sameletter = [];
    for (var i in strObj) {
        if (strObj[i] === maxnum) {
            sameletter.push(i);
        }
    };
    if (sameletter.length > 1) {
        console.log('maxARR:' + sameletter + ',showtimes:' + maxnum);
    } else {
        console.log('maxletter:`' + maxletter + '`,showtimes:' + maxnum);
    };
    strObj = null;
    maxletter = null;
    sameletter = null;

}


findMax('asdddushnkjfns');
