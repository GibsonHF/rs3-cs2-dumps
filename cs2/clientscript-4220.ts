//
function script4220(): void {
    script6575();
    var int0 = -1;
    var int1 = 0;
    if ((CC_FIND(comp(755, 85), 0) == 1)) {
        script7909(true, 17000 as cs2enum, -1, varbitplayer_54002);
        int0 = ENUM_GETOUTPUTCOUNT(3003 as cs2enum);
        if ((int0 != ENUM_GETOUTPUTCOUNT(17000 as cs2enum))) {
            script12478("Couldn't set area task dropdown red dot notifications in interface area_task_sub. Enums area_tasks_area_names and area_tasks_area_intern_notes_states are out of synch!");
            return;
        };
        while ((int1 < int0)) {
            if ((WORLDMAP_GETDISPLAYCOORD(enum_getvalue(0, 209, 3003 as cs2enum, int1)) == 1)) {
                CC_LIST_SETENTRYICON(int1, 10998 as graphic);
            } else {
                CC_LIST_SETENTRYICON(int1, -1 as graphic);
            };
            int1 = (int1 + 1);
        };
    };
    return;
}