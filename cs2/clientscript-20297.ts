//
function script20297(int0: achievement): unknown_int {
    var int1 = script20302(int0);
    if ((((int1 != -1 as quest) && (strcmp(script2126(int1), "None.") != 0)) && (script2156(int1) == false))) {
        return 1;
    };
    if ((ACHIEVEMENT_CATEGORY(int0) == 5619 as category)) {
        if ((unk11037(int0) > 0)) {
            if ((ACHIEVEMENT_ALLPREREQMET(int0) == 1)) {
                return -1;
            };
            if ((unk11069(int0, 0) > 0)) {
                return 1;
            };
            if ((script20298(int0) == 1)) {
                return 2;
            };
            return 0;
        };
        return -1;
    };
    if (((unk11036(int0, 0) > 0) || (ACHIEVEMENT_ACHIEVEMENT_REQ_COUNT(int0) > 0))) {
        return 2;
    };
    if (((((unk11068(int0) > 1) || (unk11067(int0) > 1)) || (unk11066(int0) > 1)) || (unk11065(int0) > 1))) {
        return 2;
    };
    if (((unk11037(int0) > 0) && (ACHIEVEMENT_ALLPREREQMET(int0) == 0))) {
        return 0;
    };
    return -1;
}