//[clientscript,stats_skilltotal]
function script544(int0: number, int1: number): void {
    var int2 = script4708();
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETTEXT(`Total level: ${inttostring(int2, 10)}`);
    };
    return;
}