//
function script15563(): void {
    var int0 = CLIENTOPTION_GET(23);
    if ((int0 == 0)) {
        if (((varbitclient_38833 > 0) && (varbitclient_38833 <= 255))) {
            CLIENTOPTION_SET(23, varbitclient_38833);
        } else {
            CLIENTOPTION_SET(23, 127);
        };
    } else if ((int0 > 0)) {
        CLIENTOPTION_SET(23, 0);
    };
    script10452(comp(1420, 177), 0, 255, CLIENTOPTION_GET(23));
    script15561();
    return;
}