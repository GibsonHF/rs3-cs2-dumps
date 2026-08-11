//
function script16700(): void {
    var int0 = comp(998, 27);  // modal_storage:inventory_window_highlight
    var int1 = comp(998, 16);  // modal_storage:storage_window_highlight
    switch (varplayer_10581) {
        case 995: {
            int0 = comp(486, 32);  // rand_storage:inventory_window_highlight
            int1 = comp(486, 21);  // rand_storage:storage_window_highlight
            break;
        }
    };
    varclient_7070 = 0;
    IF_SETHIDE(true, int0);
    IF_SETHIDE(true, int1);
    return;
}