//
function script9750(): void {
    var string0 = "";
    if (((varplayer_4476 < 2) || (varclient_4189 == 1))) {
        IF_SETHIDE(false, comp(1049, 52));  // rand_entrance:dung_size_small_layer_disabled
        if ((IF_GETGRAPHIC(comp(1049, 6)) == 18525 as graphic)) {  // rand_entrance:small_dung_op
            IF_SETGRAPHIC(17535 as graphic, comp(1049, 73));  // rand_entrance:small_dung_op_disabled
        } else {
            IF_SETGRAPHIC(17536 as graphic, comp(1049, 73));  // rand_entrance:small_dung_op_disabled
        };
        IF_SETHIDE(false, comp(1049, 54));  // rand_entrance:dung_size_med_layer_disabled
        if ((IF_GETGRAPHIC(comp(1049, 4)) == 18525 as graphic)) {  // rand_entrance:medium_dung_op
            IF_SETGRAPHIC(17535 as graphic, comp(1049, 74));  // rand_entrance:medium_dung_op_disabled
        } else {
            IF_SETGRAPHIC(17536 as graphic, comp(1049, 74));  // rand_entrance:medium_dung_op_disabled
        };
        IF_SETHIDE(false, comp(1049, 56));  // rand_entrance:dung_size_large_layer_disabled
        if ((IF_GETGRAPHIC(comp(1049, 2)) == 18525 as graphic)) {  // rand_entrance:large_dung_op
            IF_SETGRAPHIC(17535 as graphic, comp(1049, 75));  // rand_entrance:large_dung_op_disabled
        } else {
            IF_SETGRAPHIC(17536 as graphic, comp(1049, 75));  // rand_entrance:large_dung_op_disabled
        };
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 7));  // rand_entrance:small_dung_text
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 5));  // rand_entrance:med_dung_text
        IF_SETCOLOUR(script693(125, 125, 125), comp(1049, 3));  // rand_entrance:lrg_dung_text
        if ((varclient_4189 == 1)) {
            if ((varplayer_4475 < 3)) {
                IF_SETGRAPHIC(17536 as graphic, comp(1049, 73));  // rand_entrance:small_dung_op_disabled
                IF_SETGRAPHIC(17535 as graphic, comp(1049, 74));  // rand_entrance:medium_dung_op_disabled
                IF_SETGRAPHIC(17536 as graphic, comp(1049, 75));  // rand_entrance:large_dung_op_disabled
                string0 = "Party sizes of 1 to 2 are restricted to medium dungeons in Hard Mode.";
            } else {
                IF_SETGRAPHIC(17536 as graphic, comp(1049, 73));  // rand_entrance:small_dung_op_disabled
                IF_SETGRAPHIC(17536 as graphic, comp(1049, 74));  // rand_entrance:medium_dung_op_disabled
                IF_SETGRAPHIC(17535 as graphic, comp(1049, 75));  // rand_entrance:large_dung_op_disabled
                string0 = "Party sizes of 3 to 5 are restricted to large dungeons in Hard Mode.";
            };
            IF_SETONMOUSEREPEAT(callback(script8799, string0, 68747316, -1), comp(1049, 52));  // rand_entrance:dung_size_small_layer_disabled
            IF_SETONMOUSEREPEAT(callback(script8799, string0, 68747318, -1), comp(1049, 54));  // rand_entrance:dung_size_med_layer_disabled
            IF_SETONMOUSEREPEAT(callback(script8799, string0, 68747320, -1), comp(1049, 56));  // rand_entrance:dung_size_large_layer_disabled
        };
    } else {
        IF_SETHIDE(true, comp(1049, 52));  // rand_entrance:dung_size_small_layer_disabled
        IF_SETHIDE(true, comp(1049, 54));  // rand_entrance:dung_size_med_layer_disabled
        IF_SETHIDE(true, comp(1049, 56));  // rand_entrance:dung_size_large_layer_disabled
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 7));  // rand_entrance:small_dung_text
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 5));  // rand_entrance:med_dung_text
        IF_SETCOLOUR(script693(255, 255, 255), comp(1049, 3));  // rand_entrance:lrg_dung_text
    };
    if ((varplayer_1068 == 1)) {
        IF_SETHIDE(true, comp(1049, 52));  // rand_entrance:dung_size_small_layer_disabled
        IF_SETHIDE(true, comp(1049, 54));  // rand_entrance:dung_size_med_layer_disabled
        IF_SETHIDE(true, comp(1049, 56));  // rand_entrance:dung_size_large_layer_disabled
        IF_SETHIDE(false, comp(1049, 57));  // rand_entrance:rand_debug
    };
    return;
}