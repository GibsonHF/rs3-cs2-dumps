//
function script20314(int0: number): void {
    CC_DELETEALL(comp(1361, 17));  // league_child_tasks:tasks_progress_popup_contents
    if ((IF_GETTRANS(comp(1361, 14)) <= 0)) {  // league_child_tasks:tasks_progress_popup_bg
        IF_SETONTIMER(callback(script20315, int0, (CLIENTCLOCK() - 50)), comp(1361, 13));  // league_child_tasks:tasks_progress_popup
    } else {
        IF_SETONTIMER(callback(script20315, int0, CLIENTCLOCK()), comp(1361, 13));  // league_child_tasks:tasks_progress_popup
    };
    return;
}