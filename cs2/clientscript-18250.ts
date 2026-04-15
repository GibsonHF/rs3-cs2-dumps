//
function script18250(): void {
    IF_SETHIDE(true, comp(1343, 27));
    var int0 = script18249();
    var int1 = script18160(varplayer_3233);
    if ((int1 < 1)) {
        script18258(int0);
        return;
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = -1 as cs2enum;
    var int5 = 0;
    var int6 = -1 as struct;
    var int7 = -1 as cs2enum;
    var int8 = 0;
    var int9 = 0;
    if ((varplayer_3232 == 0)) {
        int2 = enum_getvalue(0, 0, 17111 as cs2enum, (int1 - 1));
        int6 = script18157(int2);
        if ((int6 == -1 as struct)) {
            script18258(int0);
            return;
        };
    } else if ((varplayer_3232 == 63)) {
        switch (int1) {
            case 1: {
                int3 = varbitplayer_16574;
                int2 = varbitplayer_16574;
                int5 = varbitplayer_16575;
                int8 = 1;
                break;
            }
            case 2: {
                int3 = varbitplayer_16578;
                int2 = varbitplayer_16578;
                int5 = varbitplayer_16579;
                int8 = 2;
                break;
            }
            case 3: {
                int3 = varbitplayer_16582;
                int2 = varbitplayer_16582;
                int5 = varbitplayer_16583;
                int8 = 3;
                break;
            }
            case 4: {
                int3 = varbitplayer_16586;
                int2 = varbitplayer_16586;
                int5 = varbitplayer_16587;
                int8 = 4;
                break;
            }
            case 5: {
                int3 = varbitplayer_16590;
                int2 = varbitplayer_16590;
                int5 = varbitplayer_16591;
                int8 = 5;
                break;
            }
        };
        if (((int3 != 0) && (int6 == -1 as struct))) {
            int4 = script18158(int3);
            if ((int4 != -1 as cs2enum)) {
                int6 = enum_getvalue(0, 73, int4, int5);
            };
        };
    } else {
        int2 = varplayer_3232;
        int7 = script18158(int2);
        if ((int7 == -1 as cs2enum)) {
            script18258(int0);
            return;
        };
        int6 = enum_getvalue(0, 73, int7, int1);
    };
    if (((int1 == 1) && (int6 == script16319(1)))) {
        int8 = 1;
    } else if (((int1 == 2) && (int6 == script16319(2)))) {
        int8 = 2;
    } else if (((int1 == 3) && (int6 == script16319(3)))) {
        int8 = 3;
    } else if (((int1 == 4) && (int6 == script16319(4)))) {
        int8 = 4;
    } else if (((int1 == 5) && (int6 == script16319(5)))) {
        int8 = 5;
    };
    if ((int6 == -1 as struct)) {
        script18258(int0);
        return;
    };
    script18251(int2, int6, int8);
    return;
}