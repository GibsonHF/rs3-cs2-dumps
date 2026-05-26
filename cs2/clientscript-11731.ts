//
function script11731(int0: number, int1: number): void {
    if ((int1 > 50)) {
        switch (IF_GETGRAPHIC(int0)) {
            case 25852: {
                IF_SETGRAPHIC(25853 as graphic, int0);
                break;
            }
            case 25853: {
                IF_SETGRAPHIC(25852 as graphic, int0);
                break;
            }
            case 25857: {
                IF_SETGRAPHIC(25859 as graphic, int0);
                break;
            }
            case 25862: {
                IF_SETGRAPHIC(25863 as graphic, int0);
                break;
            }
            case 25863: {
                IF_SETGRAPHIC(25862 as graphic, int0);
                break;
            }
            case 23802: {
                IF_SETGRAPHIC(23803 as graphic, int0);
                break;
            }
            case 23803: {
                IF_SETGRAPHIC(23805 as graphic, int0);
                break;
            }
            case 23805: {
                IF_SETGRAPHIC(23802 as graphic, int0);
                break;
            }
            default: {
                IF_SETONTIMER(callback(), int0);
                break;
            }
        };
        var int1 = 0;
    } else {
        int1 = (int1 + 1);
    };
    IF_SETONTIMER(callback(script11731, int0, int1), int0);
    return;
}