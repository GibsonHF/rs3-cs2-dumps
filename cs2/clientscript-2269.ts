//
function script2269(): void {
    var int0 = varbitplayer_17434;
    var int1 = -1 as model;
    var int2 = -1 as model;
    var int3 = -1 as model;
    var int4 = -1;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    switch (int0) {
        case 1: {
            int4 = varbitplayer_17155;
            int5 = varbitplayer_17156;
            int6 = varbitplayer_17157;
            int7 = varbitplayer_17226;
            break;
        }
        case 2: {
            int4 = varbitplayer_17168;
            int5 = varbitplayer_17169;
            int6 = varbitplayer_17170;
            int7 = varbitplayer_17227;
            break;
        }
        case 3: {
            int4 = varbitplayer_17181;
            int5 = varbitplayer_17182;
            int6 = varbitplayer_17183;
            int7 = varbitplayer_17228;
            break;
        }
        case 4: {
            int4 = varbitplayer_17194;
            int5 = varbitplayer_17195;
            int6 = varbitplayer_17196;
            int7 = varbitplayer_17229;
            break;
        }
        case 5: {
            int4 = varbitplayer_17207;
            int5 = varbitplayer_17208;
            int6 = varbitplayer_17209;
            int7 = varbitplayer_17230;
            break;
        }
        case 6: {
            int4 = varbitplayer_17220;
            int5 = varbitplayer_17221;
            int6 = varbitplayer_17222;
            int7 = varbitplayer_17231;
            break;
        }
    };
    if ((int4 == 0)) {
        int1 = enum_getvalue(0, 31, 5770 as cs2enum, int7);
        int2 = enum_getvalue(0, 31, 2191 as cs2enum, int5);
        int3 = enum_getvalue(0, 31, 2193 as cs2enum, int6);
    } else {
        int1 = enum_getvalue(0, 31, 5771 as cs2enum, int7);
        int2 = enum_getvalue(0, 31, 2192 as cs2enum, int5);
        int3 = enum_getvalue(0, 31, 2194 as cs2enum, int6);
    };
    IF_SETMODEL(int1, comp(884, 9));
    IF_SETMODEL(int2, comp(884, 7));
    IF_SETMODEL(int3, comp(884, 8));
    return;
}