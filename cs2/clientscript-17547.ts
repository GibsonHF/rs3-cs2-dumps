//
function script17547(int0: component): void {
    var int1 = script18321(int0, comp(1171, 17));
    var int2 = varbitplayer_53295;
    var int3 = varbitplayer_53292;
    var int4 = varbitplayer_53297;
    var int5 = varplayer_11535;
    if (((varbitplayer_27168 == 1) && (struct_getparam(varplayer_10946, 8867) == 1))) {
        int2 = (int2 / 10);
        int3 = (int3 / 10);
        int4 = (int4 / 10);
        int5 = (int5 / 10);
    };
    var string0 = "";
    if ((script18321(int0, comp(1171, 28)) != comp(1171, 28))) {
        string0 = TOSTRING_LOCALISED(int5, 1);
        IF_SETTEXT(string0, int1);
        return;
    };
    if ((varbitplayer_53295 > 0)) {
        string0 = TOSTRING_LOCALISED(int2, 1);
    } else if ((varbitplayer_53297 > 0)) {
        string0 = TOSTRING_LOCALISED(int4, 1);
    } else {
        switch (varplayer_10946) {
            case 51468: {
                if ((int3 < varbitplayer_53294)) {
                    string0 = `${TOSTRING_LOCALISED(SCALE(int3, MAX(1, varbitplayer_53294), 100), 1)}%`;
                } else {
                    string0 = "Training Complete";
                };
                break;
            }
            default: {
                string0 = TOSTRING_LOCALISED(int3, 1);
                break;
            }
        };
    };
    if (((varbitplayer_53295 > 0) || ((varbitplayer_53292 > 0) && (varbitplayer_53293 == 0)))) {
        IF_SETTEXT(string0, int1);
    } else {
        IF_SETTEXT("", int1);
    };
    return;
}