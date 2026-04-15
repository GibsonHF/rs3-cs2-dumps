//
function script8037(int0: int, int1: int, int2: int, int3: int, int4: int): unknown_int {
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    if ((int1 == 0)) {
        return 0;
    };
    while ((int5 < 18)) {
        if ((int5 != (int0 - 1))) {
            [int6, int7, int8] = script8029((int5 + 1));
            if ((int6 != 0)) {
                if ((((TESTBIT(int4, (1 - 1)) == 1) && (script8030(int1, int6) == 1)) && (int2 == int7))) {
                    return 1;
                };
                if ((((((TESTBIT(int4, (2 - 1)) == 1) && (script8030(int1, int6) == 1)) && (int8 != 0)) && (int3 != 0)) && (int3 == int8))) {
                    return 1;
                };
            };
        };
        int5 = (int5 + 1);
    };
    return 0;
}