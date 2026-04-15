//
function script6729(int0: component, int1: component, int2: int): void {
    var int3 = -1 as struct;
    var int4 = -1 as struct;
    var int5 = -1 as struct;
    if ((CC_FIND(int0, int2) == 1)) {
        int3 = cc_getparam(4545);
        int4 = script9952(int3);
        if ((int4 != -1 as struct)) {
            CC_SETGRAPHIC(struct_getparam(int4, 3911));
        };
    };
    if (((int1 != comp(-1, 65535)) && (CC_FIND(int1, int2) == 1))) {
        int3 = cc_getparam(4545);
        int4 = script9952(int3);
        int5 = struct_getparam(int4, 4546);
        CC_SETTEXTFONT(struct_getparam(int5, 4536));
        CC_SETCOLOUR(struct_getparam(int5, 4537));
    };
    return;
}