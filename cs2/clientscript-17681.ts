//
function script17681(): void {
    if ((varbitplayer_26037 == 0)) {
        if ((STAT(28) > STAT_BASE(28))) {
            script10624(48289, 1);
            script10624(48290, 0);
            return;
        };
        if ((STAT(28) < STAT_BASE(28))) {
            script10624(48289, 0);
            script10624(48290, 1);
            return;
        };
    };
    script10624(48289, 0);
    script10624(48290, 0);
    return;
}