//
function script9084(int0: number): void {
    if ((int0 == 1)) {
        varclient_2873 = 17;
        if ((varclient_2753 == 1)) {
            IF_SETONKEY(callback(script7664, -2147483640, -2147483639, -2147483645, 0), comp(1405, 12));
            IF_SETONKEY(callback(), comp(1405, 26));
        } else {
            IF_SETONKEY(callback(script7664, -2147483640, -2147483639, -2147483645, 0), comp(1405, 26));
            IF_SETONKEY(callback(), comp(1405, 12));
        };
    } else {
        if ((varclient_2873 == 17)) {
            varclient_2873 = 0;
        };
        IF_SETONKEY(callback(), comp(1405, 12));
        IF_SETONKEY(callback(), comp(1405, 26));
        script1594();
    };
    return;
}