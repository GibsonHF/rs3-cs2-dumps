//
function script11972(int0: component): void {
    if ((varbitclient_30112 > 0)) {
        varbitclient_30112 = MODULO((varbitclient_30112 + 1), 31);
    };
    var int1 = IF_GETMODELANGLE_Z(int0);
    if ((int1 == varbitplayer_30096)) {
        return;
    };
    var int2 = (int1 + 7);
    if ((int2 > 2047)) {
        int2 = MODULO(int2, 2048);
        if ((int2 > varbitplayer_30096)) {
            int2 = varbitplayer_30096;
        };
    } else if ((int1 < varbitplayer_30096)) {
        int2 = MIN(int2, varbitplayer_30096);
    };
    var int3 = MIN(ABS((varbitplayer_30096 - int2)), ABS(((varbitplayer_30096 + 2048) - int2)));
    var int4 = (int1 - 7);
    if ((int4 < 0)) {
        int4 = (2047 - ABS(int4));
        if ((int4 < varbitplayer_30096)) {
            int4 = varbitplayer_30096;
        };
    } else if ((int1 > varbitplayer_30096)) {
        int4 = MAX(int4, varbitplayer_30096);
    };
    var int5 = MIN(ABS((varbitplayer_30096 - int4)), ABS(((varbitplayer_30096 - 2048) - int4)));
    if ((int3 < int5)) {
        int1 = int2;
    } else {
        int1 = int4;
    };
    IF_SETMODELANGLE(IF_GETMODELXOF(int0), IF_GETMODELYOF(int0), IF_GETMODELANGLE_X(int0), IF_GETMODELANGLE_Y(int0), int1, IF_GETMODELZOOM(int0), int0);
    return;
}