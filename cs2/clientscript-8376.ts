//
function script8376(int0: number, int1: number): number {
    var int2 = script10405(int0);
    if ((int2 == -1)) {
        return 0;
    };
    var int3 = script8418(int2, 0);
    if ((int3 == -1)) {
        return 0;
    };
    var int4 = struct_getparam(int2, 3509);
    var int5 = struct_getparam(int3, 3578);
    return (((int1 * int5) + int5) - IF_GETSCROLLX(int4));
}