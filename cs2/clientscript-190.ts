//
function script190(): void {
    if ((script6431() == true)) {
        varclient_1971 = MAX(MIN(varclient_1971, 9000), 1860);
    } else {
        varclient_1971 = MAX(MIN(varclient_1971, 7600), 1860);
    };
    script8776();
    CAM2_SETPOSITIONANGULARINTERPOLATION(300);
    return;
}