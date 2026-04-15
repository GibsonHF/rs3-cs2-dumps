//
function script12337(int0: component, int1: component, int2: component, int3: component, int4: unknown_int): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int0);
    var int5 = 0;
    var int6 = 0;
    var int7 = comp(-1, 65535);
    var int8 = 0;
    var int9 = 0;
    [int7, int8, int8, int9, int8] = script12343(33124 as struct, script12293(1734 as overlayinterface));
    CC_CREATE(int0, 4, int6++);
    CC_SETTEXTFONT(58 as fontmetrics);
    CC_SETTEXT("Tips");
    CC_SETPOSITION(0, int5, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETSIZE(0, script7593(CC_GETTEXT(), int9, CC_GETFONTMETRICS(), 0), 1, 0);
    CC_SETCOLOUR(script10495(0));
    int5 = (int5 + (CC_GETHEIGHT() + 8));
    var string0 = "- ";
    CC_CREATE(int0, 4, int6++);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXT(`${string0}You can switch between loot mode and drops mode. Drops are anything dropped by a monster. Loot only counts drops you picked up from the ground.`);
    CC_SETSIZE(0, script7593(CC_GETTEXT(), int9, CC_GETFONTMETRICS(), 0), 1, 0);
    CC_SETPOSITION(0, int5, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(script10495(3));
    int5 = (int5 + (CC_GETHEIGHT() + 8));
    CC_CREATE(int0, 4, int6++);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXT(`${string0}${script9465(15)}`);
    CC_SETSIZE(0, script7593(CC_GETTEXT(), int9, CC_GETFONTMETRICS(), 0), 1, 0);
    CC_SETPOSITION(0, int5, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(script10495(3));
    int5 = (int5 + (CC_GETHEIGHT() + 8));
    if ((IF_FIND(int1) == 1)) {
        CC_SETSIZE(0, int5, 1, 1);
    };
    var string1 = "";
    if ((IF_FIND(int2) == 1)) {
        string1 = script9465(14);
        CC_SETGRAPHIC(20645 as graphic);
        CC_SETSIZE(0, 404, 1, 0);
        if (((PLATFORMTYPE() == 0) || (PLATFORMTYPE() == 5))) {
            CC_SETOP(1, "Open link");
            CC_SETONOP(callback(script1149, -2147483645, -2147483643));
        };
    };
    if ((int3 != comp(-1, 65535))) {
        CC_DELETEALL(int3);
        script1147(int3);
    };
    return;
}