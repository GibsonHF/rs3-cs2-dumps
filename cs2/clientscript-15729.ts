//
function script15729(int0: number): void {
    CC_DELETEALL(54263814);
    CC_DELETEALL(54263815);
    CC_DELETEALL(54263813);
    IF_SETSIZE(IF_GETWIDTH(54263815), -8, 1, 1, 54263814);
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
        script2995(54263813, IF_GETNEXTSUBID(54263813), 0, 0, 0, 0, IF_GETWIDTH(54263813), IF_GETHEIGHT(54263813), 0, 0, 2099, "No packages available.");
        CC_SETTEXTALIGN(1, 1, 15);
    };
    IF_SETSCROLLPOS(0, 0, 54263814);
    var int5 = script5276(int4, 3);
    var int6 = ((int5 * 176) + ((int5 + 1) * 8));
    if ((int6 > IF_GETHEIGHT(54263814))) {
        IF_SETSCROLLSIZE(0, int6, 54263814);
        script7791(54263815, 54263814);
    } else {
        IF_SETSCROLLSIZE(0, 0, 54263814);
        IF_SETSIZE(IF_GETWIDTH(54263815), int6, 1, 0, 54263814);
    };
    return;
}