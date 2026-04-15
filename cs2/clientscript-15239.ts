//
function script15239(int0: unknown_int, int1: component): void {
    switch (FEDERATED_LOGIN_STATUS()) {
        case 0:
        case 4:
        case 1: {
            return;
        }
        case 20: {
            switch (int0) {
                case 0: {
                    OPENSTORE(PLATFORMTYPE(), "store/runescape");
                    break;
                }
                case 2: {
                    OPENSTORE(PLATFORMTYPE(), "store/runescape/keys");
                    break;
                }
                case 3: {
                    OPENSTORE(PLATFORMTYPE(), "store/runescape/membership");
                    break;
                }
                case 1: {
                    OPENSTORE(PLATFORMTYPE(), "store/runescape/bonds");
                    break;
                }
                case 4: {
                    OPENSTORE(PLATFORMTYPE(), "store/runescape/runecoins");
                    break;
                }
                case 5: {
                    OPENSTORE(PLATFORMTYPE(), "store/runescape/runemetrics");
                    break;
                }
                case 6: {
                    OPENSTORE(PLATFORMTYPE(), "store/runescape/membership");
                    break;
                }
            };
            break;
        }
    };
    IF_SETONTIMER(callback(), int1);
    return;
}