//
function script15706(): void {
    if (((varclient_6888 >= 0) && (varclient_6888 <= 255))) {
        CLIENTOPTION_SET(26, varclient_6888);
        CLIENTOPTION_SET(22, varclient_6888);
    } else if ((varclient_6888 == -1)) {
        varclient_6888 = CLIENTOPTION_GET(26);
    };
    return;
}