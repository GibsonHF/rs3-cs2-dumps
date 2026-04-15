//
function script1355(int0: int): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = struct_getparam(enum_getvalue(0, 73, 13282 as cs2enum, varbitplayer_40354), 7138);
    if ((int0 < varbitclient_40358)) {
        IF_SETONTIMER(callback(script1355, (int0 + 1)), comp(458, 27));
    } else if ((int0 <= (varbitclient_40358 * 2))) {
        if ((int0 == varbitclient_40358)) {
            int3 = MODULO((varbitclient_40356 + script1354()), int4);
            if ((int3 < 0)) {
                int3 = (int4 + int3);
            };
            if ((varbitclient_40360 == 1)) {
                if ((int3 == script1435(varbitclient_40355))) {
                    SOUND_VORBIS_VOLUME(29689 as vorbis, 1, 0, 150);
                } else {
                    SOUND_VORBIS_VOLUME(29688 as vorbis, 1, 0, 150);
                };
            } else if ((int3 == script1435(varbitclient_40355))) {
                SOUND_VORBIS_VOLUME(29689 as vorbis, 1, 0, 50);
            } else {
                SOUND_VORBIS_VOLUME(29688 as vorbis, 1, 0, 50);
            };
        };
        int1 = SCALE(65536, int4, varbitclient_40356);
        int2 = (SCALE(65536, int4, (varbitclient_40356 + script1354())) - int1);
        IF_SET2DANGLE(script12452((int0 - varbitclient_40358), varbitclient_40358, int1, int2, 0), comp(458, 27));
        IF_SET2DANGLE(script12452((int0 - varbitclient_40358), varbitclient_40358, int1, int2, 0), comp(458, 25));
        if ((int0 == (varbitclient_40358 * 2))) {
            int3 = MODULO((varbitclient_40356 + script1354()), int4);
            if ((int3 < 0)) {
                int3 = (int4 + int3);
            };
            varbitclient_40356 = int3;
            if ((varbitclient_40356 == script1435(varbitclient_40355))) {
                stack(14180);
                stack(30015511);
                IF_SETGRAPHIC();
            } else {
                stack(14179);
                stack(30015511);
                IF_SETGRAPHIC();
            };
        };
        IF_SETONTIMER(callback(script1355, (int0 + 1)), comp(458, 27));
    } else {
        IF_SETONTIMER(callback(script1355, 0), comp(458, 27));
    };
    return;
}