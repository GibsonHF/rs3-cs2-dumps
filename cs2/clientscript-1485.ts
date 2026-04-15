//
function script1485(int0: component, int1: unknown_int, int2: int, int3: int, int4: int, int5: int): void {
    if ((varbitplayer_4945 == 0)) {
        return;
    };
    if ((IF_FIND(int0) == 1)) {
        if ((script1481(int1, int2, int3) == script1481(int1, int4, int5))) {
            stack(23494);
            stack(int0);
            IF_SETGRAPHIC();
            IF_SETCOLOUR(9305962, int0);
        } else {
            stack(18366);
            stack(int0);
            IF_SETGRAPHIC();
            IF_SETCOLOUR(13369344, int0);
        };
    };
    return;
}