//
function script6152(int0: unknown_int): void {
    varclient_1888 = (varclient_1888 + 1);
    switch (int0) {
        case 1: {
            if ((varclient_1888 > 50)) {
                varclient_1888 = 0;
                IF_SETTRANS(255, comp(1268, 2));
                IF_SETONTIMER(callback(script6152, 2), comp(1268, 0));
            } else {
                IF_SETONTIMER(callback(script6152, 1), comp(1268, 0));
                IF_SETTRANS(SCALE(varclient_1888, 50, 255), 83099650);
            };
            break;
        }
        case 2: {
            if ((varclient_1888 > 150)) {
                varclient_1888 = 0;
                IF_SETONTIMER(callback(script6152, 3), comp(1268, 0));
            } else {
                IF_SETONTIMER(callback(script6152, 2), comp(1268, 0));
            };
            break;
        }
        case 3: {
            if ((varclient_1888 > 50)) {
                varclient_1888 = 0;
                IF_SETTRANS(0, comp(1268, 2));
                IF_SETONTIMER(callback(script6152, 4), comp(1268, 0));
                IF_SETHIDE(1, 83099650);
                IF_SETHIDE(1, 83099649);
            } else {
                IF_SETONTIMER(callback(script6152, 3), comp(1268, 0));
                IF_SETTRANS((255 - SCALE(varclient_1888, 50, 255)), 83099650);
            };
            break;
        }
        case 4: {
            if ((varclient_1888 > 150)) {
                varclient_1888 = 0;
                IF_SETTRANS(255, comp(1268, 0));
                IF_SETONTIMER(callback(), comp(1268, 0));
            } else {
                IF_SETONTIMER(callback(script6152, 4), comp(1268, 0));
                IF_SETTRANS(SCALE(varclient_1888, 150, 255), 83099648);
            };
            break;
        }
    };
    return;
}