//
function script747(int0: number, int1: number): void {
    var int2 = IF_GETTRANS(comp(17, 10));  // tuska_hub_overlay:prog1_m
    var int3 = comp(17, 10);  // tuska_hub_overlay:prog1_m
    var int4 = comp(17, 1);  // tuska_hub_overlay:main_progress_bar
    if ((int1 == 0)) {
        int2 = IF_GETTRANS(comp(1630, 217));  // tuska_world_event_info:prog1_m
        int3 = comp(1630, 217);  // tuska_world_event_info:prog1_m
        int4 = comp(1630, 208);  // tuska_world_event_info:main_progress_bar
    };
    if ((int2 != int0)) {
        if ((int2 > int0)) {
            IF_SETTRANS(MAX(0, (int2 - 5)), int3);
        } else {
            IF_SETTRANS(MIN(255, (int2 + 5)), int3);
        };
    } else {
        IF_SETONTIMER(callback(), int4);
    };
    return;
}