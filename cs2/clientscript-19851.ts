//
function script19851(int0: achievement): [int, int] {
    var int1 = ACHIEVEMENT_ACHIEVEMENT_REQ_COUNT(int0);
    var int2 = 0;
    var int3 = int1;
    var int4 = -1 as achievement;
    var int5 = -1;
    while ((++int5 < int1)) {
        int4 = unk11032(int0, int5);
        switch (int4) {
            case 3625:
            case 3626:
            case 3627:
            case 3628:
            case 3629:
            case 3630: {
                int3 = (int3 - 1);
                break;
            }
            default: {
                if ((ACHIEVEMENT_REQSTATE(int4) == -2)) {
                    int2 = (int2 + 1);
                };
                break;
            }
        };
    };
    return [int2, int3];
}