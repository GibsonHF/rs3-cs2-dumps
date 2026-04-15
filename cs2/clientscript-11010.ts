//
function script11010(int0: unknown_int): void {
    var int1 = script11011(varbitplayer_673, varbitplayer_675, varbitplayer_674);
    switch (int0) {
        case 3: {
            if ((varbitplayer_674 != 1023)) {
                if ((struct_getparam(int1, 2532) != 1)) {
                    IF_SETHIDE(false, comp(1311, 560));
                };
            } else {
                IF_SETHIDE(false, comp(1311, 518));
                IF_SETHIDE(false, comp(1311, 560));
                IF_SETHIDE(true, comp(1311, 573));
                IF_SETHIDE(true, comp(1311, 580));
            };
            break;
        }
        case 4: {
            if ((varbitplayer_674 != 1023)) {
                if ((struct_getparam(int1, 2532) != 1)) {
                    IF_SETHIDE(true, comp(1311, 560));
                };
            } else {
                IF_SETHIDE(false, comp(1311, 573));
                IF_SETHIDE(false, comp(1311, 580));
                IF_SETHIDE(false, comp(1311, 380));
                IF_SETHIDE(true, comp(1311, 518));
                IF_SETHIDE(true, comp(1311, 560));
                IF_SETHIDE(true, comp(1311, 418));
                IF_SETHIDE(true, comp(1311, 402));
                IF_SETHIDE(true, comp(1311, 519));
                IF_SETHIDE(true, comp(1311, 408));
                IF_SETHIDE(false, comp(1311, 419));
            };
            break;
        }
        case 5: {
            if ((varbitplayer_674 != 1023)) {
            } else {
                IF_SETHIDE(false, comp(1311, 419));
                IF_SETHIDE(false, comp(1311, 418));
                IF_SETHIDE(false, comp(1311, 402));
                IF_SETHIDE(false, comp(1311, 519));
                IF_SETHIDE(false, comp(1311, 408));
                IF_SETHIDE(true, comp(1311, 380));
            };
            break;
        }
        default: {
            return;
        }
    };
    return;
}