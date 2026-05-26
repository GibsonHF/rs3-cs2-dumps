//
function script19654(int0: number, int1: number): void {
    var int2 = 0;
    var string0 = "";
    if ((((int0 == 1) && (varbitplayer_51273 == 1)) && (script6431() == 1))) {
        string0 = "You are purchasing a licence to a digital product. For full terms and conditions, please see Jagex's<col=FFFFFF><nbsp>End<nbsp>User<nbsp>Licence<nbsp>Agreement</col>.";
        int2 = script20478(string0, IF_GETWIDTH(58392602), 2101, 0);
        IF_SETHIDE(0, 58392602);
        IF_SETTEXT(string0, 58392602);
        IF_SETOPCURSOR(1, 210, 58392602);
    } else {
        IF_SETHIDE(1, 58392602);
    };
    if (((varplayer_5148 != -1 as struct) && (struct_getparam(varplayer_5148, 9330) == false))) {
        return;
    };
    int2 = script20478(string0, IF_GETWIDTH(58392602), 2101, 0);
    var int3 = -1;
    if ((int1 > 0)) {
        switch (script16763()) {
            case 161:
            case 15:
            case 22:
            case 97:
            case 54:
            case 63:
            case 69:
            case 74:
            case 56:
            case 88:
            case 101:
            case 108:
            case 132:
            case 130:
            case 131:
            case 148:
            case 179:
            case 196:
            case 194:
            case 67: {
                int3 = 0;
                break;
            }
            case 77: {
                int3 = 1;
                break;
            }
            case 225: {
                int3 = 2;
                break;
            }
        };
        if ((int3 != -1)) {
            script16759(int3, int1);
            int2 = (int2 + 21);
        } else {
            IF_SETHIDE(1, 58392599);
        };
    } else {
        IF_SETHIDE(1, 58392599);
    };
    if ((int2 > 0)) {
        IF_SETSIZE(578, (int2 + 424), 0, 0, 58392581);
        IF_SETSIZE(0, (int2 + 51), 1, 0, 58392598);
    };
    return;
}