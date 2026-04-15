//[clientscript,godwars_overlay_init]
function script2191(int0: unknown_int, int1: unknown_int, int2: component, int3: component, int4: component, int5: component, int6: component, int7: component, int8: component, int9: component, int10: component, int11: component): void {
    if ((varclient_2763 < 0)) {
        varclient_2763 = 0;
    };
    if ((varclient_2764 < 0)) {
        varclient_2764 = 0;
    };
    if ((varclient_2766 < 0)) {
        varclient_2766 = 0;
    };
    if ((varclient_2765 < 0)) {
        varclient_2765 = 0;
    };
    script2335(int0, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11);
    IF_SETONVARTRANSMIT(callback(script2333, int0, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, 3017, 3018, 3022, 3), int0);
    IF_SETONVARCTRANSMIT(callback(script2333, int0, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, 2763, 2764, 2765, 2766, 4), int0);
    varclient_1435 = 255;
    return;
}