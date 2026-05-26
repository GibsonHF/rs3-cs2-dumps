//
function script2537(int0: number): void {
    var int1 = 82837512;
    IF_SETTEXT(dbrow_getfield(int0, 1085440, 0), 82837514);
    IF_SETTEXT(dbrow_getfield(int0, 1085456, 0), 82837515);
    IF_SETTEXT(dbrow_getfield(int0, 1085472, 0), int1);
    var int2 = script15891(IF_GETTEXT(int1), IF_GETWIDTH(int1), IF_GETFONTMETRICS(int1), 0);
    CC_DELETEALL(82837510);
    IF_SETSCROLLPOS(0, 0, 82837510);
    IF_SETSCROLLSIZE(0, 0, 82837511);
    if ((int2 > 288)) {
        IF_SETSCROLLSIZE(0, int2, 82837511);
        script7791(82837510, 82837511);
    };
    script18315(int0, 0);
    SOUND_VORBIS_VOLUME(36961, 1, 0, 210);
    SOUND_VORBIS_VOLUME(10062, 1, 2, 250);
    IF_SETHIDE(0, 82837545);
    return;
}