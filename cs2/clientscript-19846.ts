//
function script19846(int0: category, int1: category): [int, int] {
    var int2 = 0;
    var int3 = ACHIEVEMENT_FINDSUBCAT(int0, int1);
    var int4 = ACHIEVEMENT_FINDNEXT();
    while ((int4 != -1 as achievement)) {
        if ((ACHIEVEMENT_REQSTATE(int4) == -2)) {
            int2 = (int2 + 1);
        };
        int4 = ACHIEVEMENT_FINDNEXT();
    };
    return [int2, int3];
}