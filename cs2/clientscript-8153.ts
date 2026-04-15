//
function script8153(int0: cs2enum, int1: int): void {
    if ((int0 == -1 as cs2enum)) {
        return;
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(int0);
    var int5 = int4;
    var int6 = IF_GETWIDTH(comp(1432, 4));
    CC_DELETEALL(comp(1432, 5));
    CC_DELETEALL(comp(1432, 6));
    script13843(comp(1432, 5), comp(1432, 6), int0, 4);
    var int7 = 36;
    var int8 = 36;
    var int9 = 4;
    var int10 = 4;
    var int11 = 4;
    var int12 = 4;
    var int13 = 4;
    var int14 = 1;
    if ((int0 == 7704 as cs2enum)) {
        int14 = 2;
        if ((script19316() == false)) {
            int5 = (int5 - 2);
        };
        if ((varbitplayer_60441 == 1)) {
            int5 = (int5 - 6);
        };
    };
    var int15 = (int5 / int14);
    if ((MODULO(int5, int14) > 0)) {
        int15 = (int15 + 1);
    };
    if ((varbitplayer_22875 == 1)) {
        int7 = 32;
        int8 = 32;
        int9 = 4;
        int10 = 7;
        int12 = 0;
        int13 = 0;
        int11 = 0;
    };
    if ((int1 == 0)) {
        int13 = (int13 + ((int15 - 1) * int8));
    } else if ((int1 == 3)) {
        int12 = (int12 + ((int15 - 1) * int7));
    };
    var int16 = 0;
    var int17 = int12;
    var int18 = int13;
    while ((int2 < int4)) {
        if (((CC_FIND(comp(1432, 5), int2) == 1) && (CC_FIND[1](comp(1432, 6), int2) == 1))) {
            if ((script19633(enum_getvalue(0, 0, int0, int2)) == false)) {
                CC_SETHIDE(true);
                CC_SETHIDE[1](true);
            } else {
                CC_SETPOSITION(int12, int13, 0, 0);
                CC_SETPOSITION[1]((int12 + int9), (int13 + int10), 0, 0);
                CC_SETHIDE[1](false);
                int16 = (int16 + 1);
                switch (int1) {
                    case 0: {
                        if ((int16 >= int14)) {
                            int13 = (int13 - int8);
                            int12 = int17;
                            int16 = 0;
                        } else {
                            int12 = (int12 + int7);
                        };
                        break;
                    }
                    case 3: {
                        if ((int16 >= int14)) {
                            int12 = (int12 - int7);
                            int13 = int18;
                            int16 = 0;
                        } else {
                            int13 = (int13 + int8);
                        };
                        break;
                    }
                    case 1: {
                        if ((int16 >= int14)) {
                            int13 = (int13 + int8);
                            int12 = int17;
                            int16 = 0;
                        } else {
                            int12 = (int12 + int7);
                        };
                        break;
                    }
                    case 2: {
                        if ((int16 >= int14)) {
                            int12 = (int12 + int7);
                            int13 = int18;
                            int16 = 0;
                        } else {
                            int13 = (int13 + int8);
                        };
                        break;
                    }
                };
            };
        };
        int2 = (int2 + 1);
    };
    return;
}