//
function script2666(): void {
    var int0 = enum_getvalue(0, 9, 2565 as cs2enum, varbitplayer_11159);
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    if ((IF_GETY(int0) < 293)) {
        SOUND_VORBIS_VOLUME(7570 as vorbis, 1, 0, 50);
        IF_SETPOSITION(IF_GETX(int0), (IF_GETY(int0) + 2), 0, 0, int0);
    };
    return;
}