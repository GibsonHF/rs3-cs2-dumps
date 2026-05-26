//
function script18051(): void {
    script18052();
    if ((varclient_7306 > 0)) {
        varclient_7306 = (varclient_7306 - 1);
    };
    if ((varclient_7306 <= 0)) {
        IF_SETONTIMER(callback(), 80347144);
        script18055();
    } else {
        IF_SETONTIMER(callback(script18051), 80347144);
    };
    return;
}