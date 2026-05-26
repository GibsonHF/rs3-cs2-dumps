//
function script11414(): void {
    if ((varbitplayer_26037 == 0)) {
        if ((STAT(4) > STAT_BASE(4))) {
            script10624(14891, 1);
            script10624(14892, 0);
            return;
        };
        if ((STAT(4) < STAT_BASE(4))) {
            script10624(14891, 0);
            script10624(14892, 1);
            return;
        };
    };
    script10624(14891, 0);
    script10624(14892, 0);
    return;
}