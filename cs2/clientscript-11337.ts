//
function script11337(): void {
    if ((varbitplayer_26037 == 0)) {
        if ((STAT(2 as stat) > STAT_BASE(2 as stat))) {
            script10624(14887 as struct, 1);
            script10624(14888 as struct, 0);
            return;
        };
        if ((STAT(2 as stat) < STAT_BASE(2 as stat))) {
            script10624(14887 as struct, 0);
            script10624(14888 as struct, 1);
            return;
        };
    };
    script10624(14887 as struct, 0);
    script10624(14888 as struct, 0);
    return;
}