//
function script8748(): void {
    if ((varbitplayer_38842 == 1)) {
        return;
    };
    script2462();
    script8179();
    script8390(2000);
    script8751(1);
    if ((enum_hasoutput(0, 10781 as cs2enum, varclient_8372) == 1)) {
        varclient_8373 = varclient_8372;
    } else {
        varclient_8373 = 6;
    };
    varclient_8374 = script19718(varclient_8373);
    varclient_8266 = varclient_8373;
    varclient_3478 = varclient_8373;
    varclient_3479 = 0;
    varclient_3480 = 0;
    varclient_3481 = 0;
    IF_SETONTIMER(callback(script8749, -2147483645, 1), struct_getparam(script10405(2000), 3507));
    script19712();
    script19700();
    return;
}