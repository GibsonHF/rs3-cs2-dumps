//
function script12384(int0: number, int1: number): void {
    var int2 = IF_GETWIDTH(comp(1746, 32));  // gwd2_overlay:buff_timer_layer_1
    if ((CLIENTCLOCK() >= int1)) {
        IF_SETSIZE(int2, 6, 0, 0, comp(1746, 33));  // gwd2_overlay:buff_timer_progress_1
    } else {
        IF_SETSIZE((int2 - SCALE(int2, (int1 - int0), (CLIENTCLOCK() - int0))), 6, 0, 0, comp(1746, 33));  // gwd2_overlay:buff_timer_progress_1
    };
    int2 = IF_GETWIDTH(comp(1746, 69));  // gwd2_overlay:buff_timer_layer
    if ((CLIENTCLOCK() >= int1)) {
        IF_SETSIZE(int2, 6, 0, 0, comp(1746, 70));  // gwd2_overlay:buff_timer_progress
    } else {
        IF_SETSIZE((int2 - SCALE(int2, (int1 - int0), (CLIENTCLOCK() - int0))), 6, 0, 0, comp(1746, 70));  // gwd2_overlay:buff_timer_progress
    };
    if ((varclient_5209 == true)) {
        if ((CLIENTCLOCK() >= int1)) {
            IF_SETONTIMER(callback(), comp(1746, 0));  // gwd2_overlay:main
        } else {
            IF_SETONTIMER(callback(script12384, int0, int1), comp(1746, 0));  // gwd2_overlay:main
        };
    } else if ((CLIENTCLOCK() >= int1)) {
        IF_SETONTIMER(callback(), comp(1746, 0));  // gwd2_overlay:main
    } else {
        IF_SETONTIMER(callback(script12384, int0, int1), comp(1746, 0));  // gwd2_overlay:main
    };
    return;
}