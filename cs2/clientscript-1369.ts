//[clientscript,worldmap_init]
function script1369(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: unknown_int, int9: unknown_int, int10: unknown_int): void {
    script1306(true, 0);
    script7997();
    if ((varbitplayer_38842 == 1)) {
        script13893(1);
    };
    if ((IF_FIND(comp(1477, 39)) == 1)) {
        CC_SETNOCLICKTHROUGH(false);
    };
    IF_SETONRESIZE(callback(script10421, -2147483645), comp(1422, 77));
    script343(int0, int1, int2, int3, int4, int5, int6, int7, int8, int9, int10);
    return;
}