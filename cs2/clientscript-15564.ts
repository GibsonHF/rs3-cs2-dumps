//
function script15564(): void {
    varclient_1394 = CLIENTOPTION_GET(26);
    CLIENTOPTION_SET(23, varclient_1394);
    varbitclient_38833 = varclient_1394;
    if (((varclient_1394 <= 0) || (varclient_1394 > 255))) {
        varclient_1394 = 127;
    };
    script15562(varclient_1394);
    return;
}