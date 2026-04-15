//
function script11731(int0: component, int1: int): void {
    if ((int1 > 50)) {
        switch (IF_GETGRAPHIC(int0)) {
            case 25852: {
                stack(25853);
                stack(int0);
                IF_SETGRAPHIC();
                break;
            }
            case 25853: {
                stack(25852);
                stack(int0);
                IF_SETGRAPHIC();
                break;
            }
            case 25857: {
                stack(25859);
                stack(int0);
                IF_SETGRAPHIC();
                break;
            }
            case 25862: {
                stack(25863);
                stack(int0);
                IF_SETGRAPHIC();
                break;
            }
            case 25863: {
                stack(25862);
                stack(int0);
                IF_SETGRAPHIC();
                break;
            }
            case 23802: {
                stack(23803);
                stack(int0);
                IF_SETGRAPHIC();
                break;
            }
            case 23803: {
                stack(23805);
                stack(int0);
                IF_SETGRAPHIC();
                break;
            }
            case 23805: {
                stack(23802);
                stack(int0);
                IF_SETGRAPHIC();
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