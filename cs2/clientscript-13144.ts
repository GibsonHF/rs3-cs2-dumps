//
function script13144(int0: int): void {
    if ((TESTBIT(varclient_841, int0) == 0)) {
        return;
    };
    var int1 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int1 = comp(1306, 6);
            break;
        }
        case 2: {
            int1 = comp(1306, 13);
            break;
        }
        case 3: {
            int1 = comp(1306, 20);
            break;
        }
        case 4: {
            int1 = comp(1306, 27);
            break;
        }
        case 5: {
            int1 = comp(1306, 34);
            break;
        }
        case 6: {
            int1 = comp(1306, 41);
            break;
        }
        case 7: {
            int1 = comp(1306, 48);
            break;
        }
        default: {
            return;
        }
    };
    if ((CC_FIND(int1, 4) == 1)) {
        CC_RESUME_PAUSEBUTTON();
    };
    return;
}