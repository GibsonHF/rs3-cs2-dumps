//
function script4509(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int): void {
    if ((int2 == -1)) {
        return;
    };
    if ((int3 == -1)) {
        var int3 = int2;
    };
    var int8 = -1;
    var int9 = -1;
    while ((CC_FIND(int0, ++int8) == 1)) {
        int9 = cc_getparam(7188);
        if (((((int9 != -1) && (cc_getparam(7192) == 1)) && (int9 >= int2)) && (int9 <= int3))) {
            script4511(int0, int8, int1, int9, int4, int5, int6, int7);
            var int4 = script7140(int4);
        };
    };
    return;
}