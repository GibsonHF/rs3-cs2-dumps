//
function script6784(int0: int, int1: int): void {
    var int2 = -1 as npc;
    var int3 = -1 as npc;
    var int4 = int1;
    if ((int4 > 0)) {
        int4 = (int4 - 1);
        IF_SETONTIMER(callback(script6784, int0, int4), comp(631, 0));
        return;
    };
    if ((int0 > 3)) {
        var int0 = 0;
    };
    switch (int0) {
        case 0: {
            int2 = 26124 as npc;
            int3 = 21795 as npc;
            break;
        }
        case 1: {
            int2 = 26125 as npc;
            int3 = 21797 as npc;
            break;
        }
        case 2: {
            int2 = 26126 as npc;
            int3 = 21799 as npc;
            break;
        }
        case 3: {
            int2 = 26127 as npc;
            int3 = 21801 as npc;
            break;
        }
    };
    int0 = (int0 + 1);
    IF_SETNPCMODEL(int2, comp(631, 76));
    IF_SETNPCMODEL(int3, comp(631, 77));
    IF_SETONTIMER(callback(script6784, int0, 100), comp(631, 0));
    return;
}