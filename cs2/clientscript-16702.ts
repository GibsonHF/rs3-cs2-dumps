//
function script16702(int0: number, int1: number): void {
    var int2 = comp(998, 25);  // modal_storage:inventory_obj_build_layer
    var int3 = comp(998, 9);  // modal_storage:storage_obj_build_layer
    var int4 = comp(998, 27);  // modal_storage:inventory_window_highlight
    var int5 = comp(998, 16);  // modal_storage:storage_window_highlight
    switch (varplayer_10581) {
        case 995: {
            int2 = comp(486, 30);  // rand_storage:inventory_obj_build_layer
            int3 = comp(486, 9);  // rand_storage:storage_obj_build_layer
            int4 = comp(486, 32);  // rand_storage:inventory_window_highlight
            int5 = comp(486, 21);  // rand_storage:storage_window_highlight
            break;
        }
    };
    if ((varclient_7070 == 1)) {
        if ((int0 == int2)) {
            IF_SETHIDE(int1, int4);
        } else if ((int0 == int3)) {
            IF_SETHIDE(int1, int5);
        };
    };
    if ((int0 != varclient_7071)) {
        if ((int1 == false)) {
            varclient_7071 = int0;
        } else if ((int1 == true)) {
            varclient_7071 = comp(-1, 65535);
        };
    } else if ((int1 == true)) {
        varclient_7071 = comp(-1, 65535);
    };
    return;
}