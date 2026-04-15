//
function script11394(int0: obj, int1: int, int2: unknown_int): void {
    CC_SETOBJECT_NONUM(int0, 1);
    if (((varplayer_5406 - 1) == int1)) {
        CC_SETOUTLINE(2);
    };
    CC_SETONMOUSEREPEAT(callback(script9564, int0, -2147483645, -2147483643));
    CC_SETOP(1, "Select");
    if ((int2 == 1)) {
        CC_SETOP(2, "Withdraw");
    } else if ((int2 == 2)) {
        CC_SETOP(2, "Deposit");
    } else {
        CC_SETOP(2, "");
    };
    CC_SETOP(10, "Examine");
    CC_SETONOP(callback(script11397, int1, -2147483644));
    script14420(int0);
    cc_setparam(7540, 0);
    cc_setparam(7541, int0);
    return;
}