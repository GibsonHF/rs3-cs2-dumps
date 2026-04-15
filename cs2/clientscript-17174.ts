//
function script17174(int0: unknown_int, int1: int, int2: int): void {
    var int3 = UI_GETDYNID(int1);
    var int4 = UI_GETCATEGORY(int1);
    var int5 = SCALE(-20000, 100, int2);
    var int6 = 0;
    if ((CC_FINDBYCATEGORY(comp(1253, 3), int4, int3) == 1)) {
        int6 = (CC_GET2DANGLE() + (65536 / int5));
        if ((int6 < 0)) {
            int6 = (65536 + int6);
        } else {
            int6 = MODULO(int6, 65536);
        };
        CC_SET2DANGLE(int6);
    };
    return;
}