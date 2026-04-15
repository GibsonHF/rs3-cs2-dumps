//
function script10776(int0: int): void {
    if (((int0 < 0) || ((4 * 2) < int0))) {
        var int0 = 0;
    };
    IF_SETHIDE(true, comp(1560, 30));
    IF_SETHIDE(true, comp(1560, 39));
    IF_SETHIDE(true, comp(1560, 48));
    IF_SETHIDE(true, comp(1560, 57));
    IF_SETHIDE(true, comp(1560, 111));
    IF_SETHIDE(true, comp(1560, 84));
    IF_SETHIDE(true, comp(1560, 75));
    IF_SETHIDE(true, comp(1560, 66));
    IF_SETHIDE(true, comp(1560, 120));
    IF_SETHIDE(true, comp(1560, 17));
    IF_SETHIDE(true, comp(1560, 18));
    IF_SETHIDE(true, comp(1560, 19));
    IF_SETHIDE(true, comp(1560, 20));
    IF_SETHIDE(true, comp(1560, 22));
    if ((varclient_4665 == 1)) {
        IF_SETHIDE(false, comp(1560, 32));
        IF_SETHIDE(false, comp(1560, 17));
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
            IF_SETHIDE(false, comp(1560, 86));
            IF_SETHIDE(false, comp(1560, 77));
            IF_SETHIDE(false, comp(1560, 122));
            int0 = 5;
        } else {
            IF_SETHIDE(true, comp(1560, 86));
            IF_SETHIDE(true, comp(1560, 77));
            IF_SETHIDE(true, comp(1560, 122));
        };
    } else {
        IF_SETHIDE(true, comp(1560, 32));
        if ((int0 > 4)) {
            int0 = 0;
        } else {
            varclient_4666 = int0;
        };
        if ((varplayer_4985 == 1)) {
            IF_SETHIDE(false, comp(1560, 41));
            IF_SETHIDE(false, comp(1560, 50));
            IF_SETHIDE(false, comp(1560, 113));
            if ((int0 > 1)) {
                int0 = 0;
            };
        } else {
            IF_SETHIDE(true, comp(1560, 41));
            IF_SETHIDE(true, comp(1560, 50));
            IF_SETHIDE(true, comp(1560, 113));
        };
    };
    switch (int0) {
        case 0: {
            IF_SETHIDE(false, comp(1560, 30));
            IF_SETHIDE(false, comp(1560, 17));
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1560, 39));
            IF_SETHIDE(false, comp(1560, 18));
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1560, 48));
            IF_SETHIDE(false, comp(1560, 19));
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1560, 57));
            IF_SETHIDE(false, comp(1560, 20));
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1560, 111));
            IF_SETHIDE(false, comp(1560, 22));
            break;
        }
        case 6: {
            IF_SETHIDE(false, comp(1560, 84));
            IF_SETHIDE(false, comp(1560, 18));
            break;
        }
        case 7: {
            IF_SETHIDE(false, comp(1560, 75));
            IF_SETHIDE(false, comp(1560, 19));
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(1560, 66));
            IF_SETHIDE(false, comp(1560, 20));
            break;
        }
        case 8: {
            IF_SETHIDE(false, comp(1560, 120));
            IF_SETHIDE(false, comp(1560, 22));
            break;
        }
    };
    return;
}