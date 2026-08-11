//
function script1386(int0: number, int1: number, int2: number): void {
    if ((CC_FIND(comp(936, 5), int0) == 1)) {  // rand_inspect_stats:stat
        CC_SETTEXT(inttostring(int1, 10));
    };
    if ((CC_FIND(comp(936, 6), int0) == 1)) {  // rand_inspect_stats:stat_base
        CC_SETTEXT(inttostring(int2, 10));
    };
    return;
}