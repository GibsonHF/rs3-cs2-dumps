//
function script14297(int0: component, int1: unknown_int, int2: int, int3: unknown_int, int4: int): void {
    var int5 = script6427(TESTBIT(varplayer_1547, int2));
    script13996(int0, comp(-1, 65535), 28556 as struct, "", int5, script9670(int2, int4));
    if ((int5 == true)) {
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