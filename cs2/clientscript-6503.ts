//
function script6503(): void {
    if ((script6431() == true)) {
        varclient_1971 = MAX(MIN(varclient_1971, 9000), 1350);
    } else {
        varclient_1971 = MAX(MIN(varclient_1971, 12000), 1350);
    };
    CAM2_SETLINEARMOVEMENTMODE(1);
    CAM2_SETPOSITIONANGULARINTERPOLATION(300);
    return;
}