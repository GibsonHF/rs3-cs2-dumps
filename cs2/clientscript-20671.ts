//
function script20671(int0: number): string {
    var int1 = 0;
    var int2 = comp(-1, 65535);
    if ((int0 == 1)) {
        while ((int1 < 10)) {
            int2 = enum_getvalue(0, 9, 3554 as cs2enum, int1);
            switch (int1) {
                case 0: {
                    script14002(1, 25, 8, 100, 8, int2, -1);
                    break;
                }
                case 1: {
                    script14002(1, 16, 8, 103, 8, int2, -1);
                    break;
                }
                case 2: {
                    script14002(1, 17, 8, 99, 8, int2, -1);
                    break;
                }
                case 3: {
                    script14002(1, 18, 8, 105, 8, int2, -1);
                    break;
                }
                case 4: {
                    script14002(1, 19, 8, 96, 8, int2, -1);
                    break;
                }
                case 5: {
                    script14002(1, 20, 8, 91, 8, int2, -1);
                    break;
                }
                case 6: {
                    script14002(1, 21, 8, 97, 8, int2, -1);
                    break;
                }
                case 7: {
                    script14002(1, 22, 8, 102, 8, int2, -1);
                    break;
                }
                case 8: {
                    script14002(1, 23, 8, 98, 8, int2, -1);
                    break;
                }
                case 9: {
                    script14002(1, 24, 8, 104, 8, int2, -1);
                    break;
                }
            };
            int1 = (int1 + 1);
        };
    } else {
        while ((int1 < 10)) {
            IF_SETOPKEY(1, 0, 0, enum_getvalue(0, 9, 3554, int1));
            int1 = (int1 + 1);
        };
    };
    return;
}