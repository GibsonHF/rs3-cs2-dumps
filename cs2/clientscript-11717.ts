//
function script11717(): void {
    if ((varbitplayer_28715 == 1)) {
        IF_SETHIDE(false, comp(1649, 2));  // raid1_beastmaster_buffbar:raid1_beastmaster_pet1_dead
    };
    if ((varbitplayer_28716 == 1)) {
        IF_SETHIDE(false, comp(1649, 1));  // raid1_beastmaster_buffbar:raid1_beastmaster_pet2_dead
    };
    if (((varbitplayer_28714 < 6) && (varbitplayer_28714 > 0))) {
        IF_SETHIDE(false, comp(1649, 3));  // raid1_beastmaster_buffbar:raid1_beastmaster_attackspeed
    };
    if ((varbitplayer_28713 > 0)) {
        IF_SETHIDE(false, comp(1649, 5));  // raid1_beastmaster_buffbar:raid1_beastmaster_distance_text
        IF_SETTEXT(inttostring(varbitplayer_28713, 10), comp(1649, 5));  // raid1_beastmaster_buffbar:raid1_beastmaster_distance_text
        IF_SETHIDE(false, comp(1649, 4));  // raid1_beastmaster_buffbar:raid1_beastmaster_distance
    };
    return;
}