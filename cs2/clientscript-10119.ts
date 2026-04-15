//
function script10119(int0: unknown_int): void {
    IF_SETONKEY(callback(), comp(232, 87));
    IF_SETONTIMER(callback(), 15204439);
    IF_SETONKEY(callback(), 15204445);
    IF_SETONTIMER(callback(), 15204445);
    IF_SETONKEY(callback(), 15204468);
    IF_SETONTIMER(callback(), 15204468);
    IF_SETHIDE(1, 15204444);
    IF_SETHIDE(1, 15204438);
    IF_SETHIDE(1, 15204467);
    if ((int0 == 0)) {
        return;
    };
    switch (varbitclient_23065) {
        case 1: {
            if ((int0 == 1)) {
                IF_SETONKEY(callback(script10120, 15204439, -2147483639, -2147483640, 15204438), 15204439);
                IF_SETONTIMER(callback(script1400, CLIENTCLOCK(), 15204438), 15204439);
            };
            break;
        }
        case 2: {
            if ((int0 == 1)) {
                IF_SETONKEY(callback(script10120, 15204445, -2147483639, -2147483640, 15204444), 15204445);
                IF_SETONTIMER(callback(script1400, CLIENTCLOCK(), 15204444), 15204445);
            };
            break;
        }
        case 3: {
            if ((int0 == 1)) {
                IF_SETONKEY(callback(script10120, 15204468, -2147483639, -2147483640, 15204467), 15204468);
                IF_SETONTIMER(callback(script1400, CLIENTCLOCK(), 15204467), 15204468);
            };
            break;
        }
        default: {
            return;
        }
    };
    return;
}