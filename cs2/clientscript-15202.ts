//
function script15202(int0: number): void {
    CC_DELETEALL(comp(622, 16));  // lunarfm_remotefarm:table_buildlayer
    CC_DELETEALL(comp(622, 17));  // lunarfm_remotefarm:patchstate_buildlayer
    CC_DELETEALL(comp(622, 18));  // lunarfm_remotefarm:curebtn_buildlayer
    CC_DELETEALL(comp(622, 19));  // lunarfm_remotefarm:curebtn_clicklayer
    CC_DELETEALL(comp(622, 20));  // lunarfm_remotefarm:fertilisebtn_buildlayer
    CC_DELETEALL(comp(622, 21));  // lunarfm_remotefarm:fertilisebtn_clicklayer
    CC_DELETEALL(comp(622, 13));  // lunarfm_remotefarm:divider_layer
    var int1 = 0;
    var int2 = 0;
    var int3 = 2;
    var int4 = 13;
    var int5 = 0;
    var int6 = 5;
    var int7 = 50;
    var int8 = 10;
    var int9 = 3;
    var int10 = 37;
    var int11 = -1;
    var int12 = enum_getvalue(0, 26, 16004 as cs2enum, int0);
    var int13 = ENUM_GETOUTPUTCOUNT(int12);
    var string0 = enum_getvalue(0, 36, 16003 as cs2enum, int0);
    if ((int0 == 5)) {
        string0 = "Herblore Habitat";
    };
    IF_SETTEXT(string0, comp(622, 15));  // lunarfm_remotefarm:category_title
    while ((int1 < int13)) {
        int2 = enum_getvalue(0, 0, int12, int1);
        CC_CREATE(comp(622, 16), 4, int1);  // lunarfm_remotefarm:table_buildlayer
        CC_SETPOSITION(int6, (int3 + int4), 0, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        CC_SETCOLOUR(script10495(3));
        CC_SETTEXTALIGN(0, 1, 13);
        CC_SETSIZE(int7, int8, 0, 0);
        CC_SETTEXT(enum_getvalue(0, 36, 3682, int2));
        CC_CREATE(comp(622, 17), 4, int1);  // lunarfm_remotefarm:patchstate_buildlayer
        CC_SETPOSITION(int9, (int3 + int4), 0, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTALIGN(0, 1, 13);
        CC_SETSIZE(int7, int8, 0, 0);
        CC_SETTEXT("Loading...");
        CC_CREATE(comp(622, 13), 3, IF_GETNEXTSUBID(comp(622, 13)));  // lunarfm_remotefarm:divider_layer
        CC_SETSIZE(IF_GETWIDTH(comp(622, 13)), int10, 0, 0);  // lunarfm_remotefarm:divider_layer
        CC_SETPOSITION(0, int3, 0, 0);
        CC_SETFILL(1);
        if ((MODULO(int1, 2) == 0)) {
            CC_SETCOLOUR(script10495(12));
        } else {
            CC_SETCOLOUR(script10495(9));
        };
        int3 = (int3 + int10);
        int1 = (int1 + 1);
    };
    IF_SETSCROLLSIZE(0, int3, comp(622, 12));  // lunarfm_remotefarm:table_scroll_layer
    script7791(40763406, 40763404);
    return;
}