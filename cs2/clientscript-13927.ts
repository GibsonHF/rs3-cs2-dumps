//
function script13927(int0: int): void {
    if ((varplayer_6168 == -1 as struct)) {
        return;
    };
    var int1 = struct_getparam(varplayer_6168, 5689);
    if ((int1 == -1 as cs2enum)) {
        int1 = enum_getvalue(0, 26, struct_getparam(varplayer_6168, 5688), int0);
    };
    var int2 = 0;
    var int3 = -1 as graphic;
    var int4 = struct_getparam(varplayer_6168, 5694);
    while ((int2 < 25)) {
        int3 = enum_getvalue(0, 23, int1, script13932(int2));
        if ((CC_FIND(comp(1931, 18), int2) == 1)) {
            CC_SETGRAPHIC(int3);
            if ((int3 == -1 as graphic)) {
                CC_CLEAROPS();
            } else {
                CC_SETOP(1, "Move");
            };
        };
        int3 = enum_getvalue(0, 23, int1, int2);
        if ((CC_FIND(comp(1931, 19), int2) == 1)) {
            CC_SETGRAPHIC(int3);
        };
        int2 = (int2 + 1);
    };
    return;
}