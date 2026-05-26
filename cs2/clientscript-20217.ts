//
function script20217(): void {
    if ((varbitplayer_58385 != 1)) {
        varbitplayer_58385 = 1;
        IF_SETPARAM_INT(8058, 1, 91815939);
        IF_SETONTIMER(callback(script20219, CLIENTCLOCK()), 91815939);
    };
    return;
}