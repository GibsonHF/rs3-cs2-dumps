//
function script613(): void {
    var string0 = "null";
    var int0 = varbitplayer_61210;
    switch (int0) {
        case 1: {
            string0 = "90";
            break;
        }
        case 2: {
            string0 = "180";
            break;
        }
        case 3: {
            string0 = "270";
            break;
        }
        default: {
            string0 = "0";
            break;
        }
    };
    MES_TYPED(99, 0, `Room is set to ${string0} degrees`);
    return;
}