//
function script10741(): void {
    CC_DELETEALL(comp(1554, 20));  // elfcity_meilyr_maw_swap:build_area
    CC_DELETEALL(comp(1554, 21));  // elfcity_meilyr_maw_swap:click_area
    CC_DELETEALL(comp(1554, 22));  // elfcity_meilyr_maw_swap:highlight_area
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(9456 as cs2enum);
    var int2 = 0;
    var int3 = 0;
    var int4 = IF_GETWIDTH(comp(1554, 20));  // elfcity_meilyr_maw_swap:build_area
    var int5 = IF_GETHEIGHT(comp(1554, 20));  // elfcity_meilyr_maw_swap:build_area
    var int6 = -1 as obj;
    var int7 = 0;
    var string0 = "";
    var string1 = "";
    CC_CREATE(comp(1554, 22), 3, 0);  // elfcity_meilyr_maw_swap:highlight_area
    CC_SETFILL(0);
    CC_SETSIZE(40, 36, 0, 0);
    CC_SETCOLOUR(15777401);
    CC_SETHIDE(true);
    CC_CREATE(comp(1554, 22), 3, 1);  // elfcity_meilyr_maw_swap:highlight_area
    CC_SETFILL(0);
    CC_SETSIZE(40, 36, 0, 0);
    CC_SETCOLOUR(16777215);
    CC_SETHIDE(true);
    while ((int0 < int1)) {
        int6 = enum_getvalue(0, 33, 9456 as cs2enum, int0);
        if (((int2 + 43) > int4)) {
            [int2, int3] = [0, (int3 + 39)];
        };
        CC_CREATE(comp(1554, 21), 4, int0);  // elfcity_meilyr_maw_swap:click_area
        if ((int6 == -1 as obj)) {
            CC_SETPOSITION(0, 0, 0, 0);
            CC_SETSIZE(0, 0, 0, 0);
            CC_SETHIDE(true);
        } else {
            if (((int0 == varplayer_4903) && (CC_FIND[1](comp(1554, 22), 0) == 1))) {  // elfcity_meilyr_maw_swap:highlight_area
                CC_SETPOSITION[1](int2, int3, 0, 0);
                CC_SETHIDE[1](false);
            };
            string1 = OC_NAME(int6);
            int7 = item_getparam(int6, 4669);
            string0 = `Select ${string1}`;
            CC_SETPOSITION(int2, int3, 0, 0);
            CC_SETSIZE(40, 36, 0, 0);
            CC_SETOP(1, "Select");
            CC_SETONMOUSEOVER(callback(script9120, -2147483645, -2147483643));
            CC_SETONMOUSELEAVE(callback(script10738, -2147483645));
            CC_SETONMOUSEREPEAT(callback(script10740, -2147483645, -2147483643, string0));
            CC_SETONOP(callback(script7630, -2147483645, -2147483643));
            CC_CREATE(comp(1554, 20), 5, IF_GETNEXTSUBID(comp(1554, 20)));  // elfcity_meilyr_maw_swap:build_area
            CC_SETPOSITION(int2, int3, 0, 0);
            CC_SETSIZE(40, 36, 0, 0);
            CC_SETGRAPHIC(18266 as graphic);
            CC_CREATE(comp(1554, 20), 5, IF_GETNEXTSUBID(comp(1554, 20)));  // elfcity_meilyr_maw_swap:build_area
            CC_SETPOSITION((int2 + 2), (int3 + 2), 0, 0);
            CC_SETSIZE(36, 32, 0, 0);
            CC_SETOBJECT_NONUM(int6, 1);
            int2 = (int2 + 43);
        };
        int0 = (int0 + 1);
    };
    if (((int3 + 32) > int5)) {
        IF_SETSCROLLSIZE(0, (int3 + 32), comp(1554, 21));  // elfcity_meilyr_maw_swap:click_area
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1554, 21));  // elfcity_meilyr_maw_swap:click_area
    };
    script31(101842967, 101842965, -1, -1, -1, -1, -1, -1);
    return;
}