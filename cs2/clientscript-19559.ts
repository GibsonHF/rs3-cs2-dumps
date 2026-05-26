//
function script19559(): void {
    IF_SETHIDE(1, 86048841);
    IF_SETHIDE(1, 86048839);
    script19504();
    script19526();
    varclient_6711 = "";
    varclient_6684 = false;
    if ((CC_FIND(86048886, 14) == 1)) {
        CC_SETTEXT(`${varclient_8166} Storage`);
    };
    IF_SETONTIMER(callback(), 86048861);
    IF_SETONTIMER(callback(), 86048863);
    if (((varclient_2236 == 8) && (varclient_2235 == comp(1313, 96)))) {
        script9(86048865, 86048866, 86048867, 86048869, "Search...");
        script8841(11, 0);
    };
    IF_SETHIDE(1, 86048883);
    return;
}