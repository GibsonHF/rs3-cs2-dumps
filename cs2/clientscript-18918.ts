//
function script18918(int0: int, int1: unknown_int): int {
    var int2 = -1;
    var int3 = -1;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    if ((int1 != -1)) {
        int4 = CC_SETPARAM_STRING(int1, 1167392, 1, -1, 0);
    };
    while ((int6 < int4)) {
        dbrow_findnext();
        int2 = stack();
        int3 = script18919(int2);
        if ((int3 != -1)) {
            int5 = (int5 + 1);
        };
        int6 = (int6 + 1);
    };
    return int5;
}