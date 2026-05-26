//
function script12307(): void {
    CC_DELETEALL(comp(1477, 13));
    if ((varbitclient_30618 == 2)) {
        varclient_5157 = 30;
        varclient_5158 = 10;
    } else {
        varclient_5157 = 750;
        varclient_5158 = 30;
    };
    varclient_5159 = MODULO(CLIENTCLOCK(), varclient_5157);
    var int0 = -1;
    while ((++int0 < 256)) {
        CC_CREATE(comp(1477, 13), 3, int0);
        cc_setparam(5946, 0);
    };
    script12308();
    return;
}