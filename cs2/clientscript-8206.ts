//
function script8206(int0: int, int1: int, int2: unknown_int): void {
    var string0 = "";
    var int3 = -1 as struct;
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    [int5, int4, int6] = script8215(int0, int1);
    if ((((int5 == comp(-1, 65535)) || (int4 == comp(-1, 65535))) || (int6 == comp(-1, 65535)))) {
        return;
    };
    int7 = IF_GETLAYER(int4);
    if ((CC_FIND(int7, 0) == 0)) {
        script8207(int0, int1, int7);
    };
    string0 = IF_GETTEXT(int5);
    if ((CC_FIND(int7, 0) == 1)) {
        CC_SETHIDE(true);
    };
    switch (int2) {
        case 6: {
            int3 = 21364 as struct;
            string0 = script8213(script8825(int0, int1), 0, 0);
            IF_SETONMOUSEOVER(callback(script8205, int0, int1, 0), int4);
            IF_SETONMOUSELEAVE(callback(script8205, int0, int1, 6), int4);
            break;
        }
        case 0: {
            int3 = 21366 as struct;
            if (((strcmp(string0, "") != 0) && (CC_FIND(int7, 0) == 1))) {
                CC_SETHIDE(false);
            };
            break;
        }
        case 1: {
            int3 = 21365 as struct;
            string0 = "";
            IF_SETONMOUSEOVER(callback(), int4);
            IF_SETONMOUSELEAVE(callback(script8205, int0, int1, 1), int4);
            break;
        }
        case 2: {
            int3 = 21368 as struct;
            string0 = "";
            IF_SETONMOUSEOVER(callback(script8205, int0, int1, 3), int4);
            IF_SETONMOUSELEAVE(callback(script8205, int0, int1, 2), int4);
            break;
        }
        case 3: {
            int3 = 21368 as struct;
            string0 = "";
            IF_SETONMOUSEOVER(callback(script8205, int0, int1, 3), int4);
            IF_SETONMOUSELEAVE(callback(script8205, int0, int1, 2), int4);
            break;
        }
        case 4: {
            int3 = 21368 as struct;
            string0 = "Action unbound";
            IF_SETONMOUSEOVER(callback(script8205, int0, int1, 5), int4);
            IF_SETONMOUSELEAVE(callback(script8205, int0, int1, 4), int4);
            break;
        }
        case 5: {
            int3 = 21368 as struct;
            string0 = "Action unbound";
            IF_SETONMOUSEOVER(callback(script8205, int0, int1, 5), int4);
            IF_SETONMOUSELEAVE(callback(script8205, int0, int1, 4), int4);
            break;
        }
    };
    if ((varbitplayer_22875 == 1)) {
        switch (int3) {
            case 21364: {
                int3 = 40039 as struct;
                break;
            }
            case 21365: {
                int3 = 40040 as struct;
                break;
            }
            case 21366: {
                int3 = 40041 as struct;
                break;
            }
            case 21367: {
                int3 = 40042 as struct;
                break;
            }
            case 21368: {
                int3 = 40043 as struct;
                break;
            }
        };
    };
    script7796(int4, int3);
    IF_SETTEXT(string0, int5);
    var string1 = "Change Keybind";
    IF_SETOP(1, string1, int4);
    IF_SETONOP(callback(script8208, int0, int1), int4);
    return;
}