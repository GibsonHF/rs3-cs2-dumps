//
function script14297(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = script6427(TESTBIT(varplayer_1547, int2));
    script13996(int0, -1, 28556, "", int5, script9670(int2, int4));
    if ((int5 == 1)) {
        stack(6271);
        stack(int1);
        IF_SETGRAPHIC();
        IF_SETONOP(callback(script6154), int0);
    } else {
        stack(int3);
        stack(int1);
        IF_SETGRAPHIC();
        IF_SETONOP(callback(script4637, int2), int0);
        script4645(int2);
    };
    return;
}