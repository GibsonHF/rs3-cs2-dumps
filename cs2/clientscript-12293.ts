//
function script12293(int0: number): number {
    var int1 = -1;
    if ((IF_HASSUBOVERLAY(comp(1477, 715), 1448 as overlayinterface) == 1)) {  // toplevel_v2:parent_window_content
        if ((IF_HASSUBOVERLAY(comp(1448, 3), int0) == 1)) {  // toplevel_v2_parent:suboverlay_layer_1
            int1 = 0;
        } else if ((IF_HASSUBOVERLAY(comp(1448, 5), int0) == 1)) {  // toplevel_v2_parent:suboverlay_layer_2
            int1 = 1;
        } else if ((IF_HASSUBOVERLAY(comp(1448, 7), int0) == 1)) {  // toplevel_v2_parent:suboverlay_layer_3
            int1 = 2;
        } else if ((IF_HASSUBOVERLAY(comp(1448, 9), int0) == 1)) {  // toplevel_v2_parent:suboverlay_layer_4
            int1 = 3;
        } else if ((IF_HASSUBOVERLAY(comp(1448, 11), int0) == 1)) {  // toplevel_v2_parent:suboverlay_layer_5
            int1 = 4;
        };
    };
    return int1;
}