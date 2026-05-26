//
function script9660(int0: number): void {
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var string0 = "";
    switch (int0) {
        case 85721202: {
            int1 = 85721219;
            int2 = 85721207;
            int3 = 85721208;
            int5 = 85721210;
            int4 = 85721218;
            if ((varbitplayer_21749 == 0)) {
                string0 = "100 points";
            } else {
                string0 = "10 points";
            };
            break;
        }
        case 85721237: {
            int1 = 85721254;
            int2 = 85721242;
            int3 = 85721243;
            int5 = 85721245;
            int4 = 85721253;
            if ((varbitplayer_21750 == 0)) {
                string0 = "400 points";
            } else {
                string0 = "40 points";
            };
            break;
        }
        case 85721272: {
            int1 = 85721289;
            int2 = 85721277;
            int3 = 85721278;
            int5 = 85721280;
            int4 = 85721288;
            if ((varbitplayer_21751 == 0)) {
                string0 = "600 points";
            } else {
                string0 = "60 points";
            };
            break;
        }
        case 85721290: {
            int1 = 85721307;
            int2 = 85721295;
            int3 = 85721296;
            int5 = 85721298;
            int4 = 85721306;
            if ((varbitplayer_36284 == 0)) {
                string0 = "1000 points";
            } else {
                string0 = "100 points";
            };
            break;
        }
        case 85721949: {
            int1 = 85721964;
            int2 = 85721952;
            int3 = 85721953;
            int4 = 85721963;
            int5 = 85721955;
            string0 = "125 points";
            break;
        }
        case 85721917: {
            int1 = 85721932;
            int2 = 85721920;
            int3 = 85721921;
            int4 = 85721931;
            string0 = "125 points";
            int5 = 85721923;
            break;
        }
        case 85721933: {
            int1 = 85721948;
            int2 = 85721936;
            int3 = 85721937;
            int4 = 85721947;
            string0 = "125 points";
            int5 = 85721939;
            break;
        }
        default: {
            return;
        }
    };
    if (((((int1 == -1) || (int2 == -1)) || (int3 == -1)) || (int4 == -1))) {
        return;
    };
    IF_SETCOLOUR(16512486, int2);
    IF_SETCOLOUR(14538955, int3);
    if ((int5 != -1)) {
        IF_SETHIDE(0, int5);
    };
    IF_SETCOLOUR(16512486, int4);
    IF_SETHIDE(1, int1);
    IF_SETTEXT(string0, int3);
    return;
}