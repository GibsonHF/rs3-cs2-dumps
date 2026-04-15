//
function script17826(int0: unknown_int): unknown_int {
    if ((MAP_MEMBERS() == 0)) {
        return 0;
    };
    if ((int0 == 1)) {
        switch (INV_GETOBJ(94 as inv, 17)) {
            case 55675: {
                return 1;
            }
            case 55676: {
                return 2;
            }
            case 55677: {
                return 3;
            }
            case 55678: {
                if ((ACHIEVEMENT_REQSTATE(3468 as achievement) <= -2)) {
                    return 4;
                };
                return 3;
            }
        };
        return 0;
    };
    if (((varbitplayer_53993 == 2) && (ACHIEVEMENT_REQSTATE(3468 as achievement) <= -2))) {
        return 4;
    };
    if ((varbitplayer_53992 == 2)) {
        return 3;
    };
    if ((varbitplayer_53991 == 2)) {
        return 2;
    };
    if ((varbitplayer_53990 == 2)) {
        return 1;
    };
    return 0;
}