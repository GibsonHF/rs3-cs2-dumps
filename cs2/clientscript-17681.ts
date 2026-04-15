//
function script17681(): void {
    if ((varbitplayer_26037 == 0)) {
        if ((STAT(28 as stat) > STAT_BASE(28 as stat))) {
            script10624(48289 as struct, 1);
            script10624(48290 as struct, 0);
            return;
        };
        if ((STAT(28 as stat) < STAT_BASE(28 as stat))) {
            script10624(48289 as struct, 0);
            script10624(48290 as struct, 1);
            return;
        };
    };
    script10624(48289 as struct, 0);
    script10624(48290 as struct, 0);
    return;
}