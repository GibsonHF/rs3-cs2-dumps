//
function script11410(int0: obj, int1: int): void {
    if ((int0 != -1 as obj)) {
        CC_SETOBJECT(int0, int1);
        CC_SETOP(1, `Take ${script4033(int0)}${OC_NAME(int0)}`);
        CC_SETONMOUSEREPEAT(callback(script5495, int0));
        CC_SETONMOUSELEAVE(callback(script5495, -1));
        CC_SETOP(2, `Examine ${script4033(int0)}${OC_NAME(int0)}`);
    } else {
        CC_SETOBJECT(-1 as obj, 0);
        CC_SETONOP(callback());
        CC_SETONMOUSEREPEAT(callback());
        CC_SETONMOUSELEAVE(callback());
    };
    return;
}