//
function script4672(int0: number): void {
    var int1 = -1;
    switch (int0) {
        case 1: {
            int1 = 7820;
            break;
        }
        case 2: {
            int1 = 9051;
            IF_SETMODELANIM(9804, 6684703);
            IF_SETMODELZOOM(2500, 6684703);
            break;
        }
        case 4:
        case 6: {
            int1 = 4897;
            break;
        }
        case 3: {
            int1 = 15373;
            IF_SETMODELANIM(9804, 6684703);
            break;
        }
    };
    IF_SETNPCHEAD(int1, 6684703);
    return;
}