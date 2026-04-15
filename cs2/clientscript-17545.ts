//
function script17545(int0: component): void {
    var int1 = script18321(int0, comp(1171, 28));
    var int2 = script18321(int0, comp(1171, 27));
    var int3 = script18321(int0, comp(1171, 5));
    var int4 = script18321(int0, comp(1171, 14));
    var int5 = script18321(int0, comp(1171, 15));
    var int6 = script18321(int0, comp(1171, 16));
    var int7 = varplayer_10946;
    var int8 = varbitplayer_53292;
    var int9 = varbitplayer_53294;
    var int10 = 0;
    if ((((int7 != -1 as struct) && (struct_getparam(int7, 8990) != -1 as struct)) && (int1 != comp(1171, 28)))) {
        int7 = struct_getparam(int7, 8990);
        int8 = varplayer_11535;
        int9 = varplayer_11536;
        int10 = 1;
    };
    if ((int9 < 1)) {
        return;
    };
    var int11 = SCALE(int8, int9, 100);
    var int12 = struct_getparam(int7, 8860);
    var int13 = struct_getparam(int7, 9157);
    var int14 = struct_getparam(int7, 8861);
    if ((int10 == 0)) {
        if (((varbitplayer_53296 > 0) && (varbitplayer_53295 > 0))) {
            int11 = SCALE(varbitplayer_53295, varbitplayer_53296, 100);
            IF_SETCOLOUR(struct_getparam(int7, 8862), int3);
        } else if (((varbitplayer_53298 > 0) && (varbitplayer_53297 > 0))) {
            int11 = SCALE(varbitplayer_53297, varbitplayer_53298, 100);
            if ((varplayer_10945 != -1)) {
                int14 = varplayer_10945;
            };
            IF_SETCOLOUR(int14, int3);
        } else {
            if ((varplayer_10944 != -1)) {
                int14 = varplayer_10944;
            };
            int11 = SCALE(int8, int9, 100);
            IF_SETCOLOUR(int12, int3);
        };
    } else {
        IF_SETCOLOUR(int12, int3);
    };
    if ((struct_getparam(int7, 9157) != -1)) {
        IF_SETHIDE(false, int4);
        IF_SETCOLOUR(int13, int4);
    };
    var int15 = (SCALE(IF_GETWIDTH(int6), 100, int11) + 3);
    if ((IF_GETWIDTH(int5) != int15)) {
        IF_SETSIZE(int15, 33, 0, 0, int5);
        IF_SETONTIMER(callback(script17546, int0, int15, int11), int2);
    };
    return;
}