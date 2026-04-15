//
function script19857(int0: obj): void {
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 220);
    IF_SETHIDE(false, comp(1329, 48));
    IF_SETTEXT(OC_NAME(int0), comp(1329, 56));
    IF_SETOBJECT_NONUM(int0, 1, comp(1329, 196));
    IF_SETSIZE(36, 32, 0, 0, comp(1329, 196));
    var string0 = `Rewards:<br>${script19834(int0)}`;
    IF_SETTEXT(string0, comp(1329, 60));
    var int1 = (16 * PARAHEIGHT(string0, IF_GETWIDTH(comp(1329, 60)), 26 as fontmetrics));
    IF_SETSCROLLSIZE(0, int1, comp(1329, 59));
    IF_SETSCROLLPOS(0, 0, comp(1329, 59));
    script7791(comp(1329, 61), comp(1329, 59));
    return;
}