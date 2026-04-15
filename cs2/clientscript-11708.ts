//
function script11708(int0: category, int1: achievement, int2: achievement): [string, int, int, achievement, achievement] {
    var int3 = ACHIEVEMENT_FINDSUBCAT(4766 as category, int0);
    var int4 = 0;
    var int5 = ACHIEVEMENT_FINDNEXT();
    while ((int5 != -1 as achievement)) {
        switch (ACHIEVEMENT_REQSTATE(int5)) {
            case -2: {
                int4 = (int4 + 1);
                break;
            }
            case -1: {
                if ((int2 == -1 as achievement)) {
                    var int2 = int5;
                };
                break;
            }
            default: {
                if ((int1 == -1 as achievement)) {
                    var int1 = int5;
                };
                break;
            }
        };
        int5 = ACHIEVEMENT_FINDNEXT();
    };
    var string0 = `${inttostring(int4, 10)} / ${inttostring(int3, 10)}`;
    return [string0, int4, int3, int1, int2];
}