//
function script8316(int0: int, int1: unknown_int): void {
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
    [int4, int5, int6, int7] = script8379(IF_GETX(int3), IF_GETY(int3), IF_GETWIDTH(int3), IF_GETHEIGHT(int3), int0, int1, 1);
    script8387(int4, int5, int6, int7, int0);
    script8731();
    script9690(int0);
    script8305(int0);
    return;
}