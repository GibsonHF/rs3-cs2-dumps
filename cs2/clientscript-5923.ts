//
function script5923(int0: int, int1: int, int2: int): void {
    varbitplayer_43348 = 0;
    var int3 = -1 as struct;
    var int4 = comp(-1, 65535);
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    while ((++int9 < 3)) {
        switch (int9) {
            case 0: {
                int3 = enum_getvalue(0, 73, 812 as cs2enum, int0);
                int4 = comp(19, 2);
                int5 = 1245187;
                break;
            }
            case 1: {
                int3 = enum_getvalue(0, 73, 812 as cs2enum, int1);
                int4 = comp(19, 7);
                int5 = 1245192;
                break;
            }
            case 2: {
                int3 = enum_getvalue(0, 73, 812 as cs2enum, int2);
                int4 = comp(19, 9);
                int5 = 1245194;
                break;
            }
        };
        IF_SETMODEL(struct_getparam(int3, 696), int4);
        if ((int3 == 507 as struct)) {
            IF_SETRETEX(1, 10918 as material, 10919 as material, int4);
            IF_SETRECOL(1, 31792, 9044, int4);
            IF_SETMODELZOOM(570, int4);
        } else {
            IF_SETRETEX(1, 10919 as material, 10918 as material, int4);
            IF_SETRECOL(1, 9044, 31792, int4);
            IF_SETMODELZOOM(600, int4);
        };
        IF_SETMODELANIM(struct_getparam(int3, 845), int4);
        IF_SETONMOUSEOVER(callback(script5926, int4, struct_getparam(int3, 846), struct_getparam(int3, 694)), int5);
        IF_SETONMOUSELEAVE(callback(script5932, int4, struct_getparam(int3, 845)), int5);
    };
    return;
}