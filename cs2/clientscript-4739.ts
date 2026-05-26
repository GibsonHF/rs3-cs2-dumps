//
function script4739(int0: number, int1: number, int2: number): void {
    var int3 = 0;
    var int4 = -1;
    var int5 = -1 as inv;
    if ((varbitplayer_3079 != 0)) {
        int5 = enum_getvalue(0, 39, 3879 as cs2enum, varbitplayer_3079);
        if (((int2 == 1) && (CC_FIND(74973184, int1) == 1))) {
            int4 = INV_GETOBJ(int5, int1);
            if ((int4 != -1)) {
                varbitplayer_3080 = int1;
                script4741();
            };
        };
    };
    return;
}