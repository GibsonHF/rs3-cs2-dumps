//
function script5070(int0: unknown_int, int1: int, int2: boolean): void {
    if (((int0 != 1) || (enum_getvalue(0, 73, 3943 as cs2enum, int1) == -1 as struct))) {
        return;
    };
    SOUND_VORBIS_VOLUME(6185 as vorbis, 1, 0, 200);
    if ((int1 == varbitplayer_7055)) {
        var int2 = IF_GETHIDE(comp(1111, 18));
    } else {
        IF_SETSCROLLPOS(0, 0, comp(1111, 27));
        [varbitplayer_7056, varbitplayer_7057, varbitplayer_7058] = [0, 0, 0];
    };
    varbitplayer_7055 = int1;
    if ((int2 == true)) {
        script5073(false);
    } else {
        script5073(true);
    };
    script5067();
    return;
}