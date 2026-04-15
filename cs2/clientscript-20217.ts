//
function script20217(): void {
    if ((varbitplayer_58385 != 1)) {
        varbitplayer_58385 = 1;
        IF_SETPARAM_INT(8058, 1, comp(1401, 3));
        IF_SETONTIMER(callback(script20219, CLIENTCLOCK()), comp(1401, 3));
    };
    return;
}