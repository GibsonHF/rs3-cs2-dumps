//
function script11998(int0: struct, int1: component): void {
    var int2 = 2;
    var int3 = 0;
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = 0;
    var int7 = 0;
    if ((int1 == struct_getparam(int0, 8131))) {
        int4 = struct_getparam(int0, 8135);
        int5 = struct_getparam(int0, 8134);
        int6 = IF_GETWIDTH(int5);
        int7 = SCALE(50, 100, 110);
        script11999(int5, int4, int1, 0);
        int2 = 0;
    } else if ((int1 == struct_getparam(int0, 8136))) {
        int4 = struct_getparam(int0, 8140);
        int5 = struct_getparam(int0, 8139);
        int6 = IF_GETWIDTH(int5);
        int7 = SCALE(50, 100, 110);
        if ((++int6 >= (int7 * 2))) {
            IF_SETTEXT("Quick Prayers Setup", int5);
        } else if ((int6 >= int7)) {
            IF_SETTEXT("QP Setup", int5);
        } else {
            IF_SETTEXT("", int5);
        };
    } else {
        return;
    };
    if ((int0 == 37671 as struct)) {
        int2 = (int2 + 10);
    };
    if ((int6 < int7)) {
        IF_SETPOSITION(0, 0, 1, 1, int4);
    } else {
        IF_SETPOSITION((int2 + int3), 0, 0, 1, int4);
        int3 = (int3 + IF_GETWIDTH(int4));
        if ((IF_FIND(int5) == 1)) {
            CC_SETPOSITION((int3 + int2), 0, 0, 1);
            CC_SETSIZE((int3 + (int2 * 2)), 0, 1, 1);
        };
    };
    return;
}