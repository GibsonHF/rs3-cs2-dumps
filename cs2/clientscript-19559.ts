//
function script19559(): void {
    IF_SETHIDE(true, comp(1313, 73));
    IF_SETHIDE(true, comp(1313, 71));
    script19504();
    script19526();
    varclient_6711 = "";
    varclient_6684 = false;
    if ((CC_FIND(comp(1313, 118), 14) == 1)) {
        CC_SETTEXT(`${varclient_8166} Storage`);
    };
    IF_SETONTIMER(callback(), comp(1313, 93));
    IF_SETONTIMER(callback(), 86048863);
    if (((varclient_2236 == 8) && (varclient_2235 == comp(1313, 96)))) {
        script9(comp(1313, 97), comp(1313, 98), comp(1313, 99), comp(1313, 101), "Search...");
        script8841(11, 0);
    };
    IF_SETHIDE(true, comp(1313, 115));
    return;
}