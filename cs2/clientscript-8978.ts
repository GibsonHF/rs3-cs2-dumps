//
function script8978(int0: int): component {
    define_array(7);
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    while ((int1 < 7)) {
        switch (int1) {
            case 0: {
                int4 = 2;
                break;
            }
            case 1: {
                int4 = 3;
                break;
            }
            case 2: {
                int4 = 4;
                break;
            }
            case 3: {
                int4 = 5;
                break;
            }
            case 4: {
                int4 = 7;
                break;
            }
            case 5: {
                int4 = 8;
                break;
            }
            case 6: {
                int4 = 9;
                break;
            }
        };
        int2 = 0;
        int3 = 0;
        if ((TESTBIT(varplayer_3643, int4) == 1)) {
            while (((int2 < 7) && (int3 == 0))) {
                if ((push_array(int2) == 0)) {
                    pop_array(int2, int4);
                    int3 = 1;
                };
                int2 = (int2 + 1);
            };
        };
        int1 = (int1 + 1);
    };
    switch (push_array(int0)) {
        case 2: {
            return comp(1496, 210);
        }
        case 3: {
            return comp(1496, 205);
        }
        case 4: {
            return comp(1496, 195);
        }
        case 5: {
            return comp(1496, 187);
        }
        case 7: {
            return comp(1496, 157);
        }
        case 8: {
            return comp(1496, 150);
        }
        case 9: {
            return comp(1496, 146);
        }
    };
    return comp(-1, 65535);
}