//
function script15373(int0: cs2enum): void {
    if ((int0 == -1 as cs2enum)) {
        return;
    };
    switch (int0) {
        case 13324:
        case 8811:
        case 13613:
        case 11062:
        case 11063:
        case 11064:
        case 11698:
        case 12385:
        case 12675:
        case 12676:
        case 12849:
        case 12851:
        case 12852:
        case 13032:
        case 13033:
        case 13156:
        case 13355:
        case 13356:
        case 13482:
        case 13688:
        case 13939:
        case 15455:
        case 13614:
        case 12276:
        case 13615:
        case 12850:
        case 13031: {
            script4002();
            break;
        }
    };
    var int1 = (30 - 1);
    while ((int1 >= 0)) {
        script2386(int1, -1);
        int1 = (int1 - 1);
    };
    int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(int0);
    var int3 = 0;
    while ((int1 < int2)) {
        int3 = enum_getvalue(0, 0, int0, int1);
        script2393(int3, int1);
        script13842(int1);
        int1 = (int1 + 1);
    };
    script8144();
    return;
}