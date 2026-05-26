//
function script5070(int0: number, int1: number, int2: number): void {
    if (((int0 != 1) || (enum_getvalue(0, 73, 3943 as cs2enum, int1) == -1 as struct))) {
        return;
    };
    SOUND_VORBIS_VOLUME(6185, 1, 0, 200);
    if ((int1 == varbitplayer_7055)) {
        var int2 = IF_GETHIDE(72810514);
    } else {
        IF_SETSCROLLPOS(0, 0, 72810523);
        [varbitplayer_7056, varbitplayer_7057, varbitplayer_7058] = [0, 0, 0];
    };
    varbitplayer_7055 = int1;
    if ((int2 == 1)) {
        script5073(0);
    } else {
        script5073(1);
    };
    script5067();
    return;
}