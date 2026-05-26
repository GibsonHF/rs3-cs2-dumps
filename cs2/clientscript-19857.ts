//
function script19857(int0: number): void {
    SOUND_VORBIS_VOLUME(36961, 1, 0, 220);
    IF_SETHIDE(0, 87097392);
    IF_SETTEXT(OC_NAME(int0), 87097400);
    IF_SETOBJECT_NONUM(int0, 1, 87097540);
    IF_SETSIZE(36, 32, 0, 0, 87097540);
    var string0 = `Rewards:<br>${script19834(int0)}`;
    IF_SETTEXT(string0, 87097404);
    var int1 = (16 * PARAHEIGHT(string0, IF_GETWIDTH(87097404), 26));
    IF_SETSCROLLSIZE(0, int1, 87097403);
    IF_SETSCROLLPOS(0, 0, 87097403);
    script7791(87097405, 87097403);
    return;
}