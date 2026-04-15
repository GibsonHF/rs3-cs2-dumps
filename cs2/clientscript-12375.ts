//
function script12375(int0: int, int1: int): int {
    var int2 = 0;
    if ((int1 == 14)) {
        int2 = (int2 + script5566(varbitplayer_30864, enum_getvalue(0, 0, 10999 as cs2enum, 14), 1));
        int2 = (int2 + script5566(varbitplayer_30865, enum_getvalue(0, 0, 10999 as cs2enum, 14), 1));
        int2 = (int2 + script5566(varbitplayer_30871, enum_getvalue(0, 0, 10999 as cs2enum, 14), 1));
        int2 = (int2 + script5566(varbitplayer_30870, enum_getvalue(0, 0, 10999 as cs2enum, 14), 1));
        if ((int2 >= 4)) {
            return 1;
        };
        return 0;
    };
    switch (int0) {
        case 1: {
            return script5566(varbitplayer_30864, enum_getvalue(0, 0, 10999 as cs2enum, int1), 1);
        }
        case 2: {
            return script5566(varbitplayer_30865, enum_getvalue(0, 0, 10999 as cs2enum, int1), 1);
        }
        case 3: {
            return script5566(varbitplayer_30871, enum_getvalue(0, 0, 10999 as cs2enum, int1), 1);
        }
        case 4: {
            return script5566(varbitplayer_30870, enum_getvalue(0, 0, 10999 as cs2enum, int1), 1);
        }
    };
    return 0;
}