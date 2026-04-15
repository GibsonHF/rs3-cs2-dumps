//
function script13203(int0: int, int1: int, int2: int, int3: int, int4: int): int {
    if ((TESTBIT(AND(varclient_5926, 62), int0) == 0)) {
        return 0;
    };
    var int5 = AND(int3, int4);
    var int6 = 0;
    var int7 = 0;
    if ((int1 == 99)) {
        if ((int5 == 0)) {
            return 0;
        };
        if ((int0 == 2)) {
            if ((TESTBIT(int5, 3) == 1)) {
                int6 = AND(varclient_5933, 262142);
                int5 = CLEARBIT(int5, 3);
                var int4 = CLEARBIT(int4, 3);
            };
            if ((TESTBIT(int5, 5) == 1)) {
                int7 = AND(varclient_5933, 268173312);
                int5 = CLEARBIT(int5, 5);
                int4 = CLEARBIT(int4, 5);
            };
            if ((((int5 == 0) && (int6 == 0)) && (int7 == 0))) {
                return 0;
            };
            if ((((int5 == int4) && (int6 == 262142)) && (int7 == 268173312))) {
                return 1;
            };
            return 2;
        };
        if ((int5 == int4)) {
            return 1;
        };
        return 2;
    };
    if ((int0 != 2)) {
        return TESTBIT(int5, int1);
    };
    if (((int1 != 3) && (int1 != 5))) {
        return TESTBIT(int5, int1);
    };
    if ((TESTBIT(int5, int1) == 0)) {
        return 0;
    };
    if ((int1 == 3)) {
        int6 = AND(varclient_5933, 262142);
        if ((int2 == 0)) {
            if ((int6 == 0)) {
                return 0;
            };
            if ((int6 == 262142)) {
                return 1;
            };
            return 2;
        };
        return TESTBIT(int6, int2);
    };
    int7 = AND(varclient_5933, 268173312);
    if ((int2 == 0)) {
        if ((int7 == 0)) {
            return 0;
        };
        if ((int7 == 268173312)) {
            return 1;
        };
        return 2;
    };
    return TESTBIT(int7, int2);
}