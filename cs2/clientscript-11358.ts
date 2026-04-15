//
function script11358(int0: struct, int1: int): void {
    var int2 = struct_getparam(int0, 5062);
    if ((int1 > 0)) {
        int2 = int1;
    };
    switch (int0) {
        case 31326: {
            varclient_4788 = ((int2 * 30) + CLIENTCLOCK());
            break;
        }
        case 31330: {
            varclient_4790 = ((int2 * 30) + CLIENTCLOCK());
            break;
        }
        case 31331: {
            varclient_4789 = ((int2 * 30) + CLIENTCLOCK());
            break;
        }
        case 31333: {
            varclient_4791 = ((int2 * 30) + CLIENTCLOCK());
            break;
        }
        case 31328: {
            varclient_4792 = ((int2 * 30) + CLIENTCLOCK());
            break;
        }
        case 31332: {
            varclient_4793 = ((int2 * 30) + CLIENTCLOCK());
            break;
        }
    };
    return;
}