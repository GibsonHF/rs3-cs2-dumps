//
function script13652(int0: component, int1: int, int2: unknown_int, int3: unknown_int): void {
    var int4 = 0;
    switch (int3) {
        case 41091: {
            return;
        }
        case 41090: {
            int4 = 15;
            break;
        }
        case 41089: {
            int4 = 10;
            break;
        }
    };
    IF_SETONVARTRANSMIT(callback(script13653, 7255, 1), int0);
    var int5 = (int1 * int2);
    var int6 = (IF_GETHEIGHT(int0) / int2);
    var int7 = (IF_GETWIDTH(int0) / int1);
    var int8 = 0;
    var string0 = "";
    var int9 = IF_GETNEXTSUBID(int0);
    while ((int4 < int5)) {
        CC_CREATE(int0, 5, int9);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION(((int7 * MODULO(int4, int1)) + 2), ((int6 * (int4 / int1)) + 2), 0, 0);
        if ((int4 >= 15)) {
            string0 = `You need to manufacture the tier 3 gizmo bag at an inventors workbench to unlock this slot.<br>${inttostring(item_getparam(41091, 2645), 10)} Invention required.`;
            CC_SETGRAPHIC(31778 as graphic);
        } else if ((int4 >= 10)) {
            string0 = `You need to manufacture the tier 2 gizmo bag at an inventors workbench to unlock this slot.<br>${inttostring(item_getparam(41090, 2645), 10)} Invention required.`;
            CC_SETGRAPHIC(31779 as graphic);
        };
        CC_SETONMOUSEREPEAT(callback(script3876, string0, int0, int9));
        int4 = (int4 + 1);
        int9 = (int9 + 1);
    };
    return;
}