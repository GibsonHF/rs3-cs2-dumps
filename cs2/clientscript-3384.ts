//[proc,autosetup]
function script3384(int0: number): void {
    var int1 = -1;
    UNKNOWN_COMMAND_455();
    switch (int0) {
        case 0: {
            int1 = 57802753;
            break;
        }
        case 1: {
            int1 = 48627713;
            break;
        }
        case 2: {
            int1 = 59703296;
            break;
        }
        case 4: {
            int1 = 57802753;
            break;
        }
        case 3: {
            int1 = 48759132;
            break;
        }
        default: {
            return;
        }
    };
    IF_SETONTIMER(callback(script3932, int1, int0), int1);
    return;
}