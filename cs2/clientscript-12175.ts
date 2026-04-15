//
function script12175(int0: int, int1: dbrow, int2: dbrow, int3: dbrow, int4: dbrow, int5: dbrow, int6: dbrow, int7: dbrow, int8: dbrow, int9: dbrow): void {
    IF_SETONTIMER(callback(), comp(1712, 3));
    varclient_5116 = int0;
    var int10 = 0;
    var int11 = -1;
    var int12 = 0;
    while ((int10 < 9)) {
        if ((CC_FIND(comp(1712, 3), int10) == 1)) {
            switch (int10) {
                case 0: {
                    int11 = int1;
                    break;
                }
                case 1: {
                    int11 = int2;
                    break;
                }
                case 2: {
                    int11 = int3;
                    break;
                }
                case 3: {
                    int11 = int4;
                    break;
                }
                case 4: {
                    int11 = int5;
                    break;
                }
                case 5: {
                    int11 = int6;
                    break;
                }
                case 6: {
                    int11 = int7;
                    break;
                }
                case 7: {
                    int11 = int8;
                    break;
                }
                case 8: {
                    int11 = int9;
                    break;
                }
            };
            script12176(int11, 0);
        };
        int10 = (int10 + 1);
    };
    return;
}