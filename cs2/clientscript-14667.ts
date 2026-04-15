//
function script14667(int0: int): int {
    var int1 = script14650(int0);
    var int2 = script14652(int0);
    var int3 = script14653(int0);
    if ((int1 == -1 as dbrow)) {
        return 0;
    };
    var int4 = 0;
    var int5 = script14639(int1, int2);
    var int6 = MIN(24, (int5 / 6000));
    var int7 = 5;
    if ((script14668(int0, 4) == 1)) {
        int7 = 20;
    };
    var int8 = -1;
    while ((++int8 < int6)) {
        if ((((int8 == 0) && ((int5 / 6000) >= 2)) && (script14668(int0, 3) == 1))) {
            int4 = (int4 + 1);
        } else if ((RANDOMINC(100) < int7)) {
            int4 = (int4 + 1);
        };
    };
    return int4;
}