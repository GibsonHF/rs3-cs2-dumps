//
function script723(int0: component, int1: struct, int2: int, int3: int): void {
    if ((int1 == -1 as struct)) {
        return;
    };
    var int4 = struct_getparam(int1, 4405);
    if ((int4 != -1 as struct)) {
        var int1 = int4;
    };
    var int5 = script9984(int1, int2);
    if (((int1 == -1 as struct) || (int5 == -1 as struct))) {
        return;
    };
    var int6 = struct_getparam(int5, 3808);
    var int7 = struct_getparam(int5, 3807);
    if ((CC_FIND(int0, int3) == 1)) {
        CC_SETSIZE(int6, int7, 0, 0);
        CC_SETGRAPHIC(struct_getparam(int5, 3909));
        CC_SETCOLOUR(struct_getparam(int5, 7448));
        script11628(int1, int2, int3, int3, 0, -1, -1);
    };
    return;
}