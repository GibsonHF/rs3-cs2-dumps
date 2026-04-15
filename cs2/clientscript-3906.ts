//
function script3906(): void {
    if ((STAT(10 as stat) > STAT_BASE(10 as stat))) {
        script10624(40381 as struct, 0);
        return;
    };
    if ((STAT(10 as stat) < STAT_BASE(10 as stat))) {
        script10624(40381 as struct, 1);
        return;
    };
    script10624(40381 as struct, 0);
    return;
}