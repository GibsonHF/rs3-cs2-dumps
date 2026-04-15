//
function script8174(int0: int, int1: unknown_int): void {
    if ((script8874() == 0)) {
        script8306();
        return;
    };
    var int2 = script10405(int0);
    var int3 = struct_getparam(int2, 3503);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    int4 = IF_GETX(comp(1477, 754));
    int5 = IF_GETY(comp(1477, 754));
    [int8, int9] = script8175(int0, IF_GETWIDTH(comp(1477, 754)), IF_GETHEIGHT(comp(1477, 754)));
    [int6, int7] = script8140(int0, int8, int9);
    script8387(int4, int5, int6, int7, int0);
    script8731();
    script8305(int0);
    return;
}