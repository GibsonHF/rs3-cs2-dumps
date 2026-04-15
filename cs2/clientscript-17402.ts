//
function script17402(int0: inv, int1: inv): long {
    if ((int0 == -1 as inv)) {
        return -1n;
    };
    var int2 = INV_TOTAL(int0, 54830 as obj);
    var int3 = INV_TOTAL(int0, 995 as obj);
    var long0 = ADD_LONG(MULTIPLY_LONG(1000000000n, INT_TO_LONG(int2)), INT_TO_LONG(int3));
    if ((int1 == -1 as inv)) {
        return long0;
    };
    return ADD_LONG(long0, INT_TO_LONG(INV_TOTAL(int1, 995 as obj)));
}