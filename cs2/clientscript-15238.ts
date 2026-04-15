//
function script15238(int0: int): void {
    var int1 = -1;
    switch (PLATFORMTYPE()) {
        case 1: {
            int1 = 10;
            break;
        }
        default: {
            return;
        }
    };
    var int2 = comp(1477, 4);
    switch (IF_GETTOP()) {
        case 906: {
            int2 = comp(906, 19);
            break;
        }
        case 744: {
            int2 = comp(744, 187);
            break;
        }
    };
    FEDERATED_LOGIN(int1, 0);
    IF_SETONTIMER(callback(script15239, int0, int2), int2);
    return;
}