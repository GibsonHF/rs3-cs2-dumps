//
function script11108(int0: int, int1: int): int {
    var int2 = 0;
    if ((int0 == 0)) {
        if ((int1 < 0)) {
            return 270;
        };
        return 90;
    };
    if ((int1 == 0)) {
        if ((int0 < 0)) {
            return 180;
        };
        return 0;
    };
    int2 = SCALE(int1, int0, 1000);
    if ((int2 < 0)) {
        int2 = (0 - int2);
    };
    var int3 = 90;
    var int4 = 0;
    var int5 = 45;
    var int6 = 0;
    var int7 = 90;
    while ((int7 > 1)) {
        int6 = enum_getvalue(0, 0, 2566 as cs2enum, int5);
        if ((int6 > int2)) {
            int3 = int5;
        } else {
            int4 = int5;
        };
        int7 = (int3 - int4);
        int5 = ((int7 / 2) + int4);
    };
    if ((int0 > 0)) {
        if ((int1 > 0)) {
            return int5;
        };
        return (360 - int5);
    };
    if ((int1 > 0)) {
        return (180 - int5);
    };
    return (180 + int5);
}