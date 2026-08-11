//
function script18244(): void {
    var int0 = -1;
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = script16317();
    CC_DELETEALL(comp(1343, 19));  // jobs_main:button_graphics
    CC_DELETEALL(comp(1343, 20));  // jobs_main:button_icons
    CC_DELETEALL(comp(1343, 22));  // jobs_main:button_stamps
    CC_DELETEALL(comp(1343, 21));  // jobs_main:button_labels
    CC_DELETEALL(comp(1343, 23));  // jobs_main:button_clickboxes
    while ((int4 < int5)) {
        script18240(int4);
        int4 = (int4 + 1);
    };
    int4 = 0;
    while ((int4 < int5)) {
        script18242(script16319((int4 + 1)), int4, int4);
        int4 = (int4 + 1);
    };
    return;
}