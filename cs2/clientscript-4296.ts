//
function script4296(): void {
    var int0 = 1000000;
    switch (varbitplayer_40595) {
        case 1: {
            int0 = 200000;
            break;
        }
        case 3: {
            int0 = enum_getvalue(0, 0, 6390 as cs2enum, varbitplayer_31281);
            break;
        }
        case 2: {
            int0 = 100000;
            break;
        }
        default: {
            int0 = enum_getvalue(0, 0, 6389 as cs2enum, varbitplayer_31281);
            break;
        }
    };
    var int1 = SCALE(varbitplayer_40594, int0, 100);
    var int2 = SCALE(350, 100, int1);
    if ((IF_GETWIDTH(comp(1185, 10)) != int2)) {
        IF_SETSIZE(int2, 33, 0, 0, comp(1185, 10));
        IF_SETONTIMER(callback(script4297, int2, int1), comp(1185, 6));
    };
    var int3 = varbitplayer_40594;
    if ((((varbitplayer_27168 == 1) && (varbitplayer_40595 == 0)) || (((varbitplayer_27168 == 1) && (varbitplayer_40595 == 2)) || ((varbitplayer_27168 == 1) && (varbitplayer_40595 == 3))))) {
        int3 = (varbitplayer_40594 / 10);
    };
    var string0 = script46(int3, ",");
    if ((varbitplayer_40594 > 0)) {
        if ((varbitplayer_40595 == 1)) {
            string0 = inttostring(SCALE(int3, 20000, 10), 10);
            IF_SETTEXT(`${string0}%`, comp(1185, 13));
        } else {
            IF_SETTEXT(string0, comp(1185, 13));
        };
    } else {
        IF_SETTEXT("", comp(1185, 13));
    };
    return;
}