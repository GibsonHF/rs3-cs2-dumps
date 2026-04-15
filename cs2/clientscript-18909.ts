//
function script18909(int0: int, int1: dbrow, int2: int, int3: int, int4: int): int {
    var int5 = script18861(int0, int2);
    var int6 = 0;
    if ((int5 != -1)) {
        int6 = CC_SETPARAM_STRING(int5, 1167392, 1, -1, 0);
    };
    var int7 = script18917(int0, int2, int3);
    var int8 = script18918(int0, int5);
    if ((((int6 - int8) == 0) && (int7 == 0))) {
        var int4 = (int4 + (41 + 4));
        return int4;
    };
    var int9 = script18863(int0);
    var int10 = script18862(int0, int6, int8, int7, int9);
    switch (int10) {
        case 0: {
            int4 = script18911(int5, int6, int7, int2, int3, int4, int0, int1, 1);
            break;
        }
        case 1: {
            int4 = script18911(int5, int6, int7, int2, int3, int4, int0, int1, 0);
            break;
        }
        case 2: {
            int4 = script18912(int5, int6, int7, int9, int2, int3, int4, int0, int1);
            break;
        }
    };
    return int4;
}