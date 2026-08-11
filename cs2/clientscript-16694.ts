//
function script16694(int0: number): void {
    var int1 = IF_GETWIDTH(comp(998, 0));  // modal_storage:mainmodal_window
    var int2 = IF_GETWIDTH(comp(998, 3));  // modal_storage:storage_window
    var int3 = IF_GETWIDTH(comp(998, 17));  // modal_storage:inventory_window
    var int4 = IF_GETHEIGHT(comp(998, 0));  // modal_storage:mainmodal_window
    var int5 = IF_GETHEIGHT(comp(998, 3));  // modal_storage:storage_window
    var int6 = IF_GETHEIGHT(comp(998, 17));  // modal_storage:inventory_window
    var int7 = comp(998, 0);  // modal_storage:mainmodal_window
    var int8 = comp(998, 3);  // modal_storage:storage_window
    var int9 = comp(998, 17);  // modal_storage:inventory_window
    switch (int0) {
        case 486: {
            int1 = IF_GETWIDTH(comp(486, 0));  // rand_storage:mainmodal_window
            int2 = IF_GETWIDTH(comp(486, 3));  // rand_storage:storage_window
            int3 = IF_GETWIDTH(comp(486, 22));  // rand_storage:inventory_window
            int4 = IF_GETHEIGHT(comp(486, 0));  // rand_storage:mainmodal_window
            int5 = IF_GETHEIGHT(comp(486, 3));  // rand_storage:storage_window
            int6 = IF_GETHEIGHT(comp(486, 22));  // rand_storage:inventory_window
            int7 = comp(486, 0);  // rand_storage:mainmodal_window
            int8 = comp(486, 3);  // rand_storage:storage_window
            int9 = comp(486, 22);  // rand_storage:inventory_window
            break;
        }
    };
    if ((script6431() == 1)) {
        [int1, int3] = [492, 232];
    };
    IF_SETSIZE(int1, int4, 0, 0, int7);
    IF_SETSIZE(int2, int5, 0, 0, int8);
    IF_SETSIZE(int3, int6, 0, 0, int9);
    script16698(int0);
    return;
}