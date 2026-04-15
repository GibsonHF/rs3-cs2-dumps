//
function script8386(int0: int, int1: int, int2: int, int3: int, int4: int, int5: unknown_int, int6: unknown_int, int7: unknown_int): [int, int, unknown_int, unknown_int] {
    var int8 = -1;
    var int9 = 0;
    var int10 = -1;
    int10 = (int3 - int0);
    if ((((int10 < 16) && (int10 >= 0)) && (int5 != 1))) {
        int8 = int10;
        if ((int5 == -1)) {
            if (((int1 - int10) >= int2)) {
                int9 = int10;
            } else {
                int10 = 0;
            };
        };
        if ((int10 != 0)) {
            var int6 = 1;
            var int0 = (int0 + int8);
            var int1 = (int1 - int9);
        };
    };
    int10 = ((int0 + int1) - (int3 + int4));
    if (((int10 < 16) && (int10 >= 0))) {
        int9 = 0;
        if ((int5 != -1)) {
            if (((int5 == 1) || ((int8 >= 0) && (int8 < int10)))) {
                int8 = 0;
                if (((int1 - int10) >= int2)) {
                    int9 = int10;
                } else {
                    int10 = 0;
                };
            } else if (((int8 >= 0) && ((int1 - int10) >= int2))) {
                int8 = 0;
                int9 = int10;
            } else {
                int9 = 0;
                int8 = int10;
            };
            if ((int10 != 0)) {
                var int7 = 1;
                int0 = (int0 - int8);
                int1 = (int1 - int9);
            };
        };
    };
    return [int0, int1, int6, int7];
}