//
function script3521(): void {
    IF_SETTEXT(inttostring(varbitplayer_23015, 10), comp(1790, 59));  // currency:mtx_tradebond_text
    IF_SETOPBASE(`${script4033(29492)}Tradable Bonds`, comp(1790, 58));  // currency:bonds_tradeable_icon
    IF_SETTEXT(inttostring(varbitplayer_23016, 10), comp(1790, 62));  // currency:mtx_untradebond_text
    IF_SETOPBASE(`${script4033(29494)}Untradable Bonds`, comp(1790, 61));  // currency:bonds_untradeable_icon
    var int0 = 0;
    var int1 = 0;
    var int2 = -1 as obj;
    var int3 = 0;
    var int4 = 0;
    while ((int0 < 8)) {
        int2 = INV_GETOBJ(795 as inv, int0);
        if (((int2 != -1 as obj) && (script20672(int2) == 1))) {
            int3 = (MODULO(int1, 2) * 55);
            int4 = ((int1 / 2) * 63);
            CC_CREATE(comp(1790, 54), 5, int0);  // currency:mtx_invslot_layer
            CC_SETSIZE(40, 40, 0, 0);
            CC_SETPOSITION((int3 + 7), int4, 0, 0);
            CC_SETGRAPHIC(26557 as graphic);
            CC_CREATE(comp(1790, 55), 5, int0);  // currency:mtx_obj_layer
            CC_SETSIZE(38, 38, 0, 0);
            CC_SETPOSITION((int3 + 8), (int4 + 1), 0, 0);
            CC_SETOBJECT(int2, -1);
            script12410(int2);
            CC_SETONOP(callback(script1620, -2147483645, -2147483643, 100, 0, 8));
            script14992(int2, 795, int0);
            CC_CREATE(comp(1790, 56), 4, int0);  // currency:mtx_text_layer
            CC_SETSIZE(55, 11, 0, 0);
            if ((int3 == 0)) {
                CC_SETPOSITION(0, (int4 + 44), 0, 0);
            } else {
                CC_SETPOSITION(0, (int4 + 44), 2, 0);
            };
            CC_SETTEXTFONT(29 as fontmetrics);
            CC_SETTEXTALIGN(1, 2, 0);
            CC_SETTEXTSHADOW(true);
            CC_SETCOLOUR(script10495(3));
            CC_SETTEXT(script11601(INV_GETNUM(795 as inv, int0), 1));
            CC_SETONVARTRANSMIT(callback(script6719, -2147483645, -2147483643, 0, 3814, 1));
            int1 = (int1 + 1);
        };
        int0 = (int0 + 1);
    };
    return;
}