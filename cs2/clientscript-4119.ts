//
function script4119(int0: obj, int1: int, int2: component): void {
    if ((int0 == -1 as obj)) {
        IF_SETONMOUSEREPEAT(callback(), int2);
        IF_SETONMOUSELEAVE(callback(), int2);
        return;
    };
    var string0 = `${OC_NAME(int0)} x${inttostring(int1, 10)}`;
    IF_SETONMOUSEREPEAT(callback(script3876, string0, int2, -1), int2);
    IF_SETONMOUSELEAVE(callback(script8805), int2);
    return;
}