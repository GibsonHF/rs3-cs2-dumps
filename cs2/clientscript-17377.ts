//
function script17377(long0: long, long1: long): long {
    if (branch_eq_long[4](long0, 0n)) {
        return 0n;
    };
    var long2 = DIVIDE_LONG(9223372036854775807n, long0);
    if (branch_lt_long[14](long2, long1)) {
        return 9223372036854775807n;
    };
    return MULTIPLY_LONG(long0, long1);
}