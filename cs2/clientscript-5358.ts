//
function script5358(int0: number, int1: number, int2: number): void {
    var int3 = comp(998, 13);  // modal_storage:withdraw_button_layer
    var int4 = comp(998, 14);  // modal_storage:deposit_button_layer
    switch (int0) {
        case 486: {
            int3 = comp(486, 18);  // rand_storage:withdraw_button_layer
            int4 = comp(486, 19);  // rand_storage:deposit_button_layer
            break;
        }
    };
    if ((CC_FIND(int3, 0) == 1)) {
        script7872(int1, 1, 0, 0);
    };
    if ((CC_FIND(int4, 0) == 1)) {
        script7872(int2, 1, 0, 0);
    };
    return;
}