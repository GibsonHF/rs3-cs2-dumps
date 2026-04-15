//
function script11469(int0: unknown_int, long0: long): long {
    if ((int0 == 0)) {
        return MAX_LONG(100n, SCALE_LONG(long0, 1000n, 1n));
    };
    return MAX_LONG(100n, SCALE_LONG(long0, 1000n, 10n));
}