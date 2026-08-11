//
function script1226(int0: number): void {
    script1191(20185102, script9670(int0, 0), 0);
    script1191(20185114, script9670(int0, 1), 0);
    script1191(20185116, script9670(int0, 2), 0);
    script1191(20185118, script9670(int0, 3), 0);
    script1191(20185120, script9670(int0, 4), 0);
    script1191(20185122, script9670(int0, 5), 0);
    script1191(20185124, script9670(int0, 6), 0);
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
    IF_SETMODEL(int1, comp(308, 16));  // chosen_reward_statue_interface:model_preview
    return;
}