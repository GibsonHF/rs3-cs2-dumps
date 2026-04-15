//
function script17536(int0: dbrow): [unknown_int, string] {
    var int1 = 1;
    var string0 = "";
    var int2 = script17507(int0);
    if ((varbitplayer_53833 < int2)) {
        string0 = `You need a ${script17498(int2)} site for this ritual.`;
        int1 = 0;
    };
    return [int1, string0];
}