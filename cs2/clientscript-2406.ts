//
function script2406(int0: number, int1: number): void {
    var int2 = comp(936, 11);  // rand_inspect_stats:skilltotal
    var int3 = comp(936, 12);  // rand_inspect_stats:combat_level
    if ((CC_FIND(int2, 1) == 1)) {
        CC_SETTEXT(inttostring(int0, 10));
    };
    if ((CC_FIND(int3, 1) == 1)) {
        CC_SETTEXT(inttostring(int1, 10));
    };
    return;
}