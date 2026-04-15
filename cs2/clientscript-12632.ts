//
function script12632(int0: component, int1: int): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    var int10 = 0;
    if (((CC_FIND(int0, int1) == 1) || ((int1 == -1) && (IF_FIND(int0) == 1)))) {
        int2 = IF_GETWIDTH(CC_GETPARENTLAYER());
        int3 = IF_GETHEIGHT(CC_GETPARENTLAYER());
        [int4, int5, int8, int9] = script12633(int2, int3);
        script12634(int8, int9);
        script12635(int4, int5, int8, int9, int2, int3);
        [int6, int7, int8, int9] = script12636(int4, int5, int8, int9);
        script12637(int6, int7, int8, int9);
        int10 = script12638();
        script12639();
        script12640();
        script12720(int10);
    };
    return;
}