//
function script3624(int0: number, int1: number, int2: number, int3: number, string0: string): void {
    if (((int0 < int3) || (int3 == -1))) {
        if ((int0 < int1)) {
            IF_SETONOP(callback(script3622, (int0 + 1), varplayer_9085, int1, int2, string0, int3), comp(634, 160));  // runepass:claim_button
        } else {
            IF_SETONOP(callback(script3626), comp(634, 160));  // runepass:claim_button
        };
        IF_SETONMOUSEREPEAT(callback(), comp(634, 160));  // runepass:claim_button
    } else {
        IF_SETONOP(callback(script8799, string0, -2147483645, -1), comp(634, 160));  // runepass:claim_button
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), comp(634, 160));  // runepass:claim_button
    };
    return;
}