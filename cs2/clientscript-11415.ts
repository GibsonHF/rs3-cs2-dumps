//
function script11415(): void {
    if ((varbitplayer_26037 == 0)) {
        if ((STAT(6 as stat) > STAT_BASE(6 as stat))) {
            script10624(14895, 1);
            script10624(14896, 0);
            return;
        };
        if ((STAT(6 as stat) < STAT_BASE(6 as stat))) {
            script10624(14895, 0);
            script10624(14896, 1);
            return;
        };
    };
    script10624(14895, 0);
    script10624(14896, 0);
    return;
}