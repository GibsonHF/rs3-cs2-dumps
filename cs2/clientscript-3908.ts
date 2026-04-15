//
function script3908(): void {
    if ((STAT(21 as stat) > STAT_BASE(21 as stat))) {
        script10624(40414 as struct, 0);
        return;
    };
    if ((STAT(21 as stat) < STAT_BASE(21 as stat))) {
        script10624(40414 as struct, 1);
        return;
    };
    script10624(40414 as struct, 0);
    return;
}