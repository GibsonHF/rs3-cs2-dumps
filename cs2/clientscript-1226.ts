//
function script1226(int0: number): void {
    script1191(20185102, script9670(int0, 0), 0);
    script1191(20185114, script9670(int0, 1), 0);
    script1191(20185116, script9670(int0, 2), 0);
    script1191(20185118, script9670(int0, 3), 0);
    script1191(20185120, script9670(int0, 4), 0);
    script1191(20185122, script9670(int0, 5), 0);
    script1191(20185124, script9670(int0, 6), 0);
    var int1 = -1;
    if ((GENDER() == 0)) {
        switch (int0) {
            case 0: {
                int1 = 46007;
                break;
            }
            case 1: {
                int1 = 46018;
                break;
            }
            case 2: {
                int1 = 46006;
                break;
            }
            case 3: {
                int1 = 46015;
                break;
            }
            case 4: {
                int1 = 46016;
                break;
            }
            case 5: {
                int1 = 46009;
                break;
            }
            case 6: {
                int1 = 46012;
                break;
            }
        };
    } else {
        switch (int0) {
            case 0: {
                int1 = 46010;
                break;
            }
            case 1: {
                int1 = 46005;
                break;
            }
            case 2: {
                int1 = 46017;
                break;
            }
            case 3: {
                int1 = 46011;
                break;
            }
            case 4: {
                int1 = 46014;
                break;
            }
            case 5: {
                int1 = 46013;
                break;
            }
            case 6: {
                int1 = 46008;
                break;
            }
        };
    };
    IF_SETMODEL(int1, 20185104);
    return;
}