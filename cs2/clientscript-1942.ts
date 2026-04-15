//
function script1942(): void {
    if ((varclient_560 == 0)) {
        varclient_559 = MIN(255, (varclient_559 + 6));
        if ((varclient_559 == 255)) {
            varclient_560 = 1;
        };
    } else if ((varclient_560 == 1)) {
        varclient_559 = MAX(60, (varclient_559 - 6));
        if ((varclient_559 == 60)) {
            varclient_560 = 0;
        };
    };
    IF_SETTRANS(varclient_559, comp(809, 6));
    if ((varclient_561 < 4)) {
        if ((IF_GETHIDE(comp(809, 7)) == true)) {
            varclient_562 = MIN(20, (varclient_562 + 1));
            if ((varclient_562 == 20)) {
                varclient_562 = 0;
                IF_SETHIDE(false, comp(809, 7));
            };
        } else {
            varclient_562 = MIN(35, (varclient_562 + 1));
            if ((varclient_562 == 35)) {
                varclient_562 = 0;
                IF_SETHIDE(true, comp(809, 7));
                varclient_561 = MIN(4, (varclient_561 + 1));
            };
        };
    };
    return;
}