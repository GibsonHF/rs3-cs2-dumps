//
function script18485(int0: dbrow, int1: unknown_int, int2: unknown_int, int3: component, int4: int, int5: int): void {
    var string0 = script18486(int0);
    if ((CC_FINDBYCATEGORY(int3, int4, int5) == 1)) {
        CC_SETONMOUSEREPEAT(callback(script3876, string0, int1, int2));
    };
    return;
}