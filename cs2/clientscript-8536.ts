//
function script8536(int0: unknown_int): void {
    if ((int0 == 1)) {
        if ((((varclient_5 == 0) || (IF_HASSUBOVERLAY(comp(1418, 2), 1469 as overlayinterface) == 0)) || (IF_GETHIDE(comp(1418, 3)) == true))) {
            script8841(10, 0);
            script1594();
        } else {
            varclient_2873 = 10;
            IF_SETONKEY(callback(script112, -2147483640, -2147483639), comp(1469, 4));
        };
    } else {
        varclient_6754 = 1;
        if ((varclient_2873 == 10)) {
            varclient_2873 = 0;
        };
        IF_SETONKEY(callback(), comp(1469, 4));
        script1594();
    };
    return;
}