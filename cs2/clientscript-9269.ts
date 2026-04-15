//
function script9269(int0: component, int1: component, int2: int, int3: unknown_int): void {
    if (((int0 == comp(-1, 65535)) || (int1 != comp(107, 7)))) {
        return;
    };
    if (((int2 < 0) || (int2 >= INV_SIZE(93 as inv)))) {
        return;
    };
    if ((varplayer_138 == -1)) {
        return;
    };
    var int4 = 0;
    if ((int0 == comp(105, 358))) {
        int4 = 0;
    } else if ((int0 == comp(105, 360))) {
        int4 = 1;
    } else {
        return;
    };
    var int5 = varplayer_138;
    script9270(int0, varplayer_138, int4, int1, int2, int3);
    if ((((IF_GETINVOBJECT(comp(105, 358)) == -1 as obj) && (IF_GETINVOBJECT(comp(105, 360)) == -1 as obj)) && ((STOCKMARKET_ISOFFEREMPTY(varplayer_138, 0) == 1) || (STOCKMARKET_ISOFFERFINISHED(varplayer_138, 0) == 1)))) {
        script9261();
        if ((enum_getvalue(0, 9, 1073 as cs2enum, int5) != comp(-1, 65535))) {
            CC_DELETEALL(enum_getvalue(0, 9, 1073 as cs2enum, int5));
        };
        if ((enum_getvalue(0, 9, 1076 as cs2enum, int5) != comp(-1, 65535))) {
            IF_SETHIDE(false, enum_getvalue(0, 9, 1076 as cs2enum, int5));
        };
    };
    return;
}