//
function script11415(): void {
    if ((varbitplayer_26037 == 0)) {
        if ((STAT(6 as stat) > STAT_BASE(6 as stat))) {
            script10624(14895 as struct, 1);
            script10624(14896 as struct, 0);
            return;
        };
        if ((STAT(6 as stat) < STAT_BASE(6 as stat))) {
            script10624(14895 as struct, 0);
            script10624(14896 as struct, 1);
            return;
        };
    };
    script10624(14895 as struct, 0);
    script10624(14896 as struct, 0);
    return;
}