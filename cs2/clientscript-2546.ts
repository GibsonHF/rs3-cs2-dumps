//
function script2546(int0: obj): [int, int, int, int, int] {
    var int1 = STAT(13 as stat);
    var int2 = ((300 + (STAT(13 as stat) * 3)) + (STAT(11 as stat) * 3));
    var int3 = (int2 / 3);
    var int4 = (int3 * 2);
    var int5 = 10;
    var int6 = 6;
    switch (script2616(int0)) {
        case 18: {
            if ((int1 >= 7)) {
                int6 = 2;
            } else if ((int1 >= 3)) {
                int6 = 4;
            };
            if ((int1 >= 4)) {
                int2 = (int2 + 50);
            };
            break;
        }
        case 19: {
            if ((int1 >= 18)) {
                int6 = 2;
            } else if ((int1 >= 12)) {
                int6 = 4;
            };
            if ((int1 >= 11)) {
                int2 = (int2 + 50);
            };
            if ((int1 >= 15)) {
                int2 = (int2 + 50);
            };
            break;
        }
        case 20: {
            if ((int1 >= 26)) {
                int6 = 2;
            } else if ((int1 >= 22)) {
                int6 = 4;
            };
            if ((int1 >= 24)) {
                int2 = (int2 + 50);
            };
            if ((int1 >= 29)) {
                int2 = (int2 + 50);
            };
            break;
        }
        case 22: {
            if ((int1 >= 39)) {
                int6 = 2;
            } else if ((int1 >= 35)) {
                int6 = 4;
            };
            if ((int1 >= 32)) {
                int2 = (int2 + 50);
            };
            if ((int1 >= 33)) {
                int2 = (int2 + 50);
            };
            break;
        }
        case 23: {
            if ((int1 >= 44)) {
                int6 = 2;
            } else if ((int1 >= 42)) {
                int6 = 4;
            };
            if ((int1 >= 43)) {
                int2 = (int2 + 50);
            };
            if ((int1 >= 45)) {
                int2 = (int2 + 50);
            };
            break;
        }
        case 25: {
            if ((int1 >= 58)) {
                int6 = 2;
            } else if ((int1 >= 54)) {
                int6 = 4;
            };
            if ((int1 >= 52)) {
                int2 = (int2 + 50);
            };
            if ((int1 >= 55)) {
                int2 = (int2 + 50);
            };
            break;
        }
        case 26: {
            if ((int1 >= 69)) {
                int6 = 2;
            } else if ((int1 >= 67)) {
                int6 = 4;
            };
            if ((int1 >= 64)) {
                int2 = (int2 + 50);
            };
            if ((int1 >= 66)) {
                int2 = (int2 + 50);
            };
            break;
        }
        case 27: {
            if ((int1 >= 78)) {
                int6 = 2;
            } else if ((int1 >= 73)) {
                int6 = 4;
            };
            if ((int1 >= 71)) {
                int2 = (int2 + 50);
            };
            if ((int1 >= 79)) {
                int2 = (int2 + 50);
            };
            break;
        }
        case 28: {
            if ((int1 >= 85)) {
                int6 = 2;
            } else if ((int1 >= 82)) {
                int6 = 4;
            };
            if ((int1 >= 84)) {
                int2 = (int2 + 50);
            };
            if ((int1 >= 88)) {
                int2 = (int2 + 50);
            };
            break;
        }
        case 29: {
            if ((int1 >= 96)) {
                int6 = 2;
            } else if ((int1 >= 93)) {
                int6 = 4;
            };
            if ((int1 >= 95)) {
                int2 = (int2 + 50);
            };
            if ((int1 >= 97)) {
                int2 = (int2 + 50);
            };
            break;
        }
        case 44: {
            if ((int1 >= 107)) {
                int6 = 2;
            } else if ((int1 >= 104)) {
                int6 = 4;
            };
            if ((int1 >= 102)) {
                int2 = (int2 + 50);
            };
            if ((int1 >= 109)) {
                int2 = (int2 + 50);
            };
            break;
        }
    };
    var int7 = ((int2 / int6) + MODULO(int2, int6));
    return [int2, int3, int4, int5, int7];
}