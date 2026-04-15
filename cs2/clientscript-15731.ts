//
function script15731(int0: unknown_int, int1: int): int {
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var int2 = 0;
    var string6 = "";
    stack(SHOP_GETPRODUCTDETAILS(int0, int1));
    [string0, string1, string2, string3, string4, string5, int2, string6] = stack();
    if ((strcmp(string1, "") == 0)) {
        return 0;
    };
    var int3 = -1 as dbrow;
    int3 = script16590(PLATFORMTYPE(), string1);
    if ((int3 == -1 as dbrow)) {
        return 0;
    };
    var int4 = SHOP_ISPRODUCTAVAILABLE(int0, int1);
    if ((script15747(int4, int3) == 0)) {
        return 0;
    };
    var string7 = script20546(int3);
    if ((STRING_LENGTH(string7) > 0)) {
        string0 = string7;
    };
    script15938(comp(828, 6), UI_GETCATEGORY(IF_GETNEXTSUBID(comp(828, 6))), UI_GETDYNID(IF_GETNEXTSUBID(comp(828, 6))), 0, 0, 1, 0, 176, 176, 0, 0);
    CC_SETONOP(callback(script15739, string3, int3, string1, int0, script3921(int1)));
    CC_SETOP(1, "Buy");
    script20616(54263814, string0, dbrow_getfield(int3, 499792, 0), string3, 1, dbrow_getfield(int3, 499968, 0), 6, 6, 1, 1, 1, 0, 0, 0);
    return 1;
}