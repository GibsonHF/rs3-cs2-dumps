//
function script455(int0: int, int1: int, int2: int): void {
    var string0 = "";
    var string1 = "";
    var int3 = 3720 as cs2enum;
    CC_SETGRAPHIC(enum_getvalue(0, 23, 3712 as cs2enum, int1));
    if ((script6431() == true)) {
        var int0 = (int0 + ((27 / 2) - (CC_GETHEIGHT() / 2)));
    } else {
        int0 = (int0 + 3);
    };
    CC_SETPOSITION(CC_GETX(), int0, 0, 0);
    string0 = `Rank: ${enum_getvalue(0, 36, 3715 as cs2enum, int1)}`;
    if ((int2 > 0)) {
        switch (MAP_LANG()) {
            case 1: {
                int3 = 3727 as cs2enum;
                break;
            }
            case 2: {
                int3 = 3728 as cs2enum;
                break;
            }
            case 3: {
                int3 = 3729 as cs2enum;
                break;
            }
            case 6: {
                int3 = 7498 as cs2enum;
                break;
            }
        };
        string1 = enum_getvalue(0, 36, int3, int2);
        string0 = `${string0}<br>Title: ${string1}`;
    };
    if ((script6431() == false)) {
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    } else {
        CC_SETONCLICK(callback(script7774, string0, -2147483645, -2147483643, 0));
    };
    CC_SETHIDE(false);
    return;
}