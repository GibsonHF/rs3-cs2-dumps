//
function script173(int0: int): void {
    if ((varclient_2231 == -1)) {
        switch (int0) {
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25: {
                varclient_2231 = int0;
                break;
            }
            default: {
                varclient_2231 = script8524();
                break;
            }
        };
        if ((varclient_2231 != -1)) {
            script1558(varclient_2231, 0);
        };
    };
    return;
}