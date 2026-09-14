//
function script12308(): void {
    CC_DELETEALL(comp(1477, 15));  // toplevel_v2:telemetry_stopwatch_timer
    var int0 = -1;
    int0 = (int0 + 1);
    while ((int0 < 2)) {
        CC_CREATE(comp(1477, 15), 3, int0);  // toplevel_v2:telemetry_stopwatch_timer
        cc_setparam(5946, 0);
    };
    return;
}