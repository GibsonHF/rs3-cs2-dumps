//[proc,autosetup]
function script3384(int0: unknown_int): void {
    var int1 = comp(-1, 65535);
    UNKNOWN_COMMAND_455();
    switch (int0) {
        case 0: {
            int1 = comp(882, 1);
            break;
        }
        case 1: {
            int1 = comp(742, 1);
            break;
        }
        case 2: {
            int1 = comp(911, 0);
            break;
        }
        case 4: {
            int1 = comp(882, 1);
            break;
        }
        case 3: {
            int1 = comp(744, 347);
            break;
        }
        default: {
            return;
        }
    };
    IF_SETONTIMER(callback(script3932, int1, int0), int1);
    return;
}