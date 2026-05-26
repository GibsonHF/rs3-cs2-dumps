//
function script18320(): void {
    var int0 = INV_SIZE(952);
    var int1 = 0;
    var int2 = 8;
    var int3 = 0;
    var int4 = -1;
    while ((int1 < int0)) {
        int4 = INV_GETOBJ(952, int1);
        CC_CREATE(83165189, 5, int1);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION(int2, int3, 0, 1);
        int2 = ((int2 + 36) + 8);
        if ((int4 != -1)) {
            CC_SETOBJECT(int4, INV_GETNUM(952, int1));
            CC_SETOPBASE(`<col=ff9040>${OC_NAME(int4)}`);
            CC_SETOP(1, "Examine");
            CC_SETOUTLINE(1);
            cc_setparam(4009, int4);
            CC_SETONMOUSEREPEAT(callback(script5495, int4));
            CC_SETONMOUSELEAVE(callback(script9300, -2147483645, -2147483643));
        };
        int1 = (int1 + 1);
    };
    return;
}