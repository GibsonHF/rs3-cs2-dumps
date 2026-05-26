//
function script12181(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = enum_getvalue(0, 74, 10742 as cs2enum, int2);
    if ((int5 == -1 as dbrow)) {
        return;
    };
    if ((script12057(int5) == 0)) {
        return;
    };
    if ((script14706(int0, int5) == 0)) {
        return;
    };
    if (((int3 == comp(1712, 3)) && (CC_FIND(int3, int4) == 1))) {
        if ((script12064(int0, int4) == 1)) {
            script12176(int5, 1);
        };
        script12172();
    };
    return;
}