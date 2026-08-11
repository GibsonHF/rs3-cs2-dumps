//
function script6078(int0: number, int1: number, int2: number): void {
    if ((CC_FIND(comp(78, 6), int0) == 1)) {  // group_inspect_stats:stat
        CC_SETTEXT(inttostring(int1, 10));
    };
    if ((CC_FIND(comp(78, 7), int0) == 1)) {  // group_inspect_stats:stat_base
        CC_SETTEXT(inttostring(int2, 10));
    };
    return;
}