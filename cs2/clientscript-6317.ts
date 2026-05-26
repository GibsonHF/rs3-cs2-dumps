//
function script6317(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    var int8 = 0;
    var int9 = -1;
    var int10 = -1;
    if ((int6 == 1)) {
        if ((TESTBIT(varbitplayer_1906, int7) == 0)) {
            SETBIT(varbitplayer_1906, int7);
        } else {
            CLEARBIT(varbitplayer_1906, int7);
        };
    } else if ((int6 == 3)) {
        if ((TESTBIT(varbitplayer_1907, int7) == 0)) {
            SETBIT(varbitplayer_1907, int7);
        } else {
            CLEARBIT(varbitplayer_1907, int7);
        };
    } else if ((TESTBIT(varbitplayer_1908, int7) == 0)) {
        SETBIT(varbitplayer_1908, int7);
    } else {
        CLEARBIT(varbitplayer_1908, int7);
    };
    while ((int8 < 3)) {
        switch (int8) {
            case 0: {
                int9 = int0;
                int10 = int1;
                break;
            }
            case 1: {
                int9 = int2;
                int10 = int3;
                break;
            }
            case 2: {
                int9 = int4;
                int10 = int5;
                break;
            }
        };
        if ((int9 != -1)) {
            script6057(int9, int6, int8);
        };
        if ((int10 != -1)) {
            script6056(int10, int6, int8);
        };
        int8 = (int8 + 1);
    };
    return;
}