//
function script14729(int0: number): void {
    switch (int0) {
        case 18: {
            if ((script9571(691) == 1)) {
                if ((IF_GETHIDE(45285449) == 0)) {
                    IF_SETHIDE(1, 45285449);
                    return;
                };
            } else if ((script9571(693) == 1)) {
                if ((IF_GETHIDE(45416565) == 0)) {
                    IF_TRIGGEROP(45416566, 0, 1);
                    return;
                };
                if ((IF_GETHIDE(45416478) == 0)) {
                    script14890();
                    return;
                };
            };
            if (((script4550(168) == 1) && (IF_GETHIDE(11010085) == 0))) {
                IF_TRIGGEROP(55574560, -1, 1);
                return;
            };
            if ((script9571(422) == 1)) {
                IF_TRIGGEROP(27656233, -1, 1);
                return;
            };
            if (((script9571(1222) == 1) && (IF_GETHIDE(80084997) == 0))) {
                script17753();
                return;
            };
            if ((script9571(1318) == 1)) {
                IF_TRIGGEROP(86376449, -1, 1);
            };
            if ((script9572(1485) == 1)) {
                IF_TRIGGEROP(97321035, -1, 1);
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
            if ((IF_GETHIDE(6881479) == 0)) {
                IF_TRIGGEROP(6881481, -1, 1);
                return;
            };
            break;
        }
        case 95: {
            if ((IF_GETHIDE(55050247) == 0)) {
                script3196();
            } else if ((IF_GETHIDE(55050245) == 0)) {
                IF_SETHIDE(1, 55050245);
            } else {
                IF_SETHIDE(0, 55050245);
            };
            break;
        }
        case 96: {
            if ((IF_GETHIDE(56360964) == 0)) {
                IF_SETHIDE(1, 56360964);
            } else {
                IF_TRIGGEROP(56361011, -1, 1);
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