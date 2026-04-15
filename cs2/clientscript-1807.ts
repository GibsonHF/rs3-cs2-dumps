//
function script1807(int0: unknown_int, int1: component, int2: component): void {
    if ((script42(varclient_266) == 0)) {
        varclient_2409 = "";
        varclient_2410 = "";
        varclient_266 = true;
    };
    script1809(int0, int1, int2);
    IF_SETONVARCSTRTRANSMIT(callback(script1808, int0, int1, int2, 2409, 1), int0);
    IF_SETONCHATTRANSMIT(callback(script1810, int0, int1, int2), int0);
    return;
}