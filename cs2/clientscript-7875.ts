//
function script7875(int0: number): void {
    IF_SETHIDE(1, 93061227);
    IF_SETHIDE(1, 93061235);
    switch (int0) {
        case 0: {
            IF_SETHIDE(0, 93061235);
            if ((IF_FIND(93061233) == 1)) {
                script7872(1, 1, 1, 1);
            };
            if ((IF_FIND(93061225) == 1)) {
                script7872(1, 1, 1, 0);
            };
            break;
        }
        case 1: {
            IF_SETHIDE(0, 93061227);
            if ((IF_FIND(93061225) == 1)) {
                script7872(1, 1, 1, 1);
            };
            if ((IF_FIND(93061233) == 1)) {
                script7872(1, 1, 1, 0);
            };
            break;
        }
    };
    varclient_3687 = int0;
    if (((int0 == 1) && (varclient_3482 == 5))) {
        varclient_3482 = 1;
        IF_SETMODELANIM(20949, 93061166);
    };
    script7894(varclient_3482, 0);
    return;
}