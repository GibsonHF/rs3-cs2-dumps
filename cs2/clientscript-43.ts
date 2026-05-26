//[clientscript,trail_reward_generation]
function script43(): void {
    var int0 = 0;
    var int1 = 0;
    var string0 = "";
    while ((int0 < INV_SIZE(141 as inv))) {
        CC_CREATE(comp(364, 1), 5, int0);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION((10 + (40 * int1)), 10, 0, 0);
        if ((INV_GETOBJ(141 as inv, int0) != -1 as obj)) {
            CC_SETOBJECT(INV_GETOBJ(141 as inv, int0), INV_GETNUM(141 as inv, int0));
            CC_SETOPBASE(`<col=ff9040>${OC_NAME(INV_GETOBJ(141 as inv, int0))}`);
            CC_SETOP(1, "Examine");
            CC_SETOUTLINE(1);
            CC_SETONMOUSEREPEAT(callback(script5495, INV_GETOBJ(141 as inv, int0)));
            CC_SETONMOUSELEAVE(callback(script9300, -2147483645, -2147483643));
        };
        int0 = (int0 + 1);
        int1 = (int1 + 1);
    };
    return;
}