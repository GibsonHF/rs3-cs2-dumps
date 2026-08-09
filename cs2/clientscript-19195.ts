//
function script19195(int0: number, int1: number, int2: number, int3: number): void {
    var string0 = "";
    var int4 = item_getparam(int2, 4414);
    if ((int0 == 0)) {
        if ((int4 != -1 as struct)) {
            string0 = `At character level ${inttostring(int1, 10)} you'll unlock: ${script19200(int4)}.`;
        } else {
            string0 = `At character level ${inttostring(int1, 10)} you'll unlock: ${inttostring(int3, 10)} x ${OC_NAME(int2)}.`;
        };
    } else if ((int4 != -1 as struct)) {
        string0 = `At character level ${inttostring(int1, 10)} you unlocked: ${script19200(int4)}.`;
    } else {
        string0 = `At character level ${inttostring(int1, 10)} you unlocked: ${inttostring(int3, 10)} x ${OC_NAME(int2)}.`;
    };
    if ((script6431() == 1)) {
        CC_SETONOP(callback(script7774, string0, -2147483645, -2147483643, 0));
        CC_SETOP(1, "Info");
    } else if ((int0 == 0)) {
        if ((item_getparam(int2, 4414) != -1 as struct)) {
            if ((item_getparam(int2, 2531) != 4)) {
                script14994(-1, -1, -1, int2, 819, 1);
            } else {
                CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
            };
        } else {
            CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        };
    } else {
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    };
    return;
}