//
function script18995(): void {
    var int0 = 5;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var string0 = "";
    IF_SETHIDE(true, comp(1870, 14));
    IF_SETHIDE(true, comp(1870, 0));
    IF_SETHIDE(false, comp(1870, 15));
    var int5 = 28;
    var int6 = ((IF_GETWIDTH(comp(1870, 25)) - ((5 * int5) + ((5 - 1) * int0))) / 2);
    var int7 = 0;
    var int8 = int6;
    var int9 = int7;
    var int10 = 0;
    while ((int10 < ENUM_GETOUTPUTCOUNT(12584 as cs2enum))) {
        [int2, int3, int4, string0] = script13381(int10);
        CC_CREATE(comp(1870, 25), 3, IF_GETNEXTSUBID(comp(1870, 25)));
        CC_SETCOLOUR(464928);
        CC_SETFILL(1);
        CC_SETSIZE((IF_GETWIDTH(comp(1870, 25)) - int6), (int5 / 2), 0, 0);
        CC_SETPOSITION((int6 / 2), ((int7 + (int10 * (int5 + int0))) + (int5 / 4)), 0, 0);
        if ((int3 > 0)) {
            while ((int1 < int3)) {
                CC_CREATE(comp(1870, 25), 5, IF_GETNEXTSUBID(comp(1870, 25)));
                CC_SETGRAPHIC(enum_getvalue(0, 23, 12585 as cs2enum, int4));
                CC_SETSIZE(int5, int5, 0, 0);
                CC_SETPOSITION(int8, int9, 0, 0);
                CC_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643));
                CC_CREATE[1](122552345, 5, IF_GETNEXTSUBID(122552345));
                CC_SETGRAPHIC[1](21747);
                CC_SETSIZE[1](int5, int5, 0, 0);
                CC_SETPOSITION[1](int8, int9, 0, 0);
                if ((int1 >= int2)) {
                    CC_SETHIDE[1](true);
                } else {
                    CC_SETTRANS(130);
                };
                int8 = (int8 + (int5 + int0));
                int1 = (int1 + 1);
            };
            int1 = 0;
            int8 = int6;
            int9 = (int9 + (int5 + int0));
        };
        int10 = (int10 + 1);
    };
    IF_SETTEXT("Buried Treasure", comp(1870, 26));
    IF_SETTEXT("Dig up chests and use Treasure Hunter keys to open them. Search for special buried treasure chests to uncover more loot!", comp(1870, 27));
    IF_SETHIDE(true, comp(1870, 19));
    return;
}