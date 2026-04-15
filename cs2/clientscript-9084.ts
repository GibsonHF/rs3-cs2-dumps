//
function script9084(int0: unknown_int): void {
    if ((int0 == 1)) {
        varclient_2873 = 17;
        if ((varclient_2753 == 1)) {
            IF_SETONKEY(callback(script7664, -2147483640, -2147483639, -2147483645, 0), 92078092);
            IF_SETONKEY(callback(), 92078106);
        } else {
            IF_SETONKEY(callback(script7664, -2147483640, -2147483639, -2147483645, 0), 92078106);
            IF_SETONKEY(callback(), 92078092);
        };
    } else {
        if ((varclient_2873 == 17)) {
            varclient_2873 = 0;
        };
        IF_SETONKEY(callback(), comp(1405, 12));
        IF_SETONKEY(callback(), 92078106);
        script1594();
    };
    return;
}