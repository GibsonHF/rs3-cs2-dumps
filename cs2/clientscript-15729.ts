//
function script15729(int0: int): void {
    CC_DELETEALL(comp(828, 6));
    CC_DELETEALL(comp(828, 7));
    CC_DELETEALL(comp(828, 5));
    IF_SETSIZE(IF_GETWIDTH(comp(828, 7)), -8, 1, 1, comp(828, 6));
    var int1 = 0;
    SHOP_GETINDEXFORCATEGORYID(int0);
    var int2 = stack();
    stack(int2);
    var int3 = SHOP_GETPRODUCTCOUNT();
    var int4 = 0;
    if ((script15728(int0) == 0)) {
        while ((int1 < int3)) {
            int4 = (int4 + script15731(int2, int1++));
        };
    };
    if ((int4 == 0)) {
        script2995(comp(828, 5), IF_GETNEXTSUBID(comp(828, 5)), 0, 0, 0, 0, IF_GETWIDTH(comp(828, 5)), IF_GETHEIGHT(comp(828, 5)), 0, 0, 2099 as dbrow, "No packages available.");
        CC_SETTEXTALIGN(1, 1, 15);
    };
    IF_SETSCROLLPOS(0, 0, comp(828, 6));
    var int5 = script5276(int4, 3);
    var int6 = ((int5 * 176) + ((int5 + 1) * 8));
    if ((int6 > IF_GETHEIGHT(comp(828, 6)))) {
        IF_SETSCROLLSIZE(0, int6, comp(828, 6));
        script7791(comp(828, 7), comp(828, 6));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(828, 6));
        IF_SETSIZE(IF_GETWIDTH(comp(828, 7)), int6, 1, 0, comp(828, 6));
    };
    return;
}