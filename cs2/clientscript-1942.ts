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
    IF_SETTRANS(varclient_559, 53018630);
    if ((varclient_561 < 4)) {
        if ((IF_GETHIDE(53018631) == 1)) {
            varclient_562 = MIN(20, (varclient_562 + 1));
            if ((varclient_562 == 20)) {
                varclient_562 = 0;
                IF_SETHIDE(0, 53018631);
            };
        } else {
            varclient_562 = MIN(35, (varclient_562 + 1));
            if ((varclient_562 == 35)) {
                varclient_562 = 0;
                IF_SETHIDE(1, 53018631);
                varclient_561 = MIN(4, (varclient_561 + 1));
            };
        };
    };
    return;
}