//
function script7929(int0: unknown_int, int1: component, int2: int, int3: int): void {
    if ((CLIENTCLOCK() > int3)) {
        if ((++int2 > 7)) {
            var int2 = 0;
        };
        switch (int2) {
            case 0: {
                stack(19207);
                stack(int0);
                IF_SETGRAPHIC();
                break;
            }
            case 1: {
                stack(19208);
                stack(int0);
                IF_SETGRAPHIC();
                break;
            }
            case 2: {
                stack(19209);
                stack(int0);
                IF_SETGRAPHIC();
                break;
            }
            case 3: {
                stack(19210);
                stack(int0);
                IF_SETGRAPHIC();
                break;
            }
            case 4: {
                stack(19211);
                stack(int0);
                IF_SETGRAPHIC();
                break;
            }
            case 5: {
                stack(19212);
                stack(int0);
                IF_SETGRAPHIC();
                break;
            }
            case 6: {
                stack(19213);
                stack(int0);
                IF_SETGRAPHIC();
                break;
            }
            case 7: {
                stack(19214);
                stack(int0);
                IF_SETGRAPHIC();
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