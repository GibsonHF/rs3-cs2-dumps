//
function script3624(int0: int, int1: int, int2: unknown_int, int3: int, string0: unknown_string): void {
    if (((int0 < int3) || (int3 == -1))) {
        if ((int0 < int1)) {
            IF_SETONOP(callback(script3622, (int0 + 1), varplayer_9085, int1, int2, string0, int3), 41549984);
        } else {
            IF_SETONOP(callback(script3626), comp(634, 160));
        };
        IF_SETONMOUSEREPEAT(callback(), comp(634, 160));
    } else {
        IF_SETONOP(callback(script8799, string0, -2147483645, -1), 41549984);
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 41549984);
    };
    return;
}