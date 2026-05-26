//
function script6152(int0: number): void {
    varclient_1888 = (varclient_1888 + 1);
    switch (int0) {
        case 1: {
            if ((varclient_1888 > 50)) {
                varclient_1888 = 0;
                IF_SETTRANS(255, 83099650);
                IF_SETONTIMER(callback(script6152, 2), 83099648);
            } else {
                IF_SETONTIMER(callback(script6152, 1), 83099648);
                IF_SETTRANS(SCALE(varclient_1888, 50, 255), 83099650);
            };
            break;
        }
        case 2: {
            if ((varclient_1888 > 150)) {
                varclient_1888 = 0;
                IF_SETONTIMER(callback(script6152, 3), 83099648);
            } else {
                IF_SETONTIMER(callback(script6152, 2), 83099648);
            };
            break;
        }
        case 3: {
            if ((varclient_1888 > 50)) {
                varclient_1888 = 0;
                IF_SETTRANS(0, 83099650);
                IF_SETONTIMER(callback(script6152, 4), 83099648);
                IF_SETHIDE(1, 83099650);
                IF_SETHIDE(1, 83099649);
            } else {
                IF_SETONTIMER(callback(script6152, 3), 83099648);
                IF_SETTRANS((255 - SCALE(varclient_1888, 50, 255)), 83099650);
            };
            break;
        }
        case 4: {
            if ((varclient_1888 > 150)) {
                varclient_1888 = 0;
                IF_SETTRANS(255, 83099648);
                IF_SETONTIMER(callback(), 83099648);
            } else {
                IF_SETONTIMER(callback(script6152, 4), 83099648);
                IF_SETTRANS(SCALE(varclient_1888, 150, 255), 83099648);
            };
            break;
        }
    };
    return;
}