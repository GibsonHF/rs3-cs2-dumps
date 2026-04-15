//
function script11330(): void {
    var int0 = varclient_4786;
    if ((int0 < 0)) {
        int0 = varbitplayer_27719;
    };
    switch (int0) {
        case 0: {
            IF_SETTEXT("Current Version: Spring Cleaner", comp(1615, 334));
            script11331(0, 3);
            break;
        }
        case 1: {
            IF_SETTEXT("Current Version: Spring Cleaner 2000", comp(1615, 334));
            script11331(3, 6);
            break;
        }
        case 2: {
            IF_SETTEXT("Current Version: Spring Cleaner 3000", comp(1615, 334));
            script11331(6, 8);
            break;
        }
        case 3: {
            IF_SETTEXT("Current Version: Spring Cleaner 5000", comp(1615, 334));
            script11331(8, 10);
            break;
        }
        case 4: {
            IF_SETTEXT("Current Version: Spring Cleaner 9000", comp(1615, 334));
            script11331(10, 11);
            break;
        }
        case 5: {
            IF_SETTEXT("Current Version: Spring Cleaner 9001", comp(1615, 334));
            script11331(11, 11);
            break;
        }
        default: {
            IF_SETTEXT("Current Version: Spring Cleaner", comp(1615, 334));
            script11331(0, 2);
            break;
        }
    };
    return;
}