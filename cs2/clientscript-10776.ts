//
function script10776(int0: number): void {
    if (((int0 < 0) || ((4 * 2) < int0))) {
        var int0 = 0;
    };
    IF_SETHIDE(1, 102236190);
    IF_SETHIDE(1, 102236199);
    IF_SETHIDE(1, 102236208);
    IF_SETHIDE(1, 102236217);
    IF_SETHIDE(1, 102236271);
    IF_SETHIDE(1, 102236244);
    IF_SETHIDE(1, 102236235);
    IF_SETHIDE(1, 102236226);
    IF_SETHIDE(1, 102236280);
    IF_SETHIDE(1, 102236177);
    IF_SETHIDE(1, 102236178);
    IF_SETHIDE(1, 102236179);
    IF_SETHIDE(1, 102236180);
    IF_SETHIDE(1, 102236182);
    if ((varclient_4665 == 1)) {
        IF_SETHIDE(0, 102236192);
        IF_SETHIDE(0, 102236177);
        if ((int0 > 4)) {
            varclient_4666 = int0;
        } else if ((int0 != 0)) {
            int0 = (4 + int0);
            varclient_4666 = int0;
        } else if ((varclient_4666 <= 0)) {
            int0 = (4 + 1);
            varclient_4666 = int0;
        } else {
            int0 = ((MODULO((varclient_4666 - 1), 4) + 4) + 1);
            varclient_4666 = int0;
        };
        if ((varplayer_4985 == 1)) {
            IF_SETHIDE(0, 102236246);
            IF_SETHIDE(0, 102236237);
            IF_SETHIDE(0, 102236282);
            int0 = 5;
        } else {
            IF_SETHIDE(1, 102236246);
            IF_SETHIDE(1, 102236237);
            IF_SETHIDE(1, 102236282);
        };
    } else {
        IF_SETHIDE(1, 102236192);
        if ((int0 > 4)) {
            int0 = 0;
        } else {
            varclient_4666 = int0;
        };
        if ((varplayer_4985 == 1)) {
            IF_SETHIDE(0, 102236201);
            IF_SETHIDE(0, 102236210);
            IF_SETHIDE(0, 102236273);
            if ((int0 > 1)) {
                int0 = 0;
            };
        } else {
            IF_SETHIDE(1, 102236201);
            IF_SETHIDE(1, 102236210);
            IF_SETHIDE(1, 102236273);
        };
    };
    switch (int0) {
        case 0: {
            IF_SETHIDE(0, 102236190);
            IF_SETHIDE(0, 102236177);
            break;
        }
        case 2: {
            IF_SETHIDE(0, 102236199);
            IF_SETHIDE(0, 102236178);
            break;
        }
        case 3: {
            IF_SETHIDE(0, 102236208);
            IF_SETHIDE(0, 102236179);
            break;
        }
        case 1: {
            IF_SETHIDE(0, 102236217);
            IF_SETHIDE(0, 102236180);
            break;
        }
        case 4: {
            IF_SETHIDE(0, 102236271);
            IF_SETHIDE(0, 102236182);
            break;
        }
        case 6: {
            IF_SETHIDE(0, 102236244);
            IF_SETHIDE(0, 102236178);
            break;
        }
        case 7: {
            IF_SETHIDE(0, 102236235);
            IF_SETHIDE(0, 102236179);
            break;
        }
        case 5: {
            IF_SETHIDE(0, 102236226);
            IF_SETHIDE(0, 102236180);
            break;
        }
        case 8: {
            IF_SETHIDE(0, 102236280);
            IF_SETHIDE(0, 102236182);
            break;
        }
    };
    return;
}