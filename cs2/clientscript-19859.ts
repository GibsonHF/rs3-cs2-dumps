//
function script19859(int0: achievement): void {
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 220);
    IF_SETHIDE(false, comp(1329, 48));
    IF_SETTEXT(ACHIEVEMENT_GETNAME(int0), comp(1329, 56));
    stack(ACHIEVEMENT_SPRITE(int0));
    stack(87097540);
    IF_SETGRAPHIC();
    IF_SETSIZE(38, 38, 0, 0, 87097540);
    var string0 = `${script15321(int0)}<br><br>Rewards:<br>${script19862(int0)}`;
    IF_SETTEXT(string0, 87097404);
    var int1 = (16 * PARAHEIGHT(string0, IF_GETWIDTH(87097404), 26));
    IF_SETSCROLLSIZE(0, int1, 87097403);
    IF_SETSCROLLPOS(0, 0, 87097403);
    script7791(87097405, 87097403);
    return;
}