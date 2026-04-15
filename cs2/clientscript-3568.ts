//
function script3568(int0: component, int1: component, int2: int, int3: int, int4: int, int5: unknown_int, int6: unknown_int, int7: unknown_int): void {
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = (int2 - DATE_MINUTES());
    var int12 = int11;
    var int13 = 4538;
    var int14 = 1087;
    var int15 = 9741;
    CC_DELETEALL(int0);
    if ((int11 < 0)) {
        int12 = 0;
        int11 = 0;
        var int4 = 0;
        IF_SETONTIMER(callback(), int1);
    };
    int8 = (int11 / 1440);
    int9 = (int11 / 60);
    int11 = MODULO(int11, 60);
    int10 = int11;
    var int16 = (int9 / 100);
    var int17 = (MODULO(int9, 100) / 10);
    var int18 = MODULO(int9, 10);
    var int19 = (int10 / 10);
    var int20 = MODULO(int10, 10);
    var int21 = 0;
    var int22 = 0;
    if (((int5 != 0) && (int0 == comp(907, 39)))) {
        switch (MAP_LANG()) {
            case 0: {
                stack(15118);
                stack(59441190);
                IF_SETGRAPHIC();
                break;
            }
            case 1: {
                stack(15119);
                stack(59441190);
                IF_SETGRAPHIC();
                break;
            }
            case 2: {
                stack(15120);
                stack(59441190);
                IF_SETGRAPHIC();
                break;
            }
            case 3: {
                stack(15121);
                stack(59441190);
                IF_SETGRAPHIC();
                break;
            }
        };
        IF_SETTEXT("Double XP", comp(907, 18));
        var int5 = 0;
    };
    var string0 = "Hours";
    var string1 = "Minutes";
    var string2 = "Seconds";
    var int23 = 4;
    if (((int5 == 1) && (int8 >= int23))) {
        string0 = "Days";
        int16 = (int8 / 100);
        int17 = (MODULO(int8, 100) / 10);
        int18 = MODULO(int8, 10);
        string1 = "Hours";
        int19 = (MODULO(int9, 24) / 10);
        int20 = MODULO(MODULO(int9, 24), 10);
        string2 = "Minutes";
        int21 = (int10 / 10);
        int22 = MODULO(int10, 10);
        int4 = 0;
    };
    if ((int3 < DATE_MINUTES())) {
        int4 = 5998;
    };
    if ((int4 < 0)) {
        switch (int4) {
            case -1: {
                if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
                    int4 = (int4 - 1);
                };
                if ((int16 >= 1)) {
                    int16 = RANDOM(2);
                };
                int17 = RANDOM(10);
                int18 = RANDOM(10);
                int19 = RANDOM(6);
                int20 = RANDOM(10);
                int21 = RANDOM(6);
                int22 = RANDOM(10);
                break;
            }
            case -2: {
                if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
                    int4 = (int4 - 1);
                };
                int17 = RANDOM(10);
                int18 = RANDOM(10);
                int19 = RANDOM(6);
                int20 = RANDOM(10);
                int21 = RANDOM(6);
                int22 = RANDOM(10);
                break;
            }
            case -3: {
                if ((MODULO(CLIENTCLOCK(), 100) == 0)) {
                    int4 = (int4 - 1);
                };
                int18 = RANDOM(10);
                int19 = RANDOM(6);
                int20 = RANDOM(10);
                int21 = RANDOM(6);
                int22 = RANDOM(10);
                break;
            }
            case -4: {
                if ((MODULO(CLIENTCLOCK(), 200) == 0)) {
                    int4 = (int4 - 1);
                };
                int19 = RANDOM(6);
                int20 = RANDOM(10);
                int21 = RANDOM(6);
                int22 = RANDOM(10);
                break;
            }
            case -5: {
                if ((MODULO(CLIENTCLOCK(), 400) == 0)) {
                    int4 = (int4 - 1);
                };
                int20 = RANDOM(10);
                int21 = RANDOM(6);
                int22 = RANDOM(10);
                break;
            }
            case -6: {
                if ((MODULO(CLIENTCLOCK(), 800) == 0)) {
                    int4 = (int4 - 1);
                };
                int21 = RANDOM(6);
                int22 = RANDOM(10);
                break;
            }
            default: {
                int22 = RANDOM(10);
                break;
            }
        };
    } else if (((int4 > 0) && ((int5 != 1) || (int8 < int23)))) {
        int21 = (--int4 / 1000);
        int22 = (MODULO(int4, 1000) / 100);
    };
    CC_CREATE(int0, 5, 0);
    CC_SETSIZE(int14, int13, 2, 2);
    CC_SETPOSITION(11114, int15, 3, 3);
    CC_SETGRAPHIC(script12276(int22, int7));
    CC_CREATE(int0, 5, 1);
    CC_SETSIZE(int14, int13, 2, 2);
    CC_SETPOSITION(9924, int15, 3, 3);
    CC_SETGRAPHIC(script12276(int21, int7));
    CC_CREATE(int0, 5, 2);
    CC_SETSIZE(int14, int13, 2, 2);
    CC_SETPOSITION(8225, int15, 3, 3);
    CC_SETGRAPHIC(script12276(int20, int7));
    CC_CREATE(int0, 5, 3);
    CC_SETSIZE(int14, int13, 2, 2);
    CC_SETPOSITION(7035, int15, 3, 3);
    CC_SETGRAPHIC(script12276(int19, int7));
    CC_CREATE(int0, 5, 4);
    CC_SETSIZE(int14, int13, 2, 2);
    CC_SETPOSITION(5404, int15, 3, 3);
    CC_SETGRAPHIC(script12276(int18, int7));
    CC_CREATE(int0, 5, 5);
    CC_SETSIZE(int14, int13, 2, 2);
    CC_SETPOSITION(4214, int15, 3, 3);
    CC_SETGRAPHIC(script12276(int17, int7));
    if ((int16 > 0)) {
        CC_CREATE(int0, 5, 6);
        CC_SETSIZE(int14, int13, 2, 2);
        CC_SETPOSITION(3025, int15, 3, 3);
        CC_SETGRAPHIC(script12276(int16, int7));
    };
    var int24 = 2243;
    var int25 = 1660;
    if ((int6 == 1)) {
        CC_CREATE(int0, 4, 7);
        CC_SETSIZE(int24, int25, 2, 2);
        CC_SETPOSITION(4214, (int15 + int13), 3, 3);
        CC_SETTEXT(string0);
        CC_SETCOLOUR(5265767);
        CC_SETTEXTALIGN(1, 1, 0);
        script15888(1, 66, 15, 0, 16357 as cs2enum, 11);
        CC_CREATE(int0, 4, 8);
        CC_SETSIZE(int24, int25, 2, 2);
        CC_SETPOSITION(7035, (int15 + int13), 3, 3);
        CC_SETTEXT(string1);
        CC_SETCOLOUR(5265767);
        CC_SETTEXTALIGN(1, 1, 0);
        script15888(1, 66, 15, 0, 16357 as cs2enum, 11);
        CC_CREATE(int0, 4, 9);
        CC_SETSIZE(int24, int25, 2, 2);
        CC_SETPOSITION(9924, (int15 + int13), 3, 3);
        CC_SETTEXT(string2);
        CC_SETCOLOUR(5265767);
        CC_SETTEXTALIGN(1, 1, 0);
        script15888(1, 66, 15, 0, 16357 as cs2enum, 11);
    };
    if ((int12 > 0)) {
        IF_SETONTIMER(callback(script12275, int0, int1, int2, DATE_MINUTES(), int4, int5, int6, int7), int1);
    };
    return;
}