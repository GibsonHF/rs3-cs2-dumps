//
function script7875(int0: number): void {
    IF_SETHIDE(true, comp(1420, 107));  // acc_create:female_sleected_layer
    IF_SETHIDE(true, comp(1420, 115));  // acc_create:male_selected_layer
    switch (int0) {
        case 0: {
            IF_SETHIDE(false, comp(1420, 115));  // acc_create:male_selected_layer
            if ((IF_FIND(comp(1420, 113)) == 1)) {  // acc_create:male_button
                script7872(1, 1, 1, 1);
            };
            if ((IF_FIND(comp(1420, 105)) == 1)) {  // acc_create:female_button
                script7872(1, 1, 1, 0);
            };
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1420, 107));  // acc_create:female_sleected_layer
            if ((IF_FIND(comp(1420, 105)) == 1)) {  // acc_create:female_button
                script7872(1, 1, 1, 1);
            };
            if ((IF_FIND(comp(1420, 113)) == 1)) {  // acc_create:male_button
                script7872(1, 1, 1, 0);
            };
            break;
        }
    };
    varclient_3687 = int0;
    if (((int0 == 1) && (varclient_3482 == 5))) {
        varclient_3482 = 1;
        IF_SETMODELANIM(20949 as seq, comp(1420, 46));  // acc_create:avatar_paperdoll
    };
    script8154();
    script7894(varclient_3482, 0);
    return;
}