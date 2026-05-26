//
function script11386(): void {
    if ((varbitplayer_26037 == 0)) {
        if ((STAT(1) > STAT_BASE(1))) {
            script10624(14889, 1);
            script10624(14890, 0);
            return;
        };
        if ((STAT(1) < STAT_BASE(1))) {
            script10624(14889, 0);
            script10624(14890, 1);
            return;
        };
    };
    script10624(14889, 0);
    script10624(14890, 0);
    return;
}