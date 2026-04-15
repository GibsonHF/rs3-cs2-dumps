//
function script3870(int0: int, int1: obj, int2: graphic, int3: int, int4: int, string0: string): [int, int] {
    var int5 = comp(753, 34);
    if ((int0 == 0)) {
        var string0 = strconcat(string0, "<br><br>You do not meet this requirement.");
    } else if ((int0 == -1)) {
        string0 = strconcat(string0, "<br><br>Currently you do not meet this condition.");
    };
    if (((int3 + 36) > IF_GETWIDTH(int5))) {
        var int3 = 0;
        var int4 = (int4 + 36);
    };
    if ((int2 != 9563 as graphic)) {
        CC_CREATE(int5, 5, IF_GETNEXTSUBID(int5));
        CC_SETSIZE(36, 36, 0, 0);
        CC_SETPOSITION(int3, int4, 0, 0);
        CC_SETGRAPHIC(18266 as graphic);
        script10764(int5, 21363 as struct, int3, int4, 36, 36, -1);
    };
    CC_CREATE(int5, 5, IF_GETNEXTSUBID(int5));
    if ((int1 != -1 as obj)) {
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETOBJECT_NONUM(int1, 1);
        CC_SETPOSITION(((int3 + ((36 - 36) / 2)) + 1), (int4 + ((36 - 32) / 2)), 0, 0);
    } else {
        CC_SETSIZE(32, 32, 0, 0);
        CC_SETGRAPHIC(int2);
        CC_SETPOSITION((int3 + ((36 - 32) / 2)), (int4 + ((36 - 32) / 2)), 0, 0);
    };
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    if ((int0 != 1)) {
        CC_CREATE(int5, 5, IF_GETNEXTSUBID(int5));
        CC_SETSIZE(15, 15, 0, 0);
        CC_SETPOSITION(((int3 + 36) - 15), ((int4 + 36) - 15), 0, 0);
        CC_SETGRAPHIC(13166 as graphic);
    };
    return [((int3 + 36) + 4), int4];
}