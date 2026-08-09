//
function script7929(int0: number, int1: number, int2: number, int3: number): void {
    if ((CLIENTCLOCK() > int3)) {
        var int2 = (int2 + 1);
        if ((int2 > 7)) {
            int2 = 0;
        };
        switch (int2) {
            case 0: {
                IF_SETGRAPHIC(36227 as graphic, int0);
                break;
            }
            case 1: {
                IF_SETGRAPHIC(36228 as graphic, int0);
                break;
            }
            case 2: {
                IF_SETGRAPHIC(36229 as graphic, int0);
                break;
            }
            case 3: {
                IF_SETGRAPHIC(36230 as graphic, int0);
                break;
            }
            case 4: {
                IF_SETGRAPHIC(36231 as graphic, int0);
                break;
            }
            case 5: {
                IF_SETGRAPHIC(36232 as graphic, int0);
                break;
            }
            case 6: {
                IF_SETGRAPHIC(36233 as graphic, int0);
                break;
            }
            case 7: {
                IF_SETGRAPHIC(36234 as graphic, int0);
                break;
            }
        };
        var int3 = (CLIENTCLOCK() + 20);
    };
    IF_SETTEXT(`${inttostring(PRELOAD_PERCENT(), 10)}%`, int1);
    if ((PRELOAD_PERCENT() == 100)) {
        IF_SETONTIMER(callback(), int1);
        IF_SETHIDE(true, int0);
        IF_SETHIDE(true, int1);
    } else {
        IF_SETONTIMER(callback(script7929, int0, int1, int2, int3), int1);
    };
    return;
}