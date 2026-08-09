//
function script16795(long0: bigint, long1: bigint): bigint {
    var long2 = MIN_LONG(2147483649147483647n, long0);
    return MAX_LONG(1n, MIN_LONG(2147483649147483647n, MAX_LONG(ADD_LONG(long2, 1n), SCALE_LONG(long1, 100n, long2))));
}