//
function script3523(): void {
    CC_DELETEALL(comp(1790, 9));
    CC_DELETEALL(comp(1790, 63));
    CC_DELETEALL(comp(1790, 64));
    var int0 = -1 as dbrow;
    var int1 = 0;
    var int2 = (MODULO(int1, 2) * 55);
    var int3 = ((int1 / 2) * 63);
    var int4 = -1 as obj;
    var string0 = "";
    var string1 = "";
    while ((int1 < 8)) {
        int2 = (MODULO(int1, 2) * 55);
        int3 = ((int1 / 2) * 63);
        int0 = script14968((int1 + 1));
        CC_CREATE(comp(1790, 9), 5, int1);
        CC_SETSIZE(40, 40, 0, 0);
        CC_SETPOSITION((int2 + 7), int3, 0, 0);
        CC_SETGRAPHIC(26557 as graphic);
        if ((int0 != -1 as dbrow)) {
            CC_CREATE(comp(1790, 63), 5, int1);
            CC_SETSIZE(38, 38, 0, 0);
            CC_SETPOSITION((int2 + 8), (int3 + 1), 0, 0);
            CC_SETONMOUSEREPEAT(callback(script12777, int0, -2147483645, -2147483643));
            CC_SETONOP(callback(script1620, -2147483645, -2147483643, 100, 0, 8));
            CC_SETOP(1, "Clear");
            if ((STRING_LENGTH(dbrow_getfield(int0, 270464, 0)) != 0)) {
                CC_SETOP(2, dbrow_getfield(int0, 270464, 0));
            } else {
                CC_SETOP(2, "");
            };
            if ((STRING_LENGTH(dbrow_getfield(int0, 270480, 0)) != 0)) {
                CC_SETOP(3, dbrow_getfield(int0, 270480, 0));
            } else {
                CC_SETOP(3, "");
            };
            if ((dbrow_getfield(int0, 270352, 0) == 1)) {
                CC_SETOP(4, "Withdraw");
                CC_SETOP(10, "Examine");
            };
            int4 = dbrow_getfield(int0, 270400, 0);
            string1 = script14963(int0);
            if ((int4 != -1 as obj)) {
                CC_SETOBJECT_NONUM(int4, 1000);
                CC_SETOPBASE(`${script4033(int4)}${string1}`);
            } else if ((dbrow_getfield(int0, 270384, 0) != -1 as graphic)) {
                CC_SETGRAPHIC(dbrow_getfield(int0, 270384, 0));
                CC_SETOPBASE(`${script4033(41028 as obj)}${string1}`);
            };
            CC_CREATE(comp(1790, 64), 4, int1);
            CC_SETSIZE(55, 11, 0, 0);
            if ((int2 == 0)) {
                CC_SETPOSITION(0, (int3 + 44), 0, 0);
            } else {
                CC_SETPOSITION(0, (int3 + 44), 2, 0);
            };
            CC_SETTEXTFONT(29 as fontmetrics);
            CC_SETTEXTALIGN(1, 2, 0);
            CC_SETCOLOUR(script10495(3));
            CC_SETTEXTSHADOW(true);
            if ((int0 == 2274 as dbrow)) {
                CC_SETTEXT(script11601((script14965(int0) * 10), 1));
            } else {
                CC_SETTEXT(script11601(script14965(int0), 1));
            };
            CC_SETONVARTRANSMIT(callback(script6719, -2147483645, -2147483643, 0, 3814, 1));
        };
        int1 = (int1 + 1);
    };
    return;
}