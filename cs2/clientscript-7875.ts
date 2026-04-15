//
function script7875(int0: int): void {
    IF_SETHIDE(true, comp(1420, 107));
    IF_SETHIDE(true, comp(1420, 115));
    switch (int0) {
        case 0: {
            IF_SETHIDE(false, comp(1420, 115));
            if ((IF_FIND(comp(1420, 113)) == 1)) {
                script7872(true, 1, true, true);
            };
            if ((IF_FIND(comp(1420, 105)) == 1)) {
                script7872(true, 1, true, false);
            };
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1420, 107));
            if ((IF_FIND(comp(1420, 105)) == 1)) {
                script7872(true, 1, true, true);
            };
            if ((IF_FIND(comp(1420, 113)) == 1)) {
                script7872(true, 1, true, false);
            };
            break;
        }
    };
    varclient_3687 = int0;
    if (((int0 == 1) && (varclient_3482 == 5))) {
        varclient_3482 = 1;
        IF_SETMODELANIM(20949 as seq, comp(1420, 46));
    };
    script7894(varclient_3482, 0);
    return;
}