//
function script19654(int0: unknown_int, int1: int): void {
    var int2 = 0;
    var string0 = "";
    if ((((int0 == 1) && (varbitplayer_51273 == 1)) && (script6431() == true))) {
        string0 = "You are purchasing a licence to a digital product. For full terms and conditions, please see Jagex's<col=FFFFFF><nbsp>End<nbsp>User<nbsp>Licence<nbsp>Agreement</col>.";
        int2 = script20478(string0, IF_GETWIDTH(comp(891, 26)), 2101 as dbrow, 0);
        IF_SETHIDE(false, comp(891, 26));
        IF_SETTEXT(string0, comp(891, 26));
        IF_SETOPCURSOR(1, 210 as cursor, comp(891, 26));
    } else {
        IF_SETHIDE(true, comp(891, 26));
    };
    if (((varplayer_5148 != -1 as struct) && (struct_getparam(varplayer_5148, 9330) == false))) {
        return;
    };
    int2 = script20478(string0, IF_GETWIDTH(comp(891, 26)), 2101 as dbrow, 0);
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
            IF_SETHIDE(true, comp(891, 23));
        };
    } else {
        IF_SETHIDE(true, comp(891, 23));
    };
    if ((int2 > 0)) {
        IF_SETSIZE(578, (int2 + 424), 0, 0, comp(891, 5));
        IF_SETSIZE(0, (int2 + 51), 1, 0, comp(891, 22));
    };
    return;
}