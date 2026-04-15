//
function script14509(int0: dbrow): string {
    var string0 = dbrow_getfield(int0, 344176, 0);
    if ((STRING_LENGTH(string0) > 0)) {
        return string0;
    };
    var int1 = 0;
    switch (int0) {
        case 2664:
        case 2665:
        case 2666:
        case 2667:
        case 2668:
        case 2670:
        case 2671:
        case 2674:
        case 2675:
        case 2678:
        case 3692:
        case 3693:
        case 3695:
        case 13657:
        case 13659:
        case 2681:
        case 2682:
        case 2685:
        case 2686:
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
        case 13662:
        case 2707:
        case 2708:
        case 2709:
        case 4403:
        case 14179:
        case 14180: {
            string0 = script14508(int0);
            break;
        }
        case 3560: {
            string0 = "Nothing";
            break;
        }
        default: {
            if ((enum_hasoutput(74, 14051 as cs2enum, int0) == 1)) {
                int1 = script14691(int0);
                string0 = `${TOSTRING_LOCALISED(int1, 1)} ${OC_NAME(49430 as obj)}`;
            };
            break;
        }
    };
    return string0;
}