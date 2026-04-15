//
function script14508(int0: dbrow): string {
    var string0 = dbrow_getfield(int0, 344160, 0);
    if ((STRING_LENGTH(string0) > 0)) {
        return string0;
    };
    var int1 = 0;
    var int2 = -1 as struct;
    switch (int0) {
        case 2659: {
            string0 = `${OC_NAME(dbrow_getfield(2891 as dbrow, 385168, 0))} ('${dbrow_getfield(2891 as dbrow, 385040, 0)}' relic power)`;
            break;
        }
        case 2663: {
            string0 = `${OC_NAME(dbrow_getfield(2894 as dbrow, 385168, 0))} ('${dbrow_getfield(2894 as dbrow, 385040, 0)}' relic power)`;
            break;
        }
        case 2676: {
            string0 = `${OC_NAME(dbrow_getfield(2911 as dbrow, 385168, 0))} ('${dbrow_getfield(2911 as dbrow, 385040, 0)}' relic power)`;
            break;
        }
        case 2679: {
            string0 = `${OC_NAME(dbrow_getfield(2910 as dbrow, 385168, 0))} ('${dbrow_getfield(2910 as dbrow, 385040, 0)}' relic power)`;
            break;
        }
        case 3694: {
            string0 = `${OC_NAME(dbrow_getfield(3711 as dbrow, 385168, 0))} ('${dbrow_getfield(3711 as dbrow, 385040, 0)}' relic power)`;
            break;
        }
        case 13658: {
            string0 = `${OC_NAME(dbrow_getfield(13693 as dbrow, 385168, 0))} ('${dbrow_getfield(13693 as dbrow, 385040, 0)}' relic power)`;
            break;
        }
        case 2683: {
            string0 = `${OC_NAME(dbrow_getfield(2909 as dbrow, 385168, 0))} ('${dbrow_getfield(2909 as dbrow, 385040, 0)}' relic power)`;
            break;
        }
        case 2684: {
            string0 = `${OC_NAME(dbrow_getfield(2907 as dbrow, 385168, 0))} ('${dbrow_getfield(2907 as dbrow, 385040, 0)}' relic power)`;
            break;
        }
        case 2688:
        case 2689:
        case 2690:
        case 2691:
        case 2692:
        case 2693:
        case 2694:
        case 2695:
        case 2696:
        case 2697:
        case 2698:
        case 2699:
        case 2700:
        case 2701:
        case 2702:
        case 2703:
        case 2704:
        case 2705:
        case 3696:
        case 3697:
        case 3698:
        case 3699:
        case 4398:
        case 4399:
        case 4400:
        case 13660:
        case 13661:
        case 13662: {
            int1 = SCALE(125, 100, script14691(int0));
            string0 = `${TOSTRING_LOCALISED(int1, 1)} ${OC_NAME(49430 as obj)}`;
            break;
        }
        case 2707:
        case 2708:
        case 2709: {
            int1 = SCALE(125, 100, script14691(int0));
            string0 = `${TOSTRING_LOCALISED(int1, 1)} ${OC_NAME(49430 as obj)}`;
            break;
        }
        case 2710: {
            string0 = `${OC_NAME(dbrow_getfield(2892 as dbrow, 385168, 0))} ('${dbrow_getfield(2892 as dbrow, 385040, 0)}' relic power)`;
            break;
        }
        case 3560: {
            string0 = OC_NAME(50432 as obj);
            break;
        }
        case 14179: {
            string0 = `${TOSTRING_LOCALISED(1500, 1)} Spooky tokens`;
            break;
        }
        case 14180: {
            string0 = `${TOSTRING_LOCALISED(1000, 1)} Spooky tokens<br>${TOSTRING_LOCALISED((SCALE(140, 100, script2181(2, 5 as stat, 0)) / 10), 1)} Prayer XP`;
            break;
        }
        default: {
            int2 = dbrow_getfield(int0, 344240, 0);
            if ((int2 != -1 as struct)) {
                string0 = struct_getparam(int2, 6414);
            };
            break;
        }
    };
    return string0;
}