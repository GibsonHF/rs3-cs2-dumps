//
function script6517(): void {
    var int0 = -1;
    var int1 = ENUM_GETOUTPUTCOUNT(12587 as cs2enum);
    var int2 = -1;
    var string0 = "";
    switch (varbitplayer_43967) {
        case 1: {
            int2 = 15181;
            break;
        }
        case 2: {
            int2 = 15183;
            break;
        }
        case 3: {
            int2 = 15185;
            break;
        }
        case 4: {
            int2 = 15187;
            break;
        }
        default: {
            return;
        }
    };
    int0 = (int0 + 1);
    while ((int0 < int1)) {
        string0 = enum_getvalue(0, 36, int2, int0);
        if ((STRING_LENGTH(string0) > 0)) {
            IF_SETONMOUSEOVER(callback(script12111, string0, -2147483645, -1), enum_getvalue(0, 9, 12587, int0));
            IF_SETONMOUSELEAVE(callback(script8805), enum_getvalue(0, 9, 12587, int0));
        } else {
            IF_SETONMOUSEOVER(callback(), enum_getvalue(0, 9, 12587, int0));
            IF_SETONMOUSELEAVE(callback(), enum_getvalue(0, 9, 12587, int0));
        };
    };
    return;
}