//
function script6143(int0: unknown_int, int1: unknown_int): void {
    switch (int0) {
        case 1: {
            IF_SETHIDE(true, comp(1270, 67));
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(1270, 68));
            break;
        }
        case 3: {
            IF_SETHIDE(true, comp(1270, 69));
            break;
        }
    };
    var int2 = 0;
    if ((IF_GETHIDE(comp(1270, 10)) == false)) {
        int2 = (int2 + 1);
    };
    if ((IF_GETHIDE(comp(1270, 26)) == false)) {
        int2 = (int2 + 1);
    };
    if ((IF_GETHIDE(comp(1270, 28)) == false)) {
        int2 = (int2 + 1);
    };
    switch (int2) {
        case 0: {
            IF_SETHIDE(false, comp(1270, 10));
            if ((int1 == 1)) {
                IF_SETHIDE(false, comp(1270, 39));
                IF_SETHIDE(false, comp(1270, 11));
            } else {
                IF_SETHIDE(false, comp(1270, 36));
            };
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1270, 26));
            if ((int1 == 1)) {
                IF_SETHIDE(false, comp(1270, 40));
                IF_SETHIDE(false, comp(1270, 27));
            } else {
                IF_SETHIDE(false, comp(1270, 37));
            };
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1270, 28));
            if ((int1 == 1)) {
                IF_SETHIDE(false, comp(1270, 41));
                IF_SETHIDE(false, comp(1270, 29));
            } else {
                IF_SETHIDE(false, comp(1270, 38));
            };
            break;
        }
    };
    return;
}