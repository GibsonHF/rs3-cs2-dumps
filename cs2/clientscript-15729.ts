//
function script15729(int0: number): void {
    CC_DELETEALL(comp(828, 6));  // mobile_shop_hard_currency:packages
    CC_DELETEALL(comp(828, 7));  // mobile_shop_hard_currency:scrollbar
    CC_DELETEALL(comp(828, 5));  // mobile_shop_hard_currency:right_build_panel
    IF_SETSIZE(IF_GETWIDTH(comp(828, 7) /*mobile_shop_hard_currency:scrollbar*/), -8, 1, 1, comp(828, 6) /*mobile_shop_hard_currency:packages*/);
    var int1 = 0;
    SHOP_GETINDEXFORCATEGORYID(int0);
    var int2 = [];
    stack(int2);
    var int3 = SHOP_GETPRODUCTCOUNT();
    var int4 = 0;
    if ((script15728(int0) == 0)) {
        while ((int1 < int3)) {
            stack(int4);
            stack(int2);
            stack(int1);
            int1 = (int1 + 1);
            int4 = ADD(script15731());
        };
    };
    if ((int4 == 0)) {
        script2995(54263813, IF_GETNEXTSUBID(comp(828, 5)), 0, 0, 0, 0, IF_GETWIDTH(comp(828, 5)), IF_GETHEIGHT(comp(828, 5)), 0, 0, 2099, "No packages available.");  // mobile_shop_hard_currency:right_build_panel
        CC_SETTEXTALIGN(1, 1, 15);
    };
    IF_SETSCROLLPOS(0, 0, comp(828, 6));  // mobile_shop_hard_currency:packages
    var int5 = script5276(int4, 3);
    var int6 = ((int5 * 176) + ((int5 + 1) * 8));
    if ((int6 > IF_GETHEIGHT(comp(828, 6)))) {  // mobile_shop_hard_currency:packages
        IF_SETSCROLLSIZE(0, int6, comp(828, 6));  // mobile_shop_hard_currency:packages
        script7791(54263815, 54263814);
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(828, 6));  // mobile_shop_hard_currency:packages
        IF_SETSIZE(IF_GETWIDTH(comp(828, 7) /*mobile_shop_hard_currency:scrollbar*/), int6, 1, 0, comp(828, 6) /*mobile_shop_hard_currency:packages*/);
    };
    return;
}