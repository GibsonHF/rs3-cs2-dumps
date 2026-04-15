//
function script14710(int0: component, int1: component, int2: int, int3: int, int4: int, int5: graphic, string0: string, string1: unknown_string): void {
    if ((int5 != -1 as graphic)) {
        CC_SETGRAPHIC(int5);
        CC_SETPOSITION((int3 + 2), (int4 + 2), 0, 0);
        CC_SETOP(1, string0);
        script9241(int0, int1, 0);
        cc_setparam(7540, 2);
        CC_SETONMOUSEREPEAT(callback(script3876, string1, int0, int2));
        script5823(int0);
    } else {
        CC_CLEAROPS();
        CC_SETOPBASE("");
        CC_SETONDRAGCOMPLETE(callback());
        CC_SETONMOUSEREPEAT(callback());
        CC_SETONMOUSELEAVE(callback());
        if ((script13749() == 0)) {
            CC_SETDRAGDEADZONE(5);
            CC_SETDRAGDEADTIME(5);
        } else {
            CC_SETDRAGDEADZONE(20);
            CC_SETDRAGDEADTIME(5);
        };
        CC_SETGRAPHIC(-1 as graphic);
    };
    return;
}