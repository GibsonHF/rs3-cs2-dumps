//
function script6878(): void {
    var int0 = 13783;
    var int1 = 13782;
    if ((varbitplayer_688 == 0)) {
        IF_SETTRANS(160, comp(1311, 510));  // mtxmgt:secondary_colour_graphic
        IF_SETONMOUSEOVER(callback(), comp(1311, 506));  // mtxmgt:secondary_swapper
        IF_SETONMOUSELEAVE(callback(), comp(1311, 506));  // mtxmgt:secondary_swapper
    } else {
        IF_SETTRANS(0, comp(1311, 510));  // mtxmgt:secondary_colour_graphic
        IF_SETONMOUSEOVER(callback(script44, -2147483645, int0), comp(1311, 506));  // mtxmgt:secondary_swapper
        IF_SETONMOUSELEAVE(callback(script44, -2147483645, int1), comp(1311, 506));  // mtxmgt:secondary_swapper
    };
    return;
}