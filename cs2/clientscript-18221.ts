//
function script18221(): void {
    var int0 = comp(1343, 164);  // jobs_main:title_layer
    var int1 = comp(1343, 166);  // jobs_main:members_prize_layer
    var int2 = comp(1343, 168);  // jobs_main:free_prize_layer
    var int3 = comp(1343, 167);  // jobs_main:prize_dividers
    var int4 = comp(1343, 155);  // jobs_main:reward_bg_free
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    var int5 = 0;
    script13310(88015013, 88014998, 52, 8000);
    IF_SETTEXT(`${inttostring((varbitplayer_50528 / struct_getparam(47781, 4926)), 10)}/${inttostring(((struct_getparam(47781, 6142) * struct_getparam(47781, 6144)) / struct_getparam(47781, 4926)), 10)}`, comp(1343, 206));  // jobs_main:reward_progress_bar_text
    if ((varbitplayer_52723 == 1)) {
        IF_SETTEXT("Progress", comp(1343, 156));  // jobs_main:reward_select_weekly_progress_heading
    } else {
        IF_SETTEXT("Weekly<br>Progress", comp(1343, 156));  // jobs_main:reward_select_weekly_progress_heading
    };
    script13990(int4, -1, 7254);
    if ((script6431() == 0)) {
        while ((int5 < 3)) {
            if ((CC_FIND(int4, int5) == 1)) {
                CC_DELETE();
            };
            int5 = (int5 + 1);
        };
    } else {
        IF_SETPOSITION(0, 151, 0, 0, comp(1343, 155));  // jobs_main:reward_bg_free
        IF_SETSIZE(0, 86, 1, 0, comp(1343, 155));  // jobs_main:reward_bg_free
    };
    script7925(int1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 7, 1, 0);
    script7925(int2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 7, 1, 0);
    int5 = 0;
    int5 = (int5 + 1);
    while ((int5 <= 7)) {
        IF_CREATENESTED(0, int5, 0, 0, 0, int1);
        CC_SETSIZE(16384, 16384, 2, 2);
        script18223(int1, int5, (int5 - 1), 1, 3);
        IF_CREATENESTED(0, int5, 0, 0, 0, int2);
        CC_SETSIZE(16384, 16384, 2, 2);
        script18223(int2, int5, (int5 - 1), 0, 2);
    };
    IF_SETONVARTRANSMIT(callback(script18220, 10297, 10298, 2), comp(1343, 30));  // jobs_main:reward_layer
    IF_SETHIDE(PLAYERMEMBER(), comp(1343, 170));  // jobs_main:membership_button
    script18222(88015019);
    IF_SETPOSITION((6 + STRINGWIDTH(IF_GETTEXT(comp(1343, 202) /*jobs_main:reward_select_time_title*/), 168 as fontmetrics)), 4, 2, 0, comp(1343, 201) /*jobs_main:time_select_hourglass_graphic*/);
    return;
}