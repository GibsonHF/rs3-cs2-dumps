//
function script11326(): void {
    if ((varbitplayer_26037 == 0)) {
        if ((STAT(0 as stat) > STAT_BASE(0 as stat))) {
            script10624(14885 as struct, 1);
            script10624(14886 as struct, 0);
            return;
        };
        if ((STAT(0 as stat) < STAT_BASE(0 as stat))) {
            script10624(14885 as struct, 0);
            script10624(14886 as struct, 1);
            return;
        };
    };
    script10624(14885 as struct, 0);
    script10624(14886 as struct, 0);
    return;
}