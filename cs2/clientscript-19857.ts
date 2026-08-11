//
function script19857(int0: number): void {
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 220);
    IF_SETHIDE(false, comp(1329, 48));  // achievements_combat_mastery:popup_window
    IF_SETTEXT(OC_NAME(int0), comp(1329, 56));  // achievements_combat_mastery:more_information_name
    IF_SETOBJECT_NONUM(int0, 1, comp(1329, 196));  // achievements_combat_mastery:more_information_icon_graphic
    IF_SETSIZE(36, 32, 0, 0, comp(1329, 196));  // achievements_combat_mastery:more_information_icon_graphic
    var string0 = `Rewards:<br>${script19834(int0)}`;
    IF_SETTEXT(string0, comp(1329, 60));  // achievements_combat_mastery:more_information_summary
    var int1 = (16 * PARAHEIGHT(string0, IF_GETWIDTH(comp(1329, 60)), 26 as fontmetrics));  // achievements_combat_mastery:more_information_summary
    IF_SETSCROLLSIZE(0, int1, comp(1329, 59));  // achievements_combat_mastery:more_information_summary_layer
    IF_SETSCROLLPOS(0, 0, comp(1329, 59));  // achievements_combat_mastery:more_information_summary_layer
    script7791(87097405, 87097403);
    return;
}