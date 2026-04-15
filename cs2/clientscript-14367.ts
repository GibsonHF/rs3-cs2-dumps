//
function script14367(int0: inv, int1: obj, int2: int): void {
    switch (int0) {
        case 93:
        case 530: {
            if ((int2 <= 0)) {
                script9240(script14074(int0), cc_getparam(3819), int0, -1 as obj, 0, 1, "", "", "", "", "", "", "", "", "", "");
            } else {
                script9240(script14074(int0), cc_getparam(3819), int0, int1, int2, 1, script14419(int0, int1, int2, "Deposit"));
            };
            if ((OC_STACKABLE(int1) == 0)) {
                script14368(int0, int1, int2);
            };
            break;
        }
        case 94: {
            if ((int2 <= 0)) {
                script9222(-1 as obj, 0);
            } else {
                script9222(int1, int2);
            };
            break;
        }
    };
    return;
}