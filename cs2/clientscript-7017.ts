//
function script7017(int0: component): void {
    var int1 = script11786(int0);
    var int2 = script7980(int0);
    var int3 = -1;
    var int4 = -1;
    var int5 = -1 as obj;
    [int3, int4, int5] = script11797(int1, int2);
    if ((int3 != 8)) {
        return;
    };
    if (((IF_GETGRAPHIC(int0) == 18819 as graphic) || (IF_GETGRAPHIC(int0) == 18818 as graphic))) {
        if ((varplayer_463 == 0)) {
            stack(18819);
            stack(int0);
            IF_SETGRAPHIC();
        } else {
            stack(18818);
            stack(int0);
            IF_SETGRAPHIC();
        };
    };
    return;
}