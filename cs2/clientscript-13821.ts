//
function script13821(int0: component, int1: component, int2: component, int3: unknown_int, int4: unknown_int): void {
    var int5 = (IF_GETWIDTH(int0) - IF_GETWIDTH(int1));
    var int6 = 0;
    switch (int3) {
        case 0: {
            int6 = SCALE(varbitclient_38833, 255, int5);
            break;
        }
        case 1: {
            int6 = SCALE(varbitclient_38834, 127, int5);
            break;
        }
        case 2: {
            int6 = SCALE(varbitclient_38835, 127, int5);
            break;
        }
        case 3: {
            int6 = SCALE(varbitclient_38836, 127, int5);
            break;
        }
    };
    IF_SETPOSITION(int6, 0, 0, 0, int1);
    IF_SETSIZE(int6, 7, 0, 0, int2);
    if ((int4 == 1)) {
        script13816();
    };
    return;
}