//
function script16779(int0: number): void {
    if ((varclient_7076 == true)) {
        return;
    };
    varclient_7076 = true;
    var int1 = 0;
    var int2 = -1;
    var int3 = comp(-1, 65535);
    var int4 = -1;
    switch (int0) {
        case 0: {
            varbitplayer_58203 = 1;
            break;
        }
        case 1: {
            int1 = varbitplayer_51611;
            int3 = comp(1023, 49);  // trh187_overlay:monster_model_1
            break;
        }
        case 2: {
            int1 = varbitplayer_51612;
            int3 = comp(1023, 56);  // trh187_overlay:monster_model_2
            break;
        }
        case 3: {
            int1 = varbitplayer_51613;
            int3 = comp(1023, 63);  // trh187_overlay:monster_model_3
            break;
        }
    };
    if ((varbitplayer_58203 == 0)) {
        int2 = script7844(int1);
        IF_SETMODELANIM(dbrow_getfield(int2, 794688, 0), int3);
        SOUND_VORBIS_VOLUME(20397 as vorbis, 1, 0, 190);
        SOUND_VORBIS_VOLUME(32769 as vorbis, 1, 40, 150);
    };
    return;
}