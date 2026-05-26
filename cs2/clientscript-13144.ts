//
function script13144(int0: number): void {
    if ((TESTBIT(varclient_841, int0) == 0)) {
        return;
    };
    var int1 = -1;
    switch (int0) {
        case 1: {
            int1 = 85590022;
            break;
        }
        case 2: {
            int1 = 85590029;
            break;
        }
        case 3: {
            int1 = 85590036;
            break;
        }
        case 4: {
            int1 = 85590043;
            break;
        }
        case 5: {
            int1 = 85590050;
            break;
        }
        case 6: {
            int1 = 85590057;
            break;
        }
        case 7: {
            int1 = 85590064;
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