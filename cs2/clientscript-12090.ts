//
function script12090(int0: obj, int1: int, int2: unknown_int, int3: int): void {
    CC_CLEAROPS();
    if ((int0 != -1 as obj)) {
        CC_SETOBJECT(int0, int1);
        script2833(int0, 1, int3, -1);
        CC_SETONDRAG(callback(script9226, 93, -2147483645, -2147483643));
        CC_SETONDRAGCOMPLETE(callback(script1616, -2147483645, -2147483643, -2147483642, -2147483641));
        CC_SETONOP(callback(script1620, -2147483645, -2147483643, 100, 0, 8));
        CC_SETONMOUSEREPEAT(callback(script18403, int0, int2, -2147483645, int3));
        CC_SETONMOUSELEAVE(callback(script18404, -2147483645, int3));
        CC_SETDRAGRENDERBEHAVIOUR(2);
        if ((script6431() == 0)) {
            CC_SETDRAGDEADZONE(5);
            CC_SETDRAGDEADTIME(5);
        } else {
            CC_SETDRAGDEADZONE(20);
            CC_SETDRAGDEADTIME(5);
        };
    } else {
        CC_SETOBJECT(-1 as obj, 0);
        CC_SETONDRAGCOMPLETE(callback());
        CC_SETONOP(callback());
        CC_SETONMOUSEREPEAT(callback());
        CC_SETONMOUSELEAVE(callback());
        CC_SETTARGETVERB("");
        CC_SETOPBASE("");
        CC_SETDRAGRENDERBEHAVIOUR(3);
        CC_SETDRAGDEADZONE(10000);
        CC_SETDRAGDEADTIME(10000);
    };
    return;
}