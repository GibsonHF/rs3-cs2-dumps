//
function script14395(int0: inv, int1: obj): void {
    if ((int1 == -1 as obj)) {
        CC_CLEAROPS();
        CC_CLEARSCRIPTHOOKS();
    } else {
        script14420(int1);
        CC_SETOP(1, "Remove");
        CC_SETOP(10, "Examine");
        CC_SETONMOUSEREPEAT(callback(script14392, int1, int0, -2147483645, -2147483643));
        CC_SETONOP(callback(script14393, int0, -2147483645, -2147483643, -2147483644));
        CC_SETONDRAGCOMPLETE(callback(script14394, int0, -2147483645, -2147483643, -2147483642, -2147483641));
        CC_SETDRAGGABLE(33882391, 1);
    };
    return;
}