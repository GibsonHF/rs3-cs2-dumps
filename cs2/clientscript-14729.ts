//
function script14729(int0: int): void {
    switch (int0) {
        case 18: {
            if ((script9571(691 as interface) == 1)) {
                if ((IF_GETHIDE(comp(691, 73)) == false)) {
                    IF_SETHIDE(true, comp(691, 73));
                    return;
                };
            } else if ((script9571(693 as interface) == 1)) {
                if ((IF_GETHIDE(comp(693, 117)) == false)) {
                    IF_TRIGGEROP(comp(693, 118), 0, 1);
                    return;
                };
                if ((IF_GETHIDE(comp(693, 30)) == false)) {
                    script14890();
                    return;
                };
            };
            if (((script4550(168 as interface) == 1) && (IF_GETHIDE(comp(168, 37)) == false))) {
                IF_TRIGGEROP(comp(848, 32), -1, 1);
                return;
            };
            if ((script9571(422 as interface) == 1)) {
                IF_TRIGGEROP(comp(422, 41), -1, 1);
                return;
            };
            if (((script9571(1222 as interface) == 1) && (IF_GETHIDE(comp(1222, 5)) == false))) {
                script17753();
                return;
            };
            if ((script9571(1318 as interface) == 1)) {
                IF_TRIGGEROP(comp(1318, 1), -1, 1);
            };
            if ((script9572(1485 as overlayinterface) == 1)) {
                IF_TRIGGEROP(comp(1485, 75), -1, 1);
            };
            script675();
            break;
        }
        case 91:
        case 93: {
            script14797();
            break;
        }
        case 99: {
            script17815();
            break;
        }
        case 82: {
            if ((IF_GETHIDE(comp(105, 199)) == false)) {
                IF_TRIGGEROP(comp(105, 201), -1, 1);
                return;
            };
            break;
        }
        case 95: {
            if ((IF_GETHIDE(comp(840, 7)) == false)) {
                script3196();
            } else if ((IF_GETHIDE(comp(840, 5)) == false)) {
                IF_SETHIDE(true, comp(840, 5));
            } else {
                IF_SETHIDE(false, comp(840, 5));
            };
            break;
        }
        case 96: {
            if ((IF_GETHIDE(comp(860, 4)) == false)) {
                IF_SETHIDE(true, comp(860, 4));
            } else {
                IF_TRIGGEROP(comp(860, 51), -1, 1);
            };
            break;
        }
        case 1: {
            script3555();
            break;
        }
    };
    return;
}