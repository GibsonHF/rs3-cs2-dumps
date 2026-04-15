//
function script6977(): void {
    CC_DELETEALL(comp(1555, 8));
    CC_DELETEALL(comp(1555, 9));
    CC_DELETEALL(comp(1555, 10));
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(9448 as cs2enum);
    var int2 = 0;
    var int3 = 0;
    var int4 = IF_GETWIDTH(comp(1555, 8));
    var int5 = IF_GETHEIGHT(comp(1555, 8));
    var int6 = -1 as obj;
    var int7 = -1;
    var string0 = "";
    var string1 = "";
    CC_CREATE(comp(1555, 10), 3, 0);
    CC_SETFILL(0);
    CC_SETSIZE(40, 36, 0, 0);
    CC_SETCOLOUR(15777401);
    CC_SETHIDE(true);
    CC_CREATE(comp(1555, 10), 3, 1);
    CC_SETFILL(0);
    CC_SETSIZE(40, 36, 0, 0);
    CC_SETCOLOUR(16777215);
    CC_SETHIDE(true);
    while ((int0 < int1)) {
        int6 = enum_getvalue(0, 33, 9448 as cs2enum, int0);
        if (((int2 + 43) > int4)) {
            [int2, int3] = [0, (int3 + 39)];
        };
        CC_CREATE(comp(1555, 9), 4, int0);
        if ((int6 == -1 as obj)) {
            CC_SETPOSITION(0, 0, 0, 0);
            CC_SETSIZE(0, 0, 0, 0);
            CC_SETHIDE(true);
        } else {
            if (((int0 == varplayer_4902) && (CC_FIND[1](comp(1555, 10), 0) == 1))) {
                CC_SETPOSITION[1](int2, int3, 0, 0);
                CC_SETHIDE[1](false);
            };
            string1 = OC_NAME(int6);
            int7 = item_getparam(int6, 2646);
            if ((script7612(int7) == 0)) {
                string1 = "Unknown recipe";
            } else {
                string1 = SUBSTRING(string1, 0, (STRING_LENGTH(string1) - 3));
            };
            string0 = `Select ${string1}`;
            CC_SETPOSITION(int2, int3, 0, 0);
            CC_SETSIZE(40, 36, 0, 0);
            CC_SETOP(1, "Select");
            CC_SETONMOUSEREPEAT(callback(script6721, -2147483645, -2147483643, string0));
            CC_SETONOP(callback(script6065, -2147483645, -2147483643));
            CC_CREATE(101908488, 5, IF_GETNEXTSUBID(101908488));
            CC_SETPOSITION(int2, int3, 0, 0);
            CC_SETSIZE(40, 36, 0, 0);
            CC_SETGRAPHIC(18266);
            CC_CREATE(101908488, 5, IF_GETNEXTSUBID(101908488));
            CC_SETPOSITION((int2 + 2), (int3 + 2), 0, 0);
            CC_SETSIZE(36, 32, 0, 0);
            if ((script7612(int7) == 0)) {
                CC_SETOBJECT_NONUM(31250 as obj, 1);
            } else {
                CC_SETOBJECT_NONUM(int6, 1);
            };
            if ((script7611(int7) == 1)) {
                CC_CREATE(comp(1555, 8), 5, IF_GETNEXTSUBID(comp(1555, 8)));
                CC_SETPOSITION((int2 + 25), (int3 + 21), 0, 0);
                CC_SETSIZE(15, 15, 0, 0);
                CC_SETGRAPHIC(13165 as graphic);
            };
            int2 = (int2 + 43);
        };
        int0 = (int0 + 1);
    };
    if (((int3 + 32) > int5)) {
        IF_SETSCROLLSIZE(0, (int3 + 32), comp(1555, 9));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1555, 9));
    };
    script31(comp(1555, 11), comp(1555, 9), -1 as graphic, -1 as graphic, -1 as graphic, -1 as graphic, -1 as graphic, -1 as graphic);
    return;
}