//[clientscript,inventory_init]
function script1613(int0: component, int1: unknown_int): void {
    if ((int1 == 1)) {
        varclient_1031 = 0;
        IF_SETONVARTRANSMIT(callback(script1613, -2147483645, 0, 1293, 1), int0);
    };
    var int2 = INV_SIZE(93 as inv);
    var int3 = ((int2 * 2) - 1);
    var int4 = 0;
    var int5 = script6431();
    while ((int4 <= int3)) {
        if ((CC_FIND(int0, int4) == 0)) {
            CC_CREATE(int0, 5, int4);
            CC_SETSIZE(36, 32, 0, 0);
            if ((int4 < int2)) {
                CC_SETONTARGETENTER(callback(script1615, 1, -2147483645, -2147483643));
                stack(1615);
                stack(0);
                stack(-2147483645);
                stack(-2147483643);
                stack("iii");
                CC_SETONTARGETLEAVE();
                CC_SETDRAGRENDERBEHAVIOUR(2);
                if ((int5 == 0)) {
                    CC_SETDRAGDEADZONE(5);
                    CC_SETDRAGDEADTIME(5);
                } else {
                    CC_SETDRAGDEADZONE(20);
                    CC_SETDRAGDEADTIME(5);
                };
                CC_SETONDRAGCOMPLETE(callback(script1616, -2147483645, -2147483643, -2147483642, -2147483641));
                CC_SETONOP(callback(script1620, -2147483645, -2147483643, 100, 0, 8));
            } else {
                CC_SETCOLOUR(0);
                CC_SETTRANS(255);
                CC_SETHIDE(false);
            };
        };
        int4 = (int4 + 1);
    };
    var int6 = (int2 / 4);
    var int7 = ((IF_GETWIDTH(int0) - (4 * 36)) / 3);
    var int8 = ((IF_GETHEIGHT(int0) - (int6 * 32)) / 6);
    var int9 = -1 as obj;
    int3 = (varclient_1031 - 1);
    int4 = 0;
    while ((int4 < int2)) {
        if ((CC_FIND(int0, int4) == 1)) {
            CC_CLEAROPS();
            CC_SETPOSITION((MODULO(int4, 4) * (36 + int7)), ((int4 / 4) * (32 + int8)), 0, 0);
            int9 = INV_GETOBJ(93 as inv, int4);
            if ((int9 != -1 as obj)) {
                CC_SETHIDE(false);
                CC_SETOBJECT(int9, INV_GETNUM(93 as inv, int4));
                if ((int4 == int3)) {
                    CC_SETOUTLINE(2);
                } else {
                    CC_SETOUTLINE(1);
                };
                script2833(int9, 1, int4, -1);
                CC_SETDRAGGABLE(int0, -1);
                CC_SETONMOUSEREPEAT(callback(script12093, int9, 93, int4));
                CC_SETONMOUSELEAVE(callback(script5495, -1));
            } else {
                CC_SETHIDE(true);
                CC_SETONVARTRANSMIT(callback());
                CC_SETOBJECT(-1, 0);
                CC_SETOUTLINE(1);
                if ((int4 == int3)) {
                    varclient_1031 = 0;
                };
            };
        };
        int4 = (int4 + 1);
    };
    int4 = 0;
    while ((int4 < int2)) {
        if ((CC_FIND(int0, (int2 + int4)) == 1)) {
            CC_SETPOSITION((MODULO(int4, 4) * (36 + int7)), ((int4 / 4) * (32 + int8)), 0, 0);
        };
        int4 = (int4 + 1);
    };
    return;
}