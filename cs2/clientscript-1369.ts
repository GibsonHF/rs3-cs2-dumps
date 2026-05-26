//[clientscript,worldmap_init]
function script1369(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number): void {
    script1306(1, 0);
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