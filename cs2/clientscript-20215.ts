//
function script20215(): void {
    if ((varbitplayer_58385 == 1)) {
        varbitplayer_58385 = 3;
        IF_SETPARAM_INT(8058, 1, 91815939);
        IF_SETONTIMER(callback(script20218, CLIENTCLOCK()), 91815939);
    };
    return;
}