//
function script12334(int0: component): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int0);
    CC_DELETEALL(comp(1737, 3));
    CC_DELETEALL(comp(1737, 4));
    CC_DELETEALL(comp(1737, 5));
    CC_DELETEALL(comp(1737, 6));
    var int1 = IF_GETLAYER(comp(1737, 5));
    if ((int1 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int1);
    var int2 = 0;
    var int3 = 0;
    var int4 = comp(-1, 65535);
    var int5 = 0;
    var int6 = 0;
    [int4, int5, int5, int6, int5] = script12343(33123 as struct, script12293(1737 as overlayinterface));
    CC_CREATE(int0, 4, int3++);
    CC_SETTEXTFONT(58 as fontmetrics);
    CC_SETTEXT("Settings");
    CC_SETPOSITION(0, int2, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETSIZE(0, script7593(CC_GETTEXT(), 1000, CC_GETFONTMETRICS(), 0), 1, 0);
    CC_SETCOLOUR(script10495(0));
    int2 = (int2 + (CC_GETHEIGHT() + 8));
    var int7 = 10872 as cs2enum;
    var int8 = ENUM_GETOUTPUTCOUNT(int7);
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int9 = 0;
    var int10 = false;
    int3 = 0;
    while ((int3 < int8)) {
        [string0, string1, int9, int10, string2] = script11839(int7, int3);
        [int2, int3] = script10419(comp(1737, 3), comp(1737, 4), 0, int2, int6, int3, string0, string1, string1, string2, int9, int10, 1, 41495 as struct);
        int2 = (int2 + 2);
    };
    if ((int3 > 0)) {
        int2 = (int2 - 2);
    };
    return;
}