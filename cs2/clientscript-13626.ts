//
function script13626(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = ACHIEVEMENT_REQSTATE(int3);
    var int5 = script10495(6);
    IF_SETHIDE(0, int1);
    if ((int4 == -2)) {
        IF_SETHIDE(1, int1);
        int5 = script10495(0);
    };
    IF_SETCOLOUR(int5, int2);
    if ((IF_FIND(int0) == 1)) {
        script15370(int3);
    };
    return;
}