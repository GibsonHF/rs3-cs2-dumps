//
function script7707(int0: number, int1: number): void {
    if ((int1 == 0)) {
        switch (int0) {
            case 68616233: {
                IF_SETGRAPHIC(18093 as graphic, comp(1047, 1));  // mm_tasklist:task_button_left
                IF_SETGRAPHIC(18094 as graphic, comp(1047, 0));  // mm_tasklist:task_button_middle
                IF_SETGRAPHIC(18095 as graphic, comp(1047, 2));  // mm_tasklist:task_button_right
                break;
            }
            case 68616232: {
                IF_SETGRAPHIC(18093 as graphic, comp(1047, 128));  // mm_tasklist:rewards_button_left
                IF_SETGRAPHIC(18094 as graphic, comp(1047, 127));  // mm_tasklist:rewards_button_middle
                IF_SETGRAPHIC(18095 as graphic, comp(1047, 129));  // mm_tasklist:rewards_button_right
                break;
            }
            case 68616214: {
                IF_SETTEXT("Every task will yield an XP lamp.", comp(1047, 13));  // mm_tasklist:right_panel_text
                break;
            }
            case 68616215: {
                IF_SETTEXT("Hiker boots and gloves: Collect a Road Trip journal.", comp(1047, 13));  // mm_tasklist:right_panel_text
                break;
            }
            case 68616216: {
                IF_SETTEXT("Hiker cap: 5 tasks completed.", comp(1047, 13));  // mm_tasklist:right_panel_text
                break;
            }
            case 68616217: {
                IF_SETTEXT("Hiker jacket: 10 tasks completed.", comp(1047, 13));  // mm_tasklist:right_panel_text
                break;
            }
            case 68616218: {
                IF_SETTEXT("Hiker leggings: 15 tasks completed.", comp(1047, 13));  // mm_tasklist:right_panel_text
                break;
            }
            case 68616219: {
                IF_SETTEXT("Hiker backpack: All tasks completed.", comp(1047, 13));  // mm_tasklist:right_panel_text
                break;
            }
            case 68616220: {
                IF_SETTEXT("Cheeky Monkey: All tasks completed.", comp(1047, 13));  // mm_tasklist:right_panel_text
                break;
            }
            case 68616221: {
                IF_SETTEXT("Partyhat firemaking: All tasks completed.", comp(1047, 13));  // mm_tasklist:right_panel_text
                break;
            }
        };
    } else if ((int1 == 1)) {
        if ((int0 == 68616233)) {
            if ((IF_GETHIDE(comp(1047, 21)) == true)) {  // mm_tasklist:left_panel_rewards
                IF_SETGRAPHIC(18087 as graphic, comp(1047, 1));  // mm_tasklist:task_button_left
                IF_SETGRAPHIC(18088 as graphic, comp(1047, 0));  // mm_tasklist:task_button_middle
                IF_SETGRAPHIC(18089 as graphic, comp(1047, 2));  // mm_tasklist:task_button_right
            } else {
                IF_SETGRAPHIC(18090 as graphic, comp(1047, 1));  // mm_tasklist:task_button_left
                IF_SETGRAPHIC(18091 as graphic, comp(1047, 0));  // mm_tasklist:task_button_middle
                IF_SETGRAPHIC(18092 as graphic, comp(1047, 2));  // mm_tasklist:task_button_right
            };
        } else if ((IF_GETHIDE(comp(1047, 21)) == true)) {  // mm_tasklist:left_panel_rewards
            IF_SETGRAPHIC(18090 as graphic, comp(1047, 128));  // mm_tasklist:rewards_button_left
            IF_SETGRAPHIC(18091 as graphic, comp(1047, 127));  // mm_tasklist:rewards_button_middle
            IF_SETGRAPHIC(18092 as graphic, comp(1047, 129));  // mm_tasklist:rewards_button_right
        } else {
            IF_SETGRAPHIC(18087 as graphic, comp(1047, 128));  // mm_tasklist:rewards_button_left
            IF_SETGRAPHIC(18088 as graphic, comp(1047, 127));  // mm_tasklist:rewards_button_middle
            IF_SETGRAPHIC(18089 as graphic, comp(1047, 129));  // mm_tasklist:rewards_button_right
        };
    } else if ((int1 == 2)) {
        if ((int0 == 68616233)) {
            IF_SETHIDE(true, comp(1047, 21));  // mm_tasklist:left_panel_rewards
            IF_SETHIDE(false, comp(1047, 20));  // mm_tasklist:left_panel
            IF_SETTEXT("Select a task on the left for more information", comp(1047, 13));  // mm_tasklist:right_panel_text
            IF_SETHIDE(true, comp(1047, 14));  // mm_tasklist:task_complete_layer
            IF_SETHIDE(false, comp(1047, 15));  // mm_tasklist:task_buttons
            IF_SETHIDE(false, comp(1047, 69));  // mm_tasklist:jmod_support
            IF_SETHIDE(false, comp(1047, 70));  // mm_tasklist:set_active_task
            IF_SETPOSITION(-60, -60, 0, 0, comp(1047, 44));  // mm_tasklist:selected_task
            IF_SETGRAPHIC(18090 as graphic, comp(1047, 128));  // mm_tasklist:rewards_button_left
            IF_SETGRAPHIC(18091 as graphic, comp(1047, 127));  // mm_tasklist:rewards_button_middle
            IF_SETGRAPHIC(18092 as graphic, comp(1047, 129));  // mm_tasklist:rewards_button_right
        } else {
            IF_SETHIDE(false, comp(1047, 21));  // mm_tasklist:left_panel_rewards
            IF_SETHIDE(true, comp(1047, 20));  // mm_tasklist:left_panel
            IF_SETTEXT("Hover over a reward on the left for more information", comp(1047, 13));  // mm_tasklist:right_panel_text
            IF_SETHIDE(true, comp(1047, 14));  // mm_tasklist:task_complete_layer
            IF_SETHIDE(true, comp(1047, 15));  // mm_tasklist:task_buttons
            IF_SETHIDE(true, comp(1047, 69));  // mm_tasklist:jmod_support
            IF_SETHIDE(true, comp(1047, 70));  // mm_tasklist:set_active_task
            IF_SETGRAPHIC(18090 as graphic, comp(1047, 1));  // mm_tasklist:task_button_left
            IF_SETGRAPHIC(18091 as graphic, comp(1047, 0));  // mm_tasklist:task_button_middle
            IF_SETGRAPHIC(18092 as graphic, comp(1047, 2));  // mm_tasklist:task_button_right
        };
    };
    return;
}