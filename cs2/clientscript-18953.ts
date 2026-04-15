//
function script18953(int0: unknown_int): void {
    if ((int0 == 1)) {
        if ((CLIENTOPTION_GET(21) != 0)) {
            varclient_7770 = CLIENTOPTION_GET(21);
            CLIENTOPTION_SET(21, 0);
            script15671();
        };
    } else if ((varclient_7770 > 0)) {
        CLIENTOPTION_SET(21, varclient_7770);
        script15671();
    };
    return;
}