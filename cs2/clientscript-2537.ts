//
function script2537(int0: dbrow): void {
    var int1 = comp(1264, 8);
    IF_SETTEXT(dbrow_getfield(int0, 1085440, 0), comp(1264, 10));
    IF_SETTEXT(dbrow_getfield(int0, 1085456, 0), comp(1264, 11));
    IF_SETTEXT(dbrow_getfield(int0, 1085472, 0), int1);
    var int2 = script15891(IF_GETTEXT(int1), IF_GETWIDTH(int1), IF_GETFONTMETRICS(int1), 0);
    CC_DELETEALL(comp(1264, 6));
    IF_SETSCROLLPOS(0, 0, comp(1264, 6));
    IF_SETSCROLLSIZE(0, 0, comp(1264, 7));
    if ((int2 > 288)) {
        IF_SETSCROLLSIZE(0, int2, comp(1264, 7));
        script7791(comp(1264, 6), comp(1264, 7));
    };
    script18315(int0, 0);
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 210);
    SOUND_VORBIS_VOLUME(10062 as vorbis, 1, 2, 250);
    IF_SETHIDE(false, comp(1264, 41));
    return;
}