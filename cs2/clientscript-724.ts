//
function script724(): void {
    var int0 = 0;
    if (((varclient_4677 == varbitplayer_19949) || (varclient_4677 == 4))) {
        int0 = 1;
    };
    switch (varbitplayer_19949) {
        case 1: {
            script188();
            break;
        }
        case 2: {
            script6387();
            break;
        }
        case 3: {
            script6503();
            break;
        }
        case 4: {
            script15714();
            break;
        }
        case 5: {
            script15952();
            break;
        }
        default: {
            script190();
            break;
        }
    };
    varclient_4677 = varbitplayer_19949;
    CAM2_SETCOLLISIONMODE(1, 1);
    if ((HAS_NXT() == 0)) {
        CAM2_SETDEPTHPLANES(50, 14847);
    } else {
        CAM2_SETDEPTHPLANES(-1, -1);
    };
    script8000();
    CAM2_SETPOSITIONANGULARINTERPOLATION(1000);
    if ((int0 == 1)) {
        script8767(varclient_5114, varclient_5115, varclient_1971);
    } else {
        script8767(1983, 8139, varclient_1971);
    };
    return;
}