//
function script3906(): void {
    if ((STAT(10) > STAT_BASE(10))) {
        script10624(40381, 0);
        return;
    };
    if ((STAT(10) < STAT_BASE(10))) {
        script10624(40381, 1);
        return;
    };
    script10624(40381, 0);
    return;
}