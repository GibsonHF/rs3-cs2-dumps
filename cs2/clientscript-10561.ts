//
function script10561(int0: component): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = -1 as obj;
    while ((int1 < 20)) {
        int3 = enum_getvalue(0, 33, 9199 as cs2enum, int1);
        int2 = (INV_TOTAL(93 as inv, int3) + INV_TOTAL(95 as inv, int3));
        if ((CC_FIND(int0, int1) == 1)) {
            if (((((int2 == 0) || (varbitplayer_24912 == int1)) || (varbitplayer_24913 == int1)) || (varbitplayer_24914 == int1))) {
                CC_SETTRANS(120);
            } else {
                CC_SETTRANS(0);
            };
        };
        int1 = (int1 + 1);
    };
    return;
}