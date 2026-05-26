//
function script3881(): void {
    if ((STAT(8) > STAT_BASE(8))) {
        script10624(39959, 0);
        return;
    };
    if ((STAT(8) < STAT_BASE(8))) {
        script10624(39959, 1);
        return;
    };
    script10624(39959, 0);
    return;
}