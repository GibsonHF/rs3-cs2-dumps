//[clientscript,worldmap_vartransmit]
function script1404(int0: component, int1: component, int2: component, int3: component, int4: unknown_int, int5: unknown_int, int6: int): void {
    script285(int0);
    script1839(varbitplayer_14108, int1, int2, int3);
    if ((int6 != varbitplayer_14110)) {
        IF_SETONVARTRANSMIT(callback(script1404, int0, int1, int2, int3, int4, int5, varbitplayer_14110, 2805, 2807, 2), int5);
        script2046(int4);
    };
    script307();
    return;
}