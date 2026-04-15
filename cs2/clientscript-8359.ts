//
function script8359(int0: int, int1: int, int2: int): void {
    var int3 = script10405(int0);
    var int4 = struct_getparam(int3, 3510);
    var int5 = struct_getparam(int3, 3509);
    var int6 = struct_getparam(int3, 3508);
    var int7 = script8418(int3, 0);
    if ((((int4 == comp(-1, 65535)) || (int5 == comp(-1, 65535))) || (int6 == comp(-1, 65535)))) {
        return;
    };
    if ((struct_getparam(int7, 8296) == 2)) {
        IF_SETHIDE(true, int4);
        if ((int1 > 1)) {
            script8378(0, int0);
        } else {
            script8378(1, int0);
        };
        return;
    };
    var int8 = (int1 * struct_getparam(int7, 3578));
    var int9 = (int2 * struct_getparam(int7, 3578));
    var int10 = (int9 + struct_getparam(int7, 3578));
    var int11 = IF_GETSCROLLX(int5);
    if (((int8 > (IF_GETWIDTH(int6) - (2 * struct_getparam(int7, 3583)))) && (varbitplayer_38842 == 0))) {
        IF_SETHIDE(false, int4);
        IF_SETPOSITION((IF_GETX(int4) + struct_getparam(int7, 3581)), IF_GETY(int5), 0, 0, int5);
        IF_SETSIZE(((2 * struct_getparam(int7, 3581)) + (2 * IF_GETX(int4))), IF_GETHEIGHT(int5), 1, 0, int5);
        if ((int9 < int11)) {
            int11 = int9;
        } else if ((int10 > (int11 + IF_GETWIDTH(int5)))) {
            int11 = (int10 - IF_GETWIDTH(int5));
        };
        IF_SETSCROLLSIZE(int8, IF_GETHEIGHT(int5), int5);
        IF_SETSCROLLPOS(int11, 0, int5);
        script1846(int0);
    } else {
        IF_SETHIDE(true, int4);
        IF_SETPOSITION(struct_getparam(int7, 3583), IF_GETY(int5), 0, 0, int5);
        IF_SETSIZE((2 * struct_getparam(int7, 3583)), IF_GETHEIGHT(int5), 1, 0, int5);
        IF_SETSCROLLSIZE(0, 0, int5);
        IF_SETSCROLLPOS(0, 0, int5);
    };
    return;
}