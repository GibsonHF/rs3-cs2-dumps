//
function script20702(): void {
    var int0 = comp(184, 8);
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1 as obj;
    var string0 = "";
    CC_DELETEALL(int0);
    if (((varplayer_12695 != -1 as cs2enum) && (varplayer_12696 != -1 as inv))) {
        int1 = ENUM_GETOUTPUTCOUNT(varplayer_12695);
        while ((int2 < int1)) {
            int4 = (41 * MODULO(int2, 5));
            int5 = (37 * (int2 / 5));
            int7 = enum_getvalue(0, 33, varplayer_12695, int2);
            int3 = INV_TOTAL(varplayer_12696, OC_CERT(int7));
            CC_CREATE(int0, 5, int6++);
            CC_SETSIZE(40, 36, 0, 0);
            CC_SETPOSITION(int4, int5, 0, 0);
            CC_SETGRAPHIC(18266 as graphic);
            CC_SETOUTLINE(1);
            CC_CREATE(int0, 5, int6++);
            CC_SETPOSITION((int4 + 3), (int5 + 3), 0, 0);
            CC_SETSIZE(36, 32, 0, 0);
            if ((int3 > 0)) {
                CC_SETOBJECT_ALWAYSNUM(int7, int3);
                CC_SETTRANS(0);
                CC_SETOP(1, "Withdraw");
                CC_SETOP(2, "Withdraw-all");
            } else {
                CC_SETOBJECT(int7, int3);
                CC_SETTRANS(175);
            };
            CC_SETOP(10, "Examine");
            string0 = OC_NAME(int7);
            CC_SETOPBASE(`<col=FF981F>${string0}`);
            CC_SETONMOUSEREPEAT(callback(script5495, int7));
            CC_SETONMOUSELEAVE(callback(script5495, -1));
            int2 = (int2 + 1);
        };
        IF_SETONINVTRANSMIT(callback(script20702, varplayer_12696, 1), int0);
    };
    script20704();
    IF_SETONVARTRANSMIT(callback(script20703, 8606, 1), comp(184, 15));
    return;
}