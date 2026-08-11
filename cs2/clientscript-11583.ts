//
function script11583(): void {
    script11587(1);
    IF_SETTEXT("Challenge Gem - Skilling Competition", comp(1635, 20));  // mtx91_challenge_setup:skilling_title
    IF_SETTEXT("Skill", comp(1635, 4));  // mtx91_challenge_setup:skilling_skill_select_text
    IF_SETTEXT("Skill level range", comp(1635, 37));  // mtx91_challenge_setup:skilling_level_range
    IF_SETTEXT(inttostring(varbitplayer_28341, 10), comp(1635, 83));  // mtx91_challenge_setup:text_input_display_min
    IF_SETTEXT(inttostring(varbitplayer_28342, 10), comp(1635, 89));  // mtx91_challenge_setup:text_input_display_max
    IF_SETHIDE(false, comp(1635, 5));  // mtx91_challenge_setup:skilling_skill_select
    IF_SETHIDE(true, comp(1635, 6));  // mtx91_challenge_setup:text_input_box_mob_min_level
    IF_SETHIDE(true, comp(1635, 7));  // mtx91_challenge_setup:text_input_box_mob_max_level
    IF_SETHIDE(true, comp(1635, 49));  // mtx91_challenge_setup:wilderness
    IF_SETHIDE(true, comp(1635, 50));  // mtx91_challenge_setup:wilderness_checkbox
    IF_SETHIDE(true, comp(1635, 51));  // mtx91_challenge_setup:pvp_only
    IF_SETHIDE(true, comp(1635, 52));  // mtx91_challenge_setup:pvp_checkbox
    IF_SETHIDE(true, comp(1635, 2));  // mtx91_challenge_setup:info_holder_active_3
    var string0 = "The skill you need to gain XP in for this competition.";
    var string1 = "Enter the minimum player skill level that can enter this competition.";
    var string2 = "Enter the maximum player skill level that can enter this competition.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), comp(1635, 4));  // mtx91_challenge_setup:skilling_skill_select_text
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), comp(1635, 83));  // mtx91_challenge_setup:text_input_display_min
    IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -1), comp(1635, 89));  // mtx91_challenge_setup:text_input_display_max
    return;
}