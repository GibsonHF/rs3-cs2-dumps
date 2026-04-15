//
function script19607(int0: inv, int1: obj, int2: int): void {
    var int3 = script19362(int1);
    switch (int0) {
        case 964: {
            if ((int2 <= 0)) {
                script9240(script19567(int0), cc_getparam(3819), int0, -1 as obj, 0, 1, "", "", "", "", "", "", "", "", "", "");
            } else {
                script9240(script19567(int0), cc_getparam(3819), int0, int1, int2, 1, script14419(int0, int1, int2, "Deposit"));
            };
            if ((OC_STACKABLE(int1) == 0)) {
                script19608(int0, int1, int2, int3);
            };
            break;
        }
    };
    return;
}