//
function script13858(int0: number, int1: number, int2: number, int3: number, int4: number): number {
    var int5 = -1;
    if ((((varbitplayer_33661 == 1) || (varclient_5882 == 1)) && (int0 == 21166))) {
        int5 = script14441();
        if ((int5 != -1)) {
            return struct_getparam(int5, 5900);
        };
    };
    if (((varplayer_12314 > 0) && (int0 == 37398))) {
        return script20122(int2, int4);
    };
    var int6 = -1 as dbrow;
    var int7 = -1 as graphic;
    var int8 = 0;
    var string0 = "";
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    if ((int0 == 21186)) {
        int6 = script3609();
    };
    if (((int6 != -1 as dbrow) && (script246(int6) == 1))) {
        if ((script3612(int6) == 1)) {
            int7 = dbrow_getfield(int6, 299280, 0);
        };
        if ((int7 == -1 as graphic)) {
            int7 = dbrow_getfield(int6, 299264, 0);
        };
        if ((int7 != -1 as graphic)) {
            return int7;
        };
    };
    var int12 = -1 as graphic;
    if (((int4 == 0) && (script6431() == 1))) {
        if ((int3 == 4)) {
            int12 = struct_getparam(int0, 8097);
        } else {
            int12 = struct_getparam(int0, 8096);
        };
        if ((int12 != -1 as graphic)) {
            return int12;
        };
    };
    if ((int0 == 21287)) {
        var int2 = 1;
    };
    if (((int2 == 1) && (varbitplayer_27169 == 1))) {
        int12 = struct_getparam(int0, 4394);
        if ((int12 != -1 as graphic)) {
            return int12;
        };
    };
    return struct_getparam(int0, 3496);
}