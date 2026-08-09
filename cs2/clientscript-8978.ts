//
function script8978(int0: number): number {
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
            while ((int2 < 7)) {
                if ((int3 == 0)) {
                    if ((push_array(int2) == 0)) {
                        pop_array(int2, int4);
                        int3 = 1;
                    };
                    int2 = (int2 + 1);
                };
                int1 = (int1 + 1);
            };
        };
        int1 = (int1 + 1);
    };
    switch (push_array(int0)) {
        case 2: {
            return 98042066;
        }
        case 3: {
            return 98042061;
        }
        case 4: {
            return 98042051;
        }
        case 5: {
            return 98042043;
        }
        case 7: {
            return 98042013;
        }
        case 8: {
            return 98042006;
        }
        case 9: {
            return 98042002;
        }
    };
    return -1;
}