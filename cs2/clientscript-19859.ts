//
function script19859(int0: number): void {
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 220);
    IF_SETHIDE(false, comp(1329, 48));  // achievements_combat_mastery:popup_window
    IF_SETTEXT(ACHIEVEMENT_GETNAME(int0), comp(1329, 56));  // achievements_combat_mastery:more_information_name
    IF_SETGRAPHIC(ACHIEVEMENT_SPRITE(int0), comp(1329, 196));  // achievements_combat_mastery:more_information_icon_graphic
    IF_SETSIZE(38, 38, 0, 0, comp(1329, 196));  // achievements_combat_mastery:more_information_icon_graphic
    var string0 = `${script15321(int0)}<br><br>Rewards:<br>${script19862(int0)}`;
    IF_SETTEXT(string0, comp(1329, 60));  // achievements_combat_mastery:more_information_summary
    var int1 = (16 * PARAHEIGHT(string0, IF_GETWIDTH(comp(1329, 60)), 26 as fontmetrics));  // achievements_combat_mastery:more_information_summary
    IF_SETSCROLLSIZE(0, int1, comp(1329, 59));  // achievements_combat_mastery:more_information_summary_layer
    IF_SETSCROLLPOS(0, 0, comp(1329, 59));  // achievements_combat_mastery:more_information_summary_layer
    script7791(87097405, 87097403);
    return;
}