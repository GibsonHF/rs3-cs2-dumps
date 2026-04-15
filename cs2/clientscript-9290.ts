//
function script9290(int0: component, int1: int): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    if ((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
        if (((script6353() == 0) || (script6375() == 0))) {
            script12553();
            return;
        };
        [int2, int3, int4, int5] = script13137();
        varclient_3847 = int2;
        varclient_3848 = (int2 + int4);
        varclient_3849 = int3;
        varclient_3850 = (int3 + int5);
        varclient_3844 = 1;
        int2 = (int2 + (int4 / 2));
        int3 = (int3 + (int5 / 2));
        if ((varclient_3845 <= 0)) {
            varclient_3845 = 100;
        };
        if ((varclient_3846 <= 0)) {
            varclient_3846 = 50;
        };
        script770(1, int2, int3);
    } else {
        return;
    };
    return;
}