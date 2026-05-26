//
function script11010(int0: number): void {
    var int1 = script11011(varbitplayer_673, varbitplayer_675, varbitplayer_674);
    switch (int0) {
        case 3: {
            if ((varbitplayer_674 != 1023)) {
                if ((struct_getparam(int1, 2532) != 1)) {
                    IF_SETHIDE(0, 85918256);
                };
            } else {
                IF_SETHIDE(0, 85918214);
                IF_SETHIDE(0, 85918256);
                IF_SETHIDE(1, 85918269);
                IF_SETHIDE(1, 85918276);
            };
            break;
        }
        case 4: {
            if ((varbitplayer_674 != 1023)) {
                if ((struct_getparam(int1, 2532) != 1)) {
                    IF_SETHIDE(1, 85918256);
                };
            } else {
                IF_SETHIDE(0, 85918269);
                IF_SETHIDE(0, 85918276);
                IF_SETHIDE(0, 85918076);
                IF_SETHIDE(1, 85918214);
                IF_SETHIDE(1, 85918256);
                IF_SETHIDE(1, 85918114);
                IF_SETHIDE(1, 85918098);
                IF_SETHIDE(1, 85918215);
                IF_SETHIDE(1, 85918104);
                IF_SETHIDE(0, 85918115);
            };
            break;
        }
        case 5: {
            if ((varbitplayer_674 != 1023)) {
            } else {
                IF_SETHIDE(0, 85918115);
                IF_SETHIDE(0, 85918114);
                IF_SETHIDE(0, 85918098);
                IF_SETHIDE(0, 85918215);
                IF_SETHIDE(0, 85918104);
                IF_SETHIDE(1, 85918076);
            };
            break;
        }
        default: {
            return;
        }
    };
    return;
}