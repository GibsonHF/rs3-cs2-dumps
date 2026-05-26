//
function script3903(): void {
    if ((STAT(14) > STAT_BASE(14))) {
        script10624(40253, 0);
        return;
    };
    if ((STAT(14) < STAT_BASE(14))) {
        script10624(40253, 1);
        return;
    };
    script10624(40253, 0);
    return;
}