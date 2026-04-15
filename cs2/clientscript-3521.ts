//
function script3521(): void {
    IF_SETTEXT(inttostring(varbitplayer_23015, 10), comp(1790, 59));
    IF_SETOPBASE(`${script4033(29492 as obj)}Tradable Bonds`, comp(1790, 58));
    IF_SETTEXT(inttostring(varbitplayer_23016, 10), comp(1790, 62));
    IF_SETOPBASE(`${script4033(29494 as obj)}Untradable Bonds`, comp(1790, 61));
    var int0 = 0;
    var int1 = -1 as obj;
    var int2 = 0;
    var int3 = 0;
    while ((int0 < 8)) {
        int2 = (MODULO(int0, 2) * 55);
        int3 = ((int0 / 2) * 63);
        CC_CREATE(comp(1790, 54), 5, int0);
        CC_SETSIZE(40, 40, 0, 0);
        CC_SETPOSITION((int2 + 7), int3, 0, 0);
        CC_SETGRAPHIC(26557 as graphic);
        int1 = INV_GETOBJ(795 as inv, int0);
        if ((int1 != -1 as obj)) {
            CC_CREATE(comp(1790, 55), 5, int0);
            CC_SETSIZE(38, 38, 0, 0);
            CC_SETPOSITION((int2 + 8), (int3 + 1), 0, 0);
            CC_SETOBJECT(int1, -1);
            script12410(int1);
            CC_SETONOP(callback(script1620, -2147483645, -2147483643, 100, 0, 8));
            script14992(int1, 795, int0);
            CC_CREATE(117309496, 4, int0);
            CC_SETSIZE(55, 11, 0, 0);
            if ((int2 == 0)) {
                CC_SETPOSITION(0, (int3 + 44), 0, 0);
            } else {
                CC_SETPOSITION(0, (int3 + 44), 2, 0);
            };
            CC_SETTEXTFONT(29 as fontmetrics);
            CC_SETTEXTALIGN(1, 2, 0);
            CC_SETTEXTSHADOW(true);
            CC_SETCOLOUR(script10495(3));
            CC_SETTEXT(script11601(INV_GETNUM(795 as inv, int0), 1));
            CC_SETONVARTRANSMIT(callback(script6719, -2147483645, -2147483643, 0, 3814, 1));
        };
        int0 = (int0 + 1);
    };
    return;
}