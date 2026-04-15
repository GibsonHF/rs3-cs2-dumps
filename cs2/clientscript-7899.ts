//
function script7899(int0: int, int1: int, int2: int, int3: int): void {
    if ((int1 < 0)) {
        if ((varclient_3493 == 1)) {
            script7913();
        };
        varclient_3493 = 0;
        IF_SETONTIMER(callback(), comp(1420, 11));
        return;
    };
    if ((int1 >= 600)) {
        var int1 = 600;
        if ((varclient_3484 == 0)) {
            varclient_3493 = 1;
        };
    };
    if (((int1 > 450) && (varclient_3484 == 0))) {
        varclient_3493 = 1;
    };
    if ((CLIENTCLOCK() < int0)) {
        if (((varclient_3482 != 1) && (varclient_3482 != 5))) {
            varclient_3487 = (varclient_3487 + (int1 * int2));
            if ((varclient_3487 > 2047)) {
                varclient_3487 = (varclient_3487 - 2047);
            } else if ((varclient_3487 < 0)) {
                varclient_3487 = (2047 - (0 - varclient_3487));
            };
        } else {
            varclient_6880 = MODULO(((2047 + varclient_6880) + (int1 * int2)), 2047);
            if ((((int2 == 1) && (varclient_6880 > 512)) && (varclient_6880 < 1572))) {
                varclient_6880 = 512;
            } else if ((((int2 == -1) && (varclient_6880 > 512)) && (varclient_6880 < 1572))) {
                varclient_6880 = 1572;
            };
        };
        if ((IF_GETHIDE(comp(1420, 46)) == false)) {
            IF_SETMODELANGLE(0, -17, 110, varclient_3487, 0, 370, comp(1420, 46));
        };
        if ((IF_GETHIDE(comp(1420, 47)) == false)) {
            IF_SETMODELANGLE(0, 0, 0, varclient_6880, 0, 950, comp(1420, 47));
        };
        IF_SETONTIMER(callback(script7899, int0, (int1 - int3), int2, int3), 93061131);
    } else {
        switch (int3) {
            case 50: {
                var int3 = 30;
                break;
            }
            case 30: {
                int3 = 20;
                break;
            }
            case 20: {
                int3 = 10;
                break;
            }
        };
        IF_SETONTIMER(callback(script7899, (CLIENTCLOCK() + 10), (int1 - int3), int2, int3), 93061131);
    };
    return;
}