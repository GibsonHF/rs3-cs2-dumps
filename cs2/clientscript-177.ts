//
function script177(int0: unknown_int): void {
    if ((int0 == 1)) {
        script1558(varclient_2231, 0);
        script7172(varclient_2231);
        if ((script8586(varclient_2231) != comp(-1, 65535))) {
            IF_SETONKEY(callback(script1059, -2147483640, -2147483639), script8586(varclient_2231));
        };
    } else {
        varclient_6754 = 1;
        script7172(-1);
        script1558(varclient_2231, 0);
        if ((script8586(varclient_2231) != comp(-1, 65535))) {
            IF_SETONKEY(callback(), script8586(varclient_2231));
        };
    };
    return;
}