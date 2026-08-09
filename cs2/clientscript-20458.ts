//
function script20458(long0: bigint, long1: bigint): bigint {
    return MAX_LONG(1n, MIN_LONG(SUB_LONG(long0, 1n), SCALE_LONG(long1, 100n, long0)));
}