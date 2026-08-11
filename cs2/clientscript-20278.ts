//
function script20278(): void {
    varclient_8332 = varplayer_12323;
    if ((STRING_LENGTH(varclient_8333) > 0)) {
        IF_SETTEXT(varclient_8333, 96927757);
    };
    IF_SETPARAM_INT(9340, 0, comp(1479, 20));  // league_parent_tasks:task_scrollbar
    CC_DELETEALL(comp(1361, 17));  // league_child_tasks:tasks_progress_popup_contents
    IF_SETTRANS(255, comp(1361, 14));  // league_child_tasks:tasks_progress_popup_bg
    IF_SETTRANS(255, comp(1361, 15));  // league_child_tasks:tasks_progress_popup_bg_outline
    IF_SETTRANS(255, comp(1361, 16));  // league_child_tasks:tasks_progress_popup_icon
    unk10992("Search...", -1701144064, 255, 96927757);
    script20291();
    script20321();
    return;
}