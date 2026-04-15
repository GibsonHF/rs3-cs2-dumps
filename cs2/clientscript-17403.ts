//
function script17403(int0: unknown_int, int1: unknown_int): long {
    if ((int0 == -1)) {
        return -1n;
    };
    var int2 = INVOTHER_TOTAL(int0, 54830);
    var int3 = INVOTHER_TOTAL(int0, 995);
    var long0 = ADD_LONG(MULTIPLY_LONG(1000000000n, INT_TO_LONG(int2)), INT_TO_LONG(int3));
    if ((int1 == -1)) {
        return long0;
    };
    return ADD_LONG(long0, INT_TO_LONG(INVOTHER_TOTAL(int1, 995)));
}