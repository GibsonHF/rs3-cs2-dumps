//
function script20329(int0: number, int1: number, int2: number, int3: number): void {
    if ((int0 == 1)) {
        CC_CLEAROPS();
        CC_SETONOP(callback());
        return;
    };
    var string0 = "Use this button to log in to your favourite world.";
    if ((int1 == 1)) {
        CC_SETOP(1, `Play on World ${inttostring(int2, 10)}`);
        CC_SETOP(2, "Remove");
        CC_SETONOP(callback(script3067, -2147483644, int3));
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1));
    } else {
        CC_CLEAROPS();
        CC_SETONOP(callback());
        CC_SETONMOUSEREPEAT(callback());
    };
    return;
}