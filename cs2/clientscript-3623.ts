//
function script3623(int0: int, int1: int, int2: unknown_int, int3: int, string0: unknown_string): void {
    script3648(int0);
    script3645(int0, 0, 41549964, 41549965, comp(634, 145), comp(634, 147), comp(634, 143), comp(634, 144), 1, comp(634, 146), 1);
    IF_SETTEXT(`Task ${inttostring((int0 + 1), 10)}`, comp(634, 153));
    if (((dbrow_getfield(script3609(), 299472, 0) == 1) && ((int0 + 1) == 71))) {
        IF_SETTEXT("¶", comp(634, 164));
    } else {
        IF_SETTEXT(inttostring((int0 + 1), 10), comp(634, 164));
    };
    var int4 = ((int1 + 1) - varplayer_9085);
    if ((int4 == 1)) {
        IF_SETTEXT("Claim Rewards", comp(634, 152));
    } else {
        IF_SETTEXT(`Claim Rewards ${inttostring(((int0 + 1) - varplayer_9085), 10)}/${inttostring(int4, 10)}`, comp(634, 152));
    };
    script3624(int0, int1, int2, string0, int3);
    return;
}