//
function script1927(int0: number, int1: number, int2: number): void {
    var int3 = 0;
    if ((varbitplayer_42072 == 1)) {
        IF_SETSIZE(((227 + 84) + (180 * 6)), 0, 0, 1, comp(267, 55));  // qps:tab2_track_layer_build
        IF_SETSIZE(((227 + 84) + (180 * 6)), 0, 0, 1, comp(267, 56));  // qps:tab2_track_layer_click
        IF_SETSCROLLSIZE(((227 + 84) + (180 * 6)), 0, comp(267, 53));  // qps:tab2_track_layer
        script1706(17498164, 17498165, IF_GETSCROLLX(comp(267, 53)));  // qps:tab2_track_layer
        int3 = MAX(0, ((int0 * 180) - 84));
        script1624(17498164, 17498165, int3, 1, 15, 0);
    };
    if ((CC_FIND(comp(267, 57), 0) == 1)) {  // qps:info_panel_build
        script1930(17498169, 17498170, int0, int1, int2);
    } else {
        script1928(17498169, 17498170, int0, int1, int2);
    };
    script1932();
    return;
}