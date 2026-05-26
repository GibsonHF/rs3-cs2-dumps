//
function script11337(): void {
    if ((varbitplayer_26037 == 0)) {
        if ((STAT(2) > STAT_BASE(2))) {
            script10624(14887, 1);
            script10624(14888, 0);
            return;
        };
        if ((STAT(2) < STAT_BASE(2))) {
            script10624(14887, 0);
            script10624(14888, 1);
            return;
        };
    };
    script10624(14887, 0);
    script10624(14888, 0);
    return;
}