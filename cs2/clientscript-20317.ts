//
function script20317(int0: dbrow): void {
    if (((int0 == -1 as dbrow) || (DB_GETROWTABLE(int0) != 334))) {
        return;
    };
    var int1 = dbrow_getfield(int0, 1368064, 0);
    var int2 = (3000 + int1);
    var int3 = ((3000 * 4) + int1);
    if ((CC_FINDBYCATEGORY(comp(1361, 21), script20173(int2)) == 1)) {
        CC_SETCOLOUR(219907);
        script14391(comp(1361, 4), int1, 0, 0, 0, 0, 0, 0, 1, 1);
        CC_SETONTIMER(callback(script20318, 89194517, 89194516, 89194518, 89194500, 89194501, int0, int1, 0, 1));
        if ((IF_FIND(89194517) == 1)) {
            cc_setparam(9339, (cc_getparam(9339) + 1));
        };
    };
    if ((CC_FINDBYCATEGORY(comp(1361, 21), script20173(int3)) == 1)) {
        CC_SETCOLOUR(8448308);
    };
    if ((CC_FINDBYCATEGORY(comp(1479, 19), script20173(int2)) == 1)) {
        CC_SETCOLOUR(219907);
        script14391(comp(1479, 4), int1, 0, 0, 0, 0, 0, 0, 1, 1);
        if ((varbitclient_58399 == 2)) {
            CC_SETONTIMER(callback(script20318, 96927763, 96927762, 96927764, 96927748, 96927749, int0, int1, 0, varbitclient_58403));
            if ((IF_FIND(96927763) == 1)) {
                cc_setparam(9339, (cc_getparam(9339) + 1));
            };
        } else {
            CC_SETONTIMER(callback(script20318, 96927763, 96927762, 96927764, 96927748, 96927749, int0, int1, 350, varbitclient_58403));
        };
    };
    if ((CC_FINDBYCATEGORY(comp(1479, 19), script20173(int3)) == 1)) {
        CC_SETCOLOUR(8448308);
    };
    return;
}