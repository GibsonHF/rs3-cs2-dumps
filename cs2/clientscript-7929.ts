//
function script7929(int0: number, int1: number, int2: number, int3: number): void {
    if ((CLIENTCLOCK() > int3)) {
        if ((++int2 > 7)) {
            var int2 = 0;
        };
        switch (int2) {
            case 0: {
                IF_SETGRAPHIC(19207 as graphic, int0);
                break;
            }
            case 1: {
                IF_SETGRAPHIC(19208 as graphic, int0);
                break;
            }
            case 2: {
                IF_SETGRAPHIC(19209 as graphic, int0);
                break;
            }
            case 3: {
                IF_SETGRAPHIC(19210 as graphic, int0);
                break;
            }
            case 4: {
                IF_SETGRAPHIC(19211 as graphic, int0);
                break;
            }
            case 5: {
                IF_SETGRAPHIC(19212 as graphic, int0);
                break;
            }
            case 6: {
                IF_SETGRAPHIC(19213 as graphic, int0);
                break;
            }
            case 7: {
                IF_SETGRAPHIC(19214 as graphic, int0);
                break;
            }
        };
        var int3 = (CLIENTCLOCK() + 20);
    };
    IF_SETTEXT(`${inttostring(PRELOAD_PERCENT(), 10)}%`, int1);
    if ((PRELOAD_PERCENT() == 100)) {
        IF_SETONTIMER(callback(), int1);
        IF_SETHIDE(1, int0);
        IF_SETHIDE(1, int1);
    } else {
        IF_SETONTIMER(callback(script7929, int0, int1, int2, int3), int1);
    };
    return;
}