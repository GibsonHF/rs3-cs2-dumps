//
function script19195(int0: boolean, int1: int, int2: obj, int3: int): void {
    var string0 = "";
    var int4 = item_getparam(int2, 4414);
    if ((int0 == false)) {
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
    if ((script6431() == true)) {
        CC_SETONOP(callback(script7774, string0, -2147483645, -2147483643, 0));
        CC_SETOP(1, "Info");
    } else if ((((int0 == false) && (item_getparam(int2, 4414) != -1 as struct)) && (item_getparam(int2, 2531) != 4))) {
        script14994(-1 as obj, -1 as inv, -1, int2, 819 as inv, 1);
    } else {
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    };
    return;
}