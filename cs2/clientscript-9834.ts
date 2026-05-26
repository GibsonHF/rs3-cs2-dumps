//
function script9834(): void {
    script9836();
    IF_SETONVARCTRANSMIT(callback(script9835, 4200, 1), 88473626);
    if ((varclient_4199 > CLIENTCLOCK())) {
        IF_SETHIDE(0, 88473609);
        IF_SETHIDE(0, 88473610);
        IF_SETHIDE(0, 88473634);
        IF_SETHIDE(0, 88473642);
        IF_SETHIDE(0, 88473650);
        IF_SETHIDE(0, 88473658);
        varclient_4198 = ((varclient_4199 - CLIENTCLOCK()) / 50);
        script9842();
    } else {
        IF_SETONTIMER(callback(), 13107269);
        IF_SETHIDE(1, 88473609);
        IF_SETHIDE(1, 88473610);
        IF_SETHIDE(1, 88473634);
        IF_SETHIDE(1, 88473642);
        IF_SETHIDE(1, 88473650);
        IF_SETHIDE(1, 88473658);
    };
    return;
}