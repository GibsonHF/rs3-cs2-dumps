//
function script18163(): void {
    if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        IF_SETTEXT(script18166(), comp(584, 8));
        script18167(0);
        if ((varbitplayer_54479 == 0)) {
            if (((varclient_6728 > 0) || (varclient_6727 > 0))) {
                script18164();
            } else {
                script18165();
            };
        } else if (((varclient_7340 > 0) || (varclient_7339 > 0))) {
            script18165();
        } else {
            script18164();
        };
    };
    return;
}