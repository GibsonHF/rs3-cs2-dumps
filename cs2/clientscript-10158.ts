//
function script10158(int0: unknown_int): void {
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = script8726(8, 26);
    if (((varbitplayer_27169 == 0) && (((int1 != -1) || (int2 != -1)) || (varbitplayer_19925 == 1)))) {
        return;
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = 200;
    var int6 = 135;
    var int7 = 0;
    if ((varbitplayer_27169 == 0)) {
        [int3, int4] = script8715(26);
    } else {
        [int5, int6] = [120, 70];
    };
    varbitclient_23081 = MAX(MIN(IF_GETWIDTH(comp(1477, 320)), 2048), MAX(varbitclient_23081, 330));
    varbitclient_23082 = MAX(MIN(IF_GETHEIGHT(comp(1477, 320)), 2048), MAX(varbitclient_23082, 300));
    if ((int0 == 1)) {
        varbitclient_23081 = MAX(MIN(IF_GETWIDTH(comp(1477, 320)), 2048), 330);
        varbitclient_23082 = MAX(MIN(IF_GETHEIGHT(comp(1477, 320)), 2048), 300);
        [int3, int4, int5, int6, int7] = script8382(int3, int4, int5, int6, 26, 0, 1);
        if ((int7 == 1)) {
            script8387(int3, int4, int5, int6, 26);
            IF_SETHIDE(true, comp(231, 3));
            script8705(26);
            IF_SETHIDE(false, comp(231, 16));
            IF_SETHIDE(true, comp(231, 11));
            IF_SETHIDE(true, comp(231, 17));
            SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
        };
    } else {
        if ((varbitclient_23069 < 1)) {
            printmessage("There's no need to do that without a webcam enabled.");
            SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
            return;
        };
        if (((varbitclient_23081 < 1) || (varbitclient_23082 < 1))) {
            varbitclient_23081 = 330;
            varbitclient_23082 = 300;
        };
        [int3, int4, varbitclient_23081, varbitclient_23082, int7] = script8382(int3, int4, varbitclient_23081, varbitclient_23082, 26, 0, 1);
        if ((int7 == 1)) {
            IF_SETHIDE(false, comp(231, 3));
            script8387(int3, int4, varbitclient_23081, varbitclient_23082, 26);
            script8705(26);
            IF_SETHIDE(true, comp(231, 16));
            IF_SETHIDE(false, comp(231, 17));
            IF_SETHIDE(false, comp(231, 11));
            script10134();
            SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
        };
    };
    return;
}