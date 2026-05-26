//
function script18895(): void {
    var int0 = script15113();
    if ((varclient_7418 <= (int0 - 28))) {
        script7871(84148234, 0, 1, 0, 0);
        script7871(84148237, 1, 1, 0, 0);
        IF_SETHIDE(0, 84148236);
        IF_SETHIDE(1, 84148239);
    } else if ((script18855(-1) >= (int0 + 14))) {
        script7871(84148234, 1, 1, 0, 0);
        script7871(84148237, 0, 1, 0, 0);
        IF_SETHIDE(1, 84148236);
        IF_SETHIDE(0, 84148239);
    } else {
        script7871(84148234, 1, 1, 0, 0);
        script7871(84148237, 1, 1, 0, 0);
        IF_SETHIDE(1, 84148236);
        IF_SETHIDE(1, 84148239);
    };
    return;
}