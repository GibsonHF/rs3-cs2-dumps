//
function script17978(int0: int, int1: component, int2: int, int3: int, int4: int, int5: boolean, int6: int, int7: boolean, int8: unknown_int, int9: int, int10: int, int11: int): [int, int] {
    var int12 = 0;
    var int13 = -1 as dbrow;
    var int14 = -1 as dbrow;
    var int15 = 1;
    var int16 = 0;
    var int17 = 0;
    var int18 = 100;
    var int19 = IF_GETHEIGHT(int1);
    var int20 = -1;
    var int21 = -1;
    var int22 = 0;
    var int23 = 0;
    var string0 = "";
    switch (int11) {
        case 1: {
            var int8 = 0;
            var int7 = false;
            break;
        }
        case 2: {
            if ((script17862(varplayer_11339) < script17892(varplayer_11339))) {
                int8 = 1;
            } else {
                int8 = 0;
            };
            break;
        }
    };
    if ((int11 > 0)) {
        var int6 = script18018(int11);
    };
    script18041(int1, int6, int2);
    var int24 = -1 as graphic;
    if ((CC_FINDBYCATEGORY(int1, 2, int6) == 1)) {
        if (((int9 == -1) || (int10 == -1))) {
            var int9 = cc_getparam(4935);
            var int10 = cc_getparam(8654);
        };
        [int9, int10] = script17970(int9, int10);
        cc_setparam(4935, int9);
        cc_setparam(8654, int10);
        [int13, int14] = script17981(int5, int7, int4, int11);
        if ((int4 != -1)) {
            int13 = int14;
        };
        if ((int13 == -1 as dbrow)) {
            script12478("Null background.");
        };
        script17947(int9, int10, 0, 0, 0, 0, 0, 0, 1, 1, int13);
        CC_GETDYNAMICLAYER();
        int10 = (int10 + 1);
        if ((int4 != -1)) {
            int17 = (int4 * int18);
            if ((int11 > 0)) {
                int18 = int2;
            };
        };
        if ((int8 == 1)) {
            int16 = (int16 + 7);
            int22 = (int19 - 14);
            int23 = (int19 - 10);
            switch (int11) {
                case 2: {
                    string0 = `This item is currently locked, you'll unlock it at level ${TOSTRING_LOCALISED(script17892(varplayer_11339), 1)}.`;
                    break;
                }
                default: {
                    string0 = `This item is currently locked, you'll unlock it at level ${TOSTRING_LOCALISED(int6, 1)}.`;
                    break;
                }
            };
            script17948(int9, int10, int16, 0, 2, 1, int22, int23, 0, 0, script17977(int5), string0, 0);
            int10 = (int10 + 1);
            int16 = (int16 + (int22 + 2));
        } else if ((int7 == true)) {
            int16 = (int16 + 2);
            int22 = int19;
            int23 = int19;
            script17948(int9, int10, int16, 0, 2, 1, int22, int23, 0, 0, 17057 as graphic, "You've already claimed this reward.", 0);
            int16 = (int16 + (int22 - 2));
            int10 = (int10 + 1);
        };
        if ((((script14335(varplayer_11339) == 1) && (int6 > script18019(1))) && (int11 != 1))) {
            if ((int16 == 0)) {
                int16 = 3;
            };
            int22 = (int19 - 8);
            int23 = (int19 - 8);
            script17948(int9, int10, int16, 0, 2, 1, int22, int23, 0, 0, 8603 as graphic, "This is a Heroic level, requiring 3,000 Hero Points to complete", 0);
            int16 = (int16 + int22);
            int10 = (int10 + 1);
        };
        switch (int11) {
            case 2: {
                int16 = (int16 + 4);
                script7918(int9, int10, 3, 0, 0, 1, 34, 18, 0, 0, script17979(2));
                int10 = (int10 + 1);
                break;
            }
            case 1: {
                int24 = 8603 as graphic;
                script7918(int9, int10, -50, 5, 1, 0, 20, 20, 0, 0, int24);
                int10 = (int10 + 1);
                script7918(int9, int10, -25, 5, 1, 0, 20, 20, 0, 0, int24);
                int10 = (int10 + 1);
                script7918(int9, int10, 0, 5, 1, 0, 20, 20, 0, 0, int24);
                int10 = (int10 + 1);
                script7918(int9, int10, 25, 5, 1, 0, 20, 20, 0, 0, int24);
                int10 = (int10 + 1);
                script7918(int9, int10, 50, 5, 1, 0, 20, 20, 0, 0, int24);
                int10 = (int10 + 1);
                break;
            }
            default: {
                if ((int16 == 0)) {
                    int16 = (int16 + 4);
                };
                int16 = (int16 + 2);
                script10485(int9, int10, 0, 0, 0, 0, 40, 0, 0, 1, 2100 as dbrow, TOSTRING_LOCALISED(int6, 1));
                CC_SETCOLOUR(16777215);
                CC_SETTEXTFONT(57 as fontmetrics);
                CC_SETTEXTALIGN(1, 1, 0);
                int10 = (int10 + 1);
                break;
            }
        };
    } else {
        script12478("Cannot find level track layer supplied.");
    };
    int10 = (int10 + 5);
    return [int9, int10];
}