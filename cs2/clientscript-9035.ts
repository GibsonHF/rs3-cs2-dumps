//
function script9035(): void {
    varclient_6745 = (varclient_6745 - 1);
    if ((varclient_6745 <= 0)) {
        script6999(1);
        IF_SETONTIMER(callback(), comp(1477, 7));
        varclient_6745 = 0;
    };
    return;
}