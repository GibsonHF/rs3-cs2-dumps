//
function script20316(): void {
    CC_DELETEALL(comp(1361, 17));  // league_child_tasks:tasks_progress_popup_contents
    IF_SETTRANS(255, comp(1361, 14));  // league_child_tasks:tasks_progress_popup_bg
    IF_SETTRANS(255, comp(1361, 15));  // league_child_tasks:tasks_progress_popup_bg_outline
    IF_SETTRANS(255, comp(1361, 16));  // league_child_tasks:tasks_progress_popup_icon
    IF_SETONTIMER(callback(), comp(1361, 13));  // league_child_tasks:tasks_progress_popup
    return;
}