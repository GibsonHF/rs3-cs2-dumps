//
function script10119(int0: number): void {
    IF_SETONKEY(callback(), comp(232, 87));
    IF_SETONTIMER(callback(), comp(232, 87));
    IF_SETONKEY(callback(), comp(232, 93));
    IF_SETONTIMER(callback(), comp(232, 93));
    IF_SETONKEY(callback(), comp(232, 116));
    IF_SETONTIMER(callback(), comp(232, 116));
    IF_SETHIDE(true, comp(232, 92));
    IF_SETHIDE(true, comp(232, 86));
    IF_SETHIDE(true, comp(232, 115));
    if ((int0 == 0)) {
        return;
    };
    switch (varbitclient_23065) {
        case 1: {
            if ((int0 == 1)) {
                IF_SETONKEY(callback(script10120, 15204439, -2147483639, -2147483640, 15204438), comp(232, 87));
                IF_SETONTIMER(callback(script1400, CLIENTCLOCK(), 15204438), comp(232, 87));
            };
            break;
        }
        case 2: {
            if ((int0 == 1)) {
                IF_SETONKEY(callback(script10120, 15204445, -2147483639, -2147483640, 15204444), comp(232, 93));
                IF_SETONTIMER(callback(script1400, CLIENTCLOCK(), 15204444), comp(232, 93));
            };
            break;
        }
        case 3: {
            if ((int0 == 1)) {
                IF_SETONKEY(callback(script10120, 15204468, -2147483639, -2147483640, 15204467), comp(232, 116));
                IF_SETONTIMER(callback(script1400, CLIENTCLOCK(), 15204467), comp(232, 116));
            };
            break;
        }
        default: {
            return;
        }
    };
    return;
}