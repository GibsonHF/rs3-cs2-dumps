//
function script1485(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((varbitplayer_4945 == 0)) {
        return;
    };
    if ((IF_FIND(int0) == 1)) {
        if ((script1481(int1, int2, int3) == script1481(int1, int4, int5))) {
            IF_SETGRAPHIC(23494, int0);
            IF_SETCOLOUR(9305962, int0);
        } else {
            IF_SETGRAPHIC(18366, int0);
            IF_SETCOLOUR(13369344, int0);
        };
    };
    return;
}