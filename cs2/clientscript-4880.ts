//
function script4880(int0: component): void {
    var string0 = "";
    var int1 = 0;
    var int2 = 0;
    var int3 = 3;
    var int4 = 0;
    var int5 = 2236962;
    var int6 = -1 as graphic;
    var int7 = 0;
    var int8 = script4964(int0);
    var int9 = 0;
    var int10 = 0;
    switch (int0) {
        case 82444447:
        case 82444451:
        case 82444455:
        case 82444459:
        case 82444463:
        case 82444467:
        case 82444471:
        case 82444475:
        case 82444479:
        case 82444483:
        case 82444487:
        case 82444491:
        case 82444495:
        case 82444499:
        case 82444503:
        case 82444507:
        case 82444511:
        case 82444515:
        case 82444519: {
            int10 = 1;
            break;
        }
    };
    if ((CLANPROFILE_FIND() == 1)) {
        CC_DELETEALL(int0);
        script4407(int0, 1, 178 as cursor);
        int7 = script4971(int8);
        int6 = script5171(int7);
        CC_CREATE(int0, 5, 0);
        CC_SETSIZE(18, 18, 0, 0);
        CC_SETPOSITION(0, 0, 1, 1);
        if ((int10 == 1)) {
            CC_SETTRANS(255);
        };
        switch (int8) {
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
            case 48: {
                int2 = 1;
                int3 = 1;
                break;
            }
            default: {
                int2 = 0;
                int3 = 3;
                break;
            }
        };
        if ((int9 > 0)) {
            int1 = 1;
            int5 = 12303291;
        } else {
            int1 = 0;
            int5 = 2236962;
        };
        if ((int2 == 1)) {
            if ((int1 == 1)) {
                string0 = "Build over the existing blanket change.";
            } else {
                string0 = "Build a new blanket change.";
            };
        } else {
            switch (int8) {
                case 24:
                case 25:
                case 26:
                case 27:
                case 28: {
                    if ((int1 == 1)) {
                        string0 = "Build over the existing statue.";
                    } else {
                        string0 = "Build a new statue.";
                    };
                    break;
                }
                default: {
                    if ((int1 == 1)) {
                        string0 = "Build over the existing customisation.";
                    } else {
                        string0 = "Build a new customisation.";
                    };
                    break;
                }
            };
        };
    };
    var int11 = script5216(int8);
    if ((int2 == 0)) {
        IF_SETHIDE(true, IF_GETPARENTLAYER(int0));
        if ((int11 != comp(-1, 65535))) {
            IF_SETONMOUSEREPEAT(callback(script4882, -2147483645, string0, int3), int11);
        };
    };
    IF_SETONMOUSEREPEAT(callback(script4882, -2147483645, string0, int3), int0);
    return;
}