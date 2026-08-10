//
function script20313(int0: number, int1: number): void {
    if ((int0 == -1)) {
        return;
    } else if (((int1 > 0) && (MODULO(CLIENTCLOCK(), 20) == 0))) {
        return;
    };
    var int2 = dbrow_getfield(int0, 1368064, 0);
    var int3 = dbrow_getfield(int0, 1368112, 0);
    if ((int3 == -1 as achievement)) {
        return;
    };
    var string0 = script20131(int0, int3);
    if ((CC_FINDBYCATEGORY(comp(1361, 21), script20173(((3000 * 4) + int2))) == 1)) {
        CC_SETTEXT(string0);
        if ((int1 >= 10)) {
            CC_SETONTIMER(callback());
        } else {
            CC_SETONTIMER(callback(script20313, int0, (int1 + 1)));
        };
    };
    if ((CC_FINDBYCATEGORY(comp(1479, 20), script20173(((3000 * 4) + int2))) == 1)) {
        CC_SETTEXT(string0);
        if ((int1 >= 10)) {
            CC_SETONTIMER(callback());
        } else {
            CC_SETONTIMER(callback(script20313, int0, (int1 + 1)));
        };
    };
    if ((ACHIEVEMENT_REQSTATE(int3) < 0)) {
        return;
    } else if (((int1 > 0) && (int1 < 10))) {
        return;
    };
    script20314(int0);
    return;
}