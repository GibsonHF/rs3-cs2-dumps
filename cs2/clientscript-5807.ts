//
function script5807(int0: int, int1: int): void {
    var int2 = (BITCOUNT(int1) - 1);
    var int3 = -1;
    var int4 = comp(-1, 65535);
    var int5 = enum_getvalue(0, 73, 12533 as cs2enum, int0);
    while ((++int3 <= 1)) {
        int4 = script14452(int2, int3);
        if ((int4 == comp(-1, 65535))) {
            return;
        };
        if ((IF_FIND(int4) == 1)) {
            CC_CREATE(int4, 5, IF_GETNEXTSUBID(int4));
            CC_SETPOSITION(0, 0, 0, 0);
            CC_SETSIZE(28, 28, 0, 0);
            CC_SETGRAPHIC(struct_getparam(int5, 6504));
            script3537(script13633(int0));
            CC_SENDTOFRONT();
        };
    };
    return;
}