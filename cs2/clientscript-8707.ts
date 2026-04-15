//
function script8707(int0: int): void {
    var int1 = struct_getparam(script10405(int0), 3503);
    if ((int1 == comp(-1, 65535))) {
        return;
    };
    var int2 = IF_GETWIDTH(int1);
    var int3 = IF_GETHEIGHT(int1);
    var int4 = IF_GETX(int1);
    var int5 = IF_GETY(int1);
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    if ((script8137(int0) == 1)) {
        [int7, int8] = script8138(int0);
        int7 = MAX(0, int7);
        int8 = MAX(0, int8);
    } else if ((struct_getparam(script10405(int0), 3509) != comp(-1, 65535))) {
        int6 = script8372(struct_getparam(script10405(int0), 3509), int0);
        int7 = script8371(struct_getparam(script10405(int0), 3509), (int6 - 1));
        int8 = script8371(struct_getparam(script10405(int0), 3509), (int6 + 1));
    };
    var int9 = 0;
    if ((IF_GETHIDE(int1) == false)) {
        int9 = 1;
    };
    var int10 = IF_GETTRANS(int1);
    script8709(9, int0, int4, int5, int2, int3, int7, int8, int9, int10);
    return;
}