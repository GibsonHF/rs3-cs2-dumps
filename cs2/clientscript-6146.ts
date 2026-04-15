//
function script6146(int0: component): void {
    var int1 = 1;
    if ((RANDOM(2) == 0)) {
        int1 = (0 - int1);
    };
    switch (varclient_1903) {
        case 0: {
            CAM_FORCEANGLE(varclient_1908, varclient_1907);
            script6147(int0, RANDOM(8), (400 + varclient_1906), -1, int1);
            break;
        }
        case 4: {
            CAM_SMOOTHRESET();
            break;
        }
    };
    return;
}