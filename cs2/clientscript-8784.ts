//
function script8784(): void {
    varclient_3474 = MAX(0, (varclient_3474 - 1));
    if ((script8785() == 1)) {
        return;
    };
    var int0 = 0;
    var int1 = -1 as struct;
    var int2 = comp(-1, 65535);
    var int3 = 0;
    var int4 = 0;
    if (((varclient_4108 != 5) && (varbitplayer_38842 == 0))) {
        varbitclient_19931 = 3;
        varbitclient_19932 = 1;
        varbitclient_19933 = 3;
        int3 = 0;
        int4 = ENUM_GETOUTPUTCOUNT(7717 as cs2enum);
        while ((int3 < int4)) {
            int0 = enum_getvalue(0, 0, 7717 as cs2enum, int3);
            int1 = script10405(int0);
            if ((int1 != -1 as struct)) {
                int2 = struct_getparam(int1, 3503);
                if (((IF_GETHIDE(int2) == false) && (script12612(int1) == true))) {
                    script8354(int0);
                };
            };
            int3 = (int3 + 1);
        };
    };
    if ((IF_HASSUB(comp(1448, 3)) == 0)) {
        script8290(0);
    };
    if ((varbitplayer_38842 == 0)) {
        script8702(-1, 9);
    };
    script1364();
    script8000();
    if (((varclient_2231 == -1) || (script8314(varclient_2231) != varclient_2231))) {
        varclient_2231 = script8524();
        script1558(varclient_2231, 0);
    };
    var int5 = 0;
    var int6 = 0;
    if (((varclient_4108 != 5) && (varbitplayer_38842 == 0))) {
        int3 = 0;
        int4 = ENUM_GETOUTPUTCOUNT(7718 as cs2enum);
        while ((int3 < int4)) {
            int0 = enum_getvalue(0, 0, 7718 as cs2enum, int3);
            if ((script8137(int0) == 0)) {
                [int5, int6] = script8718(int0);
                if (((int0 != 17) && (((int5 != -1) || (int6 != -1)) && (script8314(int0) == -1)))) {
                    script3379(int0, 0, 1);
                };
            };
            int3 = (int3 + 1);
        };
    };
    script7698();
    return;
}