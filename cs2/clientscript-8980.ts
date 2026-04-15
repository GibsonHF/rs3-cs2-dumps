//
function script8980(int0: int): void {
    varbitplayer_18640 = (int0 + 1);
    IF_SETHIDE(true, comp(1496, 213));
    IF_SETHIDE(true, comp(1496, 218));
    IF_SETHIDE(true, comp(1496, 210));
    IF_SETHIDE(true, comp(1496, 205));
    IF_SETHIDE(true, comp(1496, 195));
    IF_SETHIDE(true, comp(1496, 187));
    IF_SETHIDE(true, comp(1496, 115));
    IF_SETHIDE(true, comp(1496, 116));
    IF_SETHIDE(true, comp(1496, 121));
    IF_SETHIDE(true, comp(1496, 137));
    IF_SETHIDE(true, comp(1496, 146));
    IF_SETHIDE(true, comp(1496, 150));
    IF_SETHIDE(true, comp(1496, 157));
    var int1 = comp(-1, 65535);
    switch (varbitplayer_18639) {
        case 0: {
            int1 = comp(1496, 213);
            break;
        }
        case 1: {
            int1 = comp(1496, 218);
            break;
        }
        case 2: {
            switch (varbitplayer_18640) {
                case 1: {
                    int1 = comp(1496, 210);
                    break;
                }
                case 2: {
                    int1 = comp(1496, 205);
                    break;
                }
                case 3: {
                    int1 = comp(1496, 195);
                    break;
                }
                case 4: {
                    int1 = comp(1496, 187);
                    break;
                }
                case 5: {
                    int1 = comp(1496, 157);
                    break;
                }
                case 6: {
                    int1 = comp(1496, 150);
                    break;
                }
                case 7: {
                    int1 = comp(1496, 146);
                    break;
                }
            };
            break;
        }
        case 3: {
            switch (varbitplayer_18640) {
                case 1: {
                    int1 = comp(1496, 137);
                    break;
                }
                case 2: {
                    int1 = comp(1496, 121);
                    break;
                }
                case 3: {
                    int1 = comp(1496, 116);
                    break;
                }
            };
            break;
        }
        case 4: {
            int1 = comp(1496, 115);
            break;
        }
    };
    IF_SETHIDE(false, int1);
    script8957(script8960(varbitplayer_18639), MAX(0, (varbitplayer_18640 + 0)));
    return;
}