//
function script11261(int0: component, int1: unknown_int): void {
    var int2 = IF_GETWIDTH(int0);
    var int3 = IF_GETHEIGHT(int0);
    var int4 = struct_getparam(30963, 3484);
    var int5 = struct_getparam(30963, 3485);
    if ((int2 < int4)) {
        int2 = MIN((int2 + 6), int4);
    };
    if ((int3 < int5)) {
        int3 = MIN((int3 + 6), int5);
    };
    IF_SETSIZE(int2, int3, 0, 0, int0);
    if (((int2 == int4) && (int3 == int5))) {
        IF_SETONTIMER(callback(), int0);
    };
    return;
}