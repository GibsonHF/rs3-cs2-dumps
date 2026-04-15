//
function script11386(): void {
    if ((varbitplayer_26037 == 0)) {
        if ((STAT(1 as stat) > STAT_BASE(1 as stat))) {
            script10624(14889 as struct, 1);
            script10624(14890 as struct, 0);
            return;
        };
        if ((STAT(1 as stat) < STAT_BASE(1 as stat))) {
            script10624(14889 as struct, 0);
            script10624(14890 as struct, 1);
            return;
        };
    };
    script10624(14889 as struct, 0);
    script10624(14890 as struct, 0);
    return;
}