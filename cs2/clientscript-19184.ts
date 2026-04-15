//
function script19184(int0: struct, int1: component): void {
    var int2 = -1 as seq;
    switch (int0) {
        case 32986: {
            if ((varbitplayer_51594 >= 138)) {
                IF_SETMODELANIM(21987 as seq, int1);
            } else {
                IF_SETMODELANIM(17970 as seq, int1);
            };
            break;
        }
        case 2951: {
            int2 = dbrow_getfield(script19150(int0), 1290496, 0);
            IF_SETMODELANIM(int2, int1);
            break;
        }
        default: {
            IF_SETMODELANIM(18019 as seq, int1);
            break;
        }
    };
    return;
}