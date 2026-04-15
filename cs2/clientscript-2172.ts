//
function script2172(int0: component, int1: unknown_int): void {
    var int2 = varclient_692;
    var int3 = varclient_1103;
    var int4 = varclient_6563;
    var int5 = varclient_6562;
    switch (int1) {
        case 0: {
            if ((varclient_692 == 1)) {
                int2 = 0;
            } else {
                int2 = 1;
            };
            break;
        }
        case 1: {
            if ((varclient_1103 == 1)) {
                int3 = 0;
            } else {
                int3 = 1;
            };
            break;
        }
        case 2: {
            if ((varclient_6563 == 1)) {
                int4 = 0;
            } else {
                int4 = 1;
            };
            break;
        }
        case 3: {
            if ((varclient_6562 == 1)) {
                int5 = 0;
            } else {
                int5 = 1;
            };
            break;
        }
    };
    script17183();
    script2162(int0, 1, varclient_693, varclient_694, int2, int3, int4, int5);
    return;
}