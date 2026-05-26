//
function script3908(): void {
    if ((STAT(21) > STAT_BASE(21))) {
        script10624(40414, 0);
        return;
    };
    if ((STAT(21) < STAT_BASE(21))) {
        script10624(40414, 1);
        return;
    };
    script10624(40414, 0);
    return;
}