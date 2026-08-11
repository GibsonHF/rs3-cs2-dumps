//
function script9396(int0: number): void {
    var int1 = comp(240, 8);  // activity_tracker_embedded_options:options_control_build
    var int2 = comp(240, 9);  // activity_tracker_embedded_options:options_control_click
    var int3 = comp(240, 10);  // activity_tracker_embedded_options:highlight_layer
    var int4 = comp(240, 0);  // activity_tracker_embedded_options:vartrans_layer
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    IF_CLEARSCRIPTHOOKS(int4);
    switch (int0) {
        case 15728653: {
            IF_SETHIDE(true, comp(240, 1));  // activity_tracker_embedded_options:options_layer
            break;
        }
        case 13697037: {
            IF_SETTEXT(dbrow_getfield(2194 as dbrow, 126976, 0), comp(240, 6));  // activity_tracker_embedded_options:options_title
            script2970(int1, int2, int2, 2194, 0, 0, IF_GETWIDTH(int1));
            IF_SETHIDE(false, comp(240, 1));  // activity_tracker_embedded_options:options_layer
            break;
        }
        case 13697049: {
            script9399(int1, int2, int3);
            IF_SETONVARTRANSMIT(callback(script9398, int1, int2, int3, 1115, 1), int4);
            break;
        }
    };
    return;
}