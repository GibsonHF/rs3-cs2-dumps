//
function script3546(int0: int, int1: int): unknown_int {
    if ((PLAYERMEMBER() == true)) {
        if ((script5774() >= (int0 + int1))) {
            return 1;
        };
        return 0;
    };
    var int2 = script5778();
    var int3 = script14294();
    var int4 = MAX(0, (int2 - int3));
    if ((int0 > 0)) {
        if ((int4 < int0)) {
            return 0;
        };
        if ((int4 >= (int0 + int1))) {
            return 1;
        };
    };
    if ((int1 <= 0)) {
        return 1;
    };
    if (((((script5777() - script14337()) - int0) - int1) >= 0)) {
        return 1;
    };
    return 0;
}