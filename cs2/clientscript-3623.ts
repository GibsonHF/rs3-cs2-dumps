//
function script3623(int0: number, int1: number, int2: number, int3: number, string0: string): void {
    script3648(int0);
    script3645(int0, 0, 41549964, 41549965, 41549969, 41549971, 41549967, 41549968, 1, 41549970, 1);
    IF_SETTEXT(`Task ${inttostring((int0 + 1), 10)}`, comp(634, 153));  // runepass:reward_task_title
    if ((dbrow_getfield(script3609(), 299472, 0) == 1)) {
        if (((int0 + 1) == 71)) {
            IF_SETTEXT("¶", comp(634, 164));  // runepass:task_num_claim
        } else {
            IF_SETTEXT(inttostring((int0 + 1), 10), comp(634, 164));  // runepass:task_num_claim
        };
    } else {
        IF_SETTEXT(inttostring((int0 + 1), 10), comp(634, 164));  // runepass:task_num_claim
    };
    var int4 = ((int1 + 1) - varplayer_9085);
    if ((int4 == 1)) {
        IF_SETTEXT("Claim Rewards", comp(634, 152));  // runepass:reward_title
    } else {
        IF_SETTEXT(`Claim Rewards ${inttostring(((int0 + 1) - varplayer_9085), 10)}/${inttostring(int4, 10)}`, comp(634, 152));  // runepass:reward_title
    };
    script3624(int0, int1, int2, string0, int3);
    return;
}