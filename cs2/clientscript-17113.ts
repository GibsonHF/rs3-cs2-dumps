//
function script17113(): void {
    if (((varbitplayer_52412 > 0) && (varclient_815 > 0))) {
        varclient_815 = (varclient_815 - 1);
        script17114();
    } else if ((((varbitplayer_52409 > 0) || (varbitplayer_52410 > 0)) || (varbitplayer_52411 > 0))) {
        script2436(0);
        script17115();
    } else {
        IF_SETHIDE(true, comp(1483, 1));
        script2436(1);
    };
    return;
}