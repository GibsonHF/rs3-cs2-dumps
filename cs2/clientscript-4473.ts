//
function script4473(int0: int, int1: dbrow, int2: obj, int3: int): void {
    CC_SETOP(1, "Select");
    CC_SETONOP(callback(script16499, int1, int0));
    CC_SETOPCURSOR(1, 46);
    CC_SETONMOUSEREPEAT(callback(script3876, OC_NAME(int2), -2147483645, -2147483643));
    return;
}