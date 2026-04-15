//
function script13626(int0: component, int1: component, int2: component, int3: achievement): void {
    var int4 = ACHIEVEMENT_REQSTATE(int3);
    var int5 = script10495(6);
    IF_SETHIDE(false, int1);
    if ((int4 == -2)) {
        IF_SETHIDE(true, int1);
        int5 = script10495(0);
    };
    IF_SETCOLOUR(int5, int2);
    if ((IF_FIND(int0) == 1)) {
        script15370(int3);
    };
    return;
}