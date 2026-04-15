//
function script8175(int0: int, int1: int, int2: int): [int, int] {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 1;
    var int7 = 0;
    var int8 = 2147483647;
    var int9 = 2147483647;
    var int10 = 0;
    var int11 = 0;
    switch (int0) {
        case 1053: {
            int6 = 4;
            break;
        }
    };
    while ((int7 <= 1)) {
        while ((int5 <= int6)) {
            [int3, int4] = script8141(int0, int5, int7);
            int3 = MAX((int3 - int1), (int1 - int3));
            int4 = MAX((int4 - int2), (int2 - int4));
            if ((int1 != -1)) {
                if ((int3 <= int8)) {
                    if ((int2 != -1)) {
                        if ((int4 <= int9)) {
                            int8 = int3;
                            int9 = int4;
                            int10 = int5;
                            int11 = int7;
                        };
                    } else {
                        int8 = int3;
                        int10 = int5;
                        int11 = int7;
                    };
                };
            } else if ((int4 <= int9)) {
                int9 = int4;
                int10 = int5;
                int11 = int7;
            };
            int5 = (int5 + 1);
        };
        int5 = 0;
        int7 = (int7 + 1);
    };
    return [int10, int11];
}