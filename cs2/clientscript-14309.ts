//
function script14309(int0: number): void {
    script13972(73793600, 73793601, 28595, "Noticeboard", script9670(int0, 1));
    script13972(73793603, 73793604, 28595, "Rewards", script9670(int0, 2));
    var int1 = 0;
    if ((int0 == 1)) {
        IF_SETHIDE(false, comp(1126, 22));  // tt2_noticeboard:noticeboard_layer
        IF_SETHIDE(false, comp(1126, 40));  // tt2_noticeboard:details_layer
        IF_SETHIDE(true, comp(1126, 20));  // tt2_noticeboard:reward_selection_layer
        IF_SETHIDE(true, comp(1126, 48));  // tt2_noticeboard:reward_details_layer
        IF_SETHIDE(true, comp(1126, 39));  // tt2_noticeboard:start_text
        script14311(varbitplayer_4125);
    } else if ((int0 == 2)) {
        int1 = script6034();
        IF_SETCOLOUR(script9054(int1, 100, 6610020, 14443620), comp(1126, 71));  // tt2_noticeboard:reward_text_1
        IF_SETCOLOUR(script9054(int1, 200, 6610020, 14443620), comp(1126, 74));  // tt2_noticeboard:reward_text_2
        IF_SETCOLOUR(script9054(int1, 300, 6610020, 14443620), comp(1126, 77));  // tt2_noticeboard:reward_text_3
        IF_SETCOLOUR(script9054(int1, 400, 6610020, 14443620), comp(1126, 80));  // tt2_noticeboard:reward_text_4
        IF_SETCOLOUR(script9054(int1, 500, 6610020, 14443620), comp(1126, 83));  // tt2_noticeboard:reward_text_5
        IF_SETCOLOUR(script9054(int1, 594, 6610020, 14443620), comp(1126, 86));  // tt2_noticeboard:reward_text_6
        IF_SETHIDE(true, comp(1126, 22));  // tt2_noticeboard:noticeboard_layer
        IF_SETHIDE(true, comp(1126, 40));  // tt2_noticeboard:details_layer
        IF_SETHIDE(true, comp(1126, 39));  // tt2_noticeboard:start_text
        IF_SETHIDE(false, comp(1126, 20));  // tt2_noticeboard:reward_selection_layer
        IF_SETHIDE(false, comp(1126, 48));  // tt2_noticeboard:reward_details_layer
        IF_SETHIDE(false, comp(1126, 2));  // tt2_noticeboard:rewards_infotext
        IF_SETTEXT("", comp(1126, 1));  // tt2_noticeboard:reward_description
    };
    return;
}