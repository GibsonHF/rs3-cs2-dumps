//
function script4739(int0: unknown_int, int1: int, int2: unknown_int): void {
    var int3 = 0;
    var int4 = -1 as obj;
    var int5 = -1 as inv;
    if ((varbitplayer_3079 != 0)) {
        int5 = enum_getvalue(0, 39, 3879 as cs2enum, varbitplayer_3079);
        if (((int2 == 1) && (CC_FIND(comp(1144, 0), int1) == 1))) {
            int4 = INV_GETOBJ(int5, int1);
            if ((int4 != -1 as obj)) {
                varbitplayer_3080 = int1;
                script4741();
            };
        };
    };
    return;
}