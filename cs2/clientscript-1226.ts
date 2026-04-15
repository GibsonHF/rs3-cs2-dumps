//
function script1226(int0: int): void {
    script1191(comp(308, 14), script9670(int0, 0), false);
    script1191(comp(308, 26), script9670(int0, 1), false);
    script1191(comp(308, 28), script9670(int0, 2), false);
    script1191(comp(308, 30), script9670(int0, 3), false);
    script1191(comp(308, 32), script9670(int0, 4), false);
    script1191(comp(308, 34), script9670(int0, 5), false);
    script1191(comp(308, 36), script9670(int0, 6), false);
    var int1 = -1 as model;
    if ((GENDER() == 0)) {
        switch (int0) {
            case 0: {
                int1 = 46007 as model;
                break;
            }
            case 1: {
                int1 = 46018 as model;
                break;
            }
            case 2: {
                int1 = 46006 as model;
                break;
            }
            case 3: {
                int1 = 46015 as model;
                break;
            }
            case 4: {
                int1 = 46016 as model;
                break;
            }
            case 5: {
                int1 = 46009 as model;
                break;
            }
            case 6: {
                int1 = 46012 as model;
                break;
            }
        };
    } else {
        switch (int0) {
            case 0: {
                int1 = 46010 as model;
                break;
            }
            case 1: {
                int1 = 46005 as model;
                break;
            }
            case 2: {
                int1 = 46017 as model;
                break;
            }
            case 3: {
                int1 = 46011 as model;
                break;
            }
            case 4: {
                int1 = 46014 as model;
                break;
            }
            case 5: {
                int1 = 46013 as model;
                break;
            }
            case 6: {
                int1 = 46008 as model;
                break;
            }
        };
    };
    IF_SETMODEL(int1, comp(308, 16));
    return;
}