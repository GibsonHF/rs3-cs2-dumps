//
function script17058(int0: number, int1: number): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script17058, int0, int1), comp(1082, 48));  // trh189_overlay:lunar_layer
        return;
    };
    if ((varbitplayer_52292 == 1)) {
        SOUND_VORBIS_VOLUME(57285 as vorbis, 1, 0, 150);
        switch (int1) {
            case 70910035: {
                IF_SETHIDE(false, comp(1082, 66));  // trh189_overlay:solar_lootbeam_layer
                break;
            }
            case 70910015: {
                IF_SETHIDE(false, comp(1082, 54));  // trh189_overlay:lunar_lootbeam_layer
                break;
            }
        };
    };
    IF_SETNPCMODEL(-1 as npc, int1);
    IF_SETONTIMER(callback(), comp(1082, 48));  // trh189_overlay:lunar_layer
    return;
}