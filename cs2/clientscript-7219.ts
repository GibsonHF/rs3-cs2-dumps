//
function script7219(): void {
    var int0 = 0;
    var int1 = enum_getvalue(0, 33, 15296 as cs2enum, varbitplayer_44490);
    var int2 = 0;
    if ((script6681(int1) == 1)) {
        int0 = 1;
    } else {
        int0 = script6681(item_getparam(int1, 2655));
        if ((int0 == 0)) {
            int0 = script6681(item_getparam(int1, 2656));
        };
        if ((int0 == 0)) {
            int0 = script6681(item_getparam(int1, 2657));
        };
    };
    int2 = script1208((varbitplayer_44490 + 1));
    script7220(int1, int0, int2);
    return;
}