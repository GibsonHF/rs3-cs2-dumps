//
function script6748(): void {
    IF_SETHIDE(true, comp(1344, 38));  // minigames_main:right_scrolling_layer
    IF_SETHIDE(false, comp(1344, 99));  // minigames_main:default_text
    IF_SETTEXT("Select an activity in the list on the left to view its details", comp(1344, 99));  // minigames_main:default_text
    IF_SETHIDE(true, comp(1344, 34));  // minigames_main:fav_icon
    IF_SETHIDE(true, comp(1344, 33));  // minigames_main:name_wrapper
    IF_SETTEXT("Select an activity", comp(1344, 35));  // minigames_main:job_name
    IF_SETTEXT("Select an activity in the list to view its rewards.", comp(1344, 97));  // minigames_main:reward_text
    IF_SETTEXT("Select an activity in the list on the left to view its details.", comp(1344, 93));  // minigames_main:job_desc
    IF_SETTEXT("Select an activity to view hints.", comp(1344, 43));  // minigames_main:job_step_1
    IF_SETHIDE(false, comp(1344, 43));  // minigames_main:job_step_1
    IF_SETTEXT("", comp(1344, 44));  // minigames_main:job_step_2
    IF_SETHIDE(true, comp(1344, 44));  // minigames_main:job_step_2
    IF_SETTEXT("", comp(1344, 45));  // minigames_main:job_step_3
    IF_SETHIDE(true, comp(1344, 45));  // minigames_main:job_step_3
    IF_SETTEXT("", comp(1344, 46));  // minigames_main:job_step_4
    IF_SETHIDE(true, comp(1344, 46));  // minigames_main:job_step_4
    IF_SETTEXT("", comp(1344, 47));  // minigames_main:job_step_5
    IF_SETHIDE(true, comp(1344, 47));  // minigames_main:job_step_5
    IF_SETTEXT("", comp(1344, 48));  // minigames_main:job_step_6
    IF_SETHIDE(true, comp(1344, 48));  // minigames_main:job_step_6
    IF_SETTEXT("", comp(1344, 49));  // minigames_main:job_step_7
    IF_SETHIDE(true, comp(1344, 49));  // minigames_main:job_step_7
    IF_SETTEXT("", comp(1344, 50));  // minigames_main:job_step_8
    IF_SETHIDE(true, comp(1344, 50));  // minigames_main:job_step_8
    IF_SETHIDE(true, comp(1344, 52));  // minigames_main:accept_job_button
    IF_SETHIDE(true, comp(1344, 69));  // minigames_main:take_me_there_button
    IF_SETHIDE(true, comp(1344, 77));  // minigames_main:subscribe_layer
    IF_SETHIDE(true, comp(1344, 86));  // minigames_main:switch_world_checkbox_main
    CC_DELETEALL(comp(1344, 100));  // minigames_main:right_scroll
    return;
}