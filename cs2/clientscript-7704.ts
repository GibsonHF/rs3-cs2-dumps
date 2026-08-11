//
function script7704(): void {
    IF_SETHIDE(true, comp(1047, 14));  // mm_tasklist:task_complete_layer
    IF_SETHIDE(false, comp(1047, 15));  // mm_tasklist:task_buttons
    IF_SETHIDE(false, comp(1047, 69));  // mm_tasklist:jmod_support
    IF_SETHIDE(false, comp(1047, 70));  // mm_tasklist:set_active_task
    IF_SETTEXT("Select a task on the left for more information", comp(1047, 13));  // mm_tasklist:right_panel_text
    if ((script7719(1) > 0)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 68));  // mm_tasklist:task_completed_1
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 68));  // mm_tasklist:task_completed_1
    };
    if ((script7719(2) > 0)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 90));  // mm_tasklist:task_completed_2
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 90));  // mm_tasklist:task_completed_2
    };
    if ((script7719(3) > 0)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 92));  // mm_tasklist:task_completed_3
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 92));  // mm_tasklist:task_completed_3
    };
    if ((script7719(4) > 0)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 94));  // mm_tasklist:task_completed_4
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 94));  // mm_tasklist:task_completed_4
    };
    if ((script7719(5) > 0)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 96));  // mm_tasklist:task_completed_5
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 96));  // mm_tasklist:task_completed_5
    };
    if ((script7719(6) > 0)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 98));  // mm_tasklist:task_completed_6
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 98));  // mm_tasklist:task_completed_6
    };
    if ((script7719(7) > 0)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 100));  // mm_tasklist:task_completed_7
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 100));  // mm_tasklist:task_completed_7
    };
    if ((script7719(8) > 0)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 102));  // mm_tasklist:task_completed_8
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 102));  // mm_tasklist:task_completed_8
    };
    if ((script7719(9) > 0)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 104));  // mm_tasklist:task_completed_9
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 104));  // mm_tasklist:task_completed_9
    };
    if ((script7719(10) > 0)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 106));  // mm_tasklist:task_completed_10
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 106));  // mm_tasklist:task_completed_10
    };
    if ((script7719(11) > 0)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 108));  // mm_tasklist:task_completed_11
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 108));  // mm_tasklist:task_completed_11
    };
    if ((script7719(12) > 0)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 110));  // mm_tasklist:task_completed_12
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 110));  // mm_tasklist:task_completed_12
    };
    if ((script7719(13) > 0)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 112));  // mm_tasklist:task_completed_13
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 112));  // mm_tasklist:task_completed_13
    };
    if ((script7719(14) > 0)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 114));  // mm_tasklist:task_completed_14
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 114));  // mm_tasklist:task_completed_14
    };
    if ((script7719(15) > 0)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 116));  // mm_tasklist:task_completed_15
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 116));  // mm_tasklist:task_completed_15
    };
    if ((script7719(16) > 0)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 118));  // mm_tasklist:task_completed_16
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 118));  // mm_tasklist:task_completed_16
    };
    if ((script7719(17) > 0)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 120));  // mm_tasklist:task_completed_17
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 120));  // mm_tasklist:task_completed_17
    };
    if ((script7719(18) > 0)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 122));  // mm_tasklist:task_completed_18
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 122));  // mm_tasklist:task_completed_18
    };
    if ((script7719(19) > 0)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 124));  // mm_tasklist:task_completed_19
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 124));  // mm_tasklist:task_completed_19
    };
    if ((script7719(20) > 0)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 126));  // mm_tasklist:task_completed_20
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 126));  // mm_tasklist:task_completed_20
    };
    if ((varbitplayer_22395 == 1)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 32));  // mm_tasklist:reward_unlocked_2
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 32));  // mm_tasklist:reward_unlocked_2
    };
    if ((varbitplayer_22392 == 1)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 33));  // mm_tasklist:reward_unlocked_3
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 33));  // mm_tasklist:reward_unlocked_3
    };
    if ((varbitplayer_22393 == 1)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 34));  // mm_tasklist:reward_unlocked_4
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 34));  // mm_tasklist:reward_unlocked_4
    };
    if ((varbitplayer_22394 == 1)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 35));  // mm_tasklist:reward_unlocked_5
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 35));  // mm_tasklist:reward_unlocked_5
    };
    if ((varbitplayer_22398 == 1)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 36));  // mm_tasklist:reward_unlocked_6
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 36));  // mm_tasklist:reward_unlocked_6
    };
    if ((varbitplayer_22396 == 1)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 37));  // mm_tasklist:reward_unlocked_7
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 37));  // mm_tasklist:reward_unlocked_7
    };
    if ((varbitplayer_22361 == 1)) {
        IF_SETGRAPHIC(19714 as graphic, comp(1047, 38));  // mm_tasklist:reward_unlocked_8
    } else {
        IF_SETGRAPHIC(19712 as graphic, comp(1047, 38));  // mm_tasklist:reward_unlocked_8
    };
    IF_SETPOSITION(-60, -60, 0, 0, comp(1047, 44));  // mm_tasklist:selected_task
    IF_SETPOSITION(-60, -60, 0, 0, comp(1047, 45));  // mm_tasklist:jmod_task_highlight
    IF_SETPOSITION(-60, -60, 0, 0, comp(1047, 46));  // mm_tasklist:active_task_highlight
    script7805(68616238);
    script7805(68616237);
    IF_SETHIDE(true, comp(1047, 21));  // mm_tasklist:left_panel_rewards
    IF_SETHIDE(false, comp(1047, 20));  // mm_tasklist:left_panel
    IF_SETOBJECT(31294 as obj, 1, comp(1047, 22));  // mm_tasklist:reward_icon_1
    IF_SETOBJECT(31299 as obj, 1, comp(1047, 23));  // mm_tasklist:reward_icon_2
    IF_SETOBJECT(31296 as obj, 1, comp(1047, 24));  // mm_tasklist:reward_icon_3
    IF_SETOBJECT(31297 as obj, 1, comp(1047, 25));  // mm_tasklist:reward_icon_4
    IF_SETOBJECT(31298 as obj, 1, comp(1047, 26));  // mm_tasklist:reward_icon_5
    IF_SETOBJECT(31300 as obj, 1, comp(1047, 27));  // mm_tasklist:reward_icon_6
    IF_SETOBJECT(31303 as obj, 1, comp(1047, 28));  // mm_tasklist:reward_icon_7
    IF_SETOBJECT(1038 as obj, 1, comp(1047, 29));  // mm_tasklist:reward_icon_8
    return;
}