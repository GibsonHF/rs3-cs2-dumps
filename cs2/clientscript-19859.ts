//
function script19859(int0: number): void {
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 220);
    IF_SETHIDE(false, comp(1329, 48));
    IF_SETTEXT(ACHIEVEMENT_GETNAME(int0), comp(1329, 56));
    IF_SETGRAPHIC(ACHIEVEMENT_SPRITE(int0), comp(1329, 196));
    IF_SETSIZE(38, 38, 0, 0, comp(1329, 196));
    var string0 = `${script15321(int0)}<br><br>Rewards:<br>${script19862(int0)}`;
    IF_SETTEXT(string0, comp(1329, 60));
    var int1 = (16 * PARAHEIGHT(string0, IF_GETWIDTH(comp(1329, 60)), 26 as fontmetrics));
    IF_SETSCROLLSIZE(0, int1, comp(1329, 59));
    IF_SETSCROLLPOS(0, 0, comp(1329, 59));
    script7791(87097405, 87097403);
    return;
}