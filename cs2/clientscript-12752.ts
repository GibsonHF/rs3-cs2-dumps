//
function script12752(): void {
    IF_SETTEXT("0", comp(1787, 13));  // cruc_dm_overlay:player_kills
    IF_SETTEXT("- - - - - - - -", comp(1787, 0));  // cruc_dm_overlay:rank1_name
    IF_SETTEXT("- - - - - - - -", comp(1787, 2));  // cruc_dm_overlay:rank2_name
    IF_SETTEXT("- - - - - - - -", comp(1787, 4));  // cruc_dm_overlay:rank3_name
    IF_SETTEXT("- - - - - - - -", comp(1787, 6));  // cruc_dm_overlay:rank4_name
    IF_SETTEXT("- - - - - - - -", comp(1787, 8));  // cruc_dm_overlay:rank5_name
    IF_SETTEXT("-", comp(1787, 1));  // cruc_dm_overlay:rank1_kills
    IF_SETTEXT("-", comp(1787, 3));  // cruc_dm_overlay:rank2_kills
    IF_SETTEXT("-", comp(1787, 5));  // cruc_dm_overlay:rank3_kills
    IF_SETTEXT("-", comp(1787, 7));  // cruc_dm_overlay:rank4_kills
    IF_SETTEXT("-", comp(1787, 9));  // cruc_dm_overlay:rank5_kills
    IF_SETTEXT("", comp(1787, 38));  // cruc_dm_overlay:history1_text
    IF_SETTEXT("", comp(1787, 40));  // cruc_dm_overlay:history2_text
    IF_SETTEXT("", comp(1787, 42));  // cruc_dm_overlay:history3_text
    IF_SETGRAPHIC(-1 as graphic, comp(1787, 37));  // cruc_dm_overlay:history1_icon
    IF_SETGRAPHIC(-1 as graphic, comp(1787, 39));  // cruc_dm_overlay:history2_icon
    IF_SETGRAPHIC(-1 as graphic, comp(1787, 41));  // cruc_dm_overlay:history3_icon
    return;
}