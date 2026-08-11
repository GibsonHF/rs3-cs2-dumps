//
function script20315(int0: number, int1: number): void {
    var int2 = dbrow_getfield(int0, 1368112, 0);
    if ((int2 == -1)) {
        CC_DELETEALL(comp(1361, 17));  // league_child_tasks:tasks_progress_popup_contents
        IF_SETTRANS(255, comp(1361, 14));  // league_child_tasks:tasks_progress_popup_bg
        IF_SETONTIMER(callback(), comp(1361, 13));  // league_child_tasks:tasks_progress_popup
        return;
    };
    var int3 = script20307(int0, 0);
    var string0 = script20131(int0, int2);
    var int4 = 0;
    var int5 = 0;
    var int6 = IF_GETWIDTH(comp(1361, 17));  // league_child_tasks:tasks_progress_popup_contents
    if ((IF_FIND(comp(1361, 17)) == 1)) {  // league_child_tasks:tasks_progress_popup_contents
        [int4, int5] = script19613(0, int4, int5, int6, "Task progressed:");
        [int4, int5] = script19615(0, int4, (int5 - 4), int6, string0);
    };
    IF_SETGRAPHIC(int3, comp(1361, 16));  // league_child_tasks:tasks_progress_popup_icon
    IF_SETSIZE(0, MAX(40, (int5 + 8)), 1, 0, comp(1361, 13));  // league_child_tasks:tasks_progress_popup
    var int7 = (CLIENTCLOCK() - int1);
    var int8 = 0;
    if ((int7 <= 50)) {
        int8 = MAX(0, (255 - SCALE(255, 50, int7)));
        IF_SETTRANS(int8, comp(1361, 14));  // league_child_tasks:tasks_progress_popup_bg
        IF_SETTRANS(int8, comp(1361, 15));  // league_child_tasks:tasks_progress_popup_bg_outline
        IF_SETTRANS(int8, comp(1361, 16));  // league_child_tasks:tasks_progress_popup_icon
        script4161(89194513, int8);
    } else if ((int7 >= 300)) {
        int7 = (int7 - 300);
        int8 = MIN(255, SCALE(255, 50, int7));
        IF_SETTRANS(int8, comp(1361, 14));  // league_child_tasks:tasks_progress_popup_bg
        IF_SETTRANS(int8, comp(1361, 15));  // league_child_tasks:tasks_progress_popup_bg_outline
        IF_SETTRANS(int8, comp(1361, 16));  // league_child_tasks:tasks_progress_popup_icon
        script4161(89194513, int8);
        if ((int8 >= 255)) {
            IF_SETONTIMER(callback(), comp(1361, 13));  // league_child_tasks:tasks_progress_popup
        };
    };
    return;
}