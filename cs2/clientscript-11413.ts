//
function script11413(): void {
    script8843(70, 1);
    var int0 = script6539();
    if ((int0 != -1)) {
        varclient_4811 = 1;
        varclient_4812 = int0;
    } else {
        varclient_4811 = 0;
        script8311(2);
        return;
    };
    if ((varclient_4812 == 2)) {
        return;
    };
    if ((script6431() == true)) {
        script8311(2);
    } else {
        script8313(2);
    };
    return;
}