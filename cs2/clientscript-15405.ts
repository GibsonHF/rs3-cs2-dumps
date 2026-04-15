//
function script15405(int0: struct, int1: component): void {
    var int2 = script17704(int0);
    if ((int2 != 0)) {
        switch (int2) {
            case 1: {
                stack(10431);
                stack(int1);
                IF_SETGRAPHIC();
                break;
            }
            case 2: {
                stack(10429);
                stack(int1);
                IF_SETGRAPHIC();
                break;
            }
            case 3: {
                stack(10430);
                stack(int1);
                IF_SETGRAPHIC();
                break;
            }
            case 4: {
                stack(10428);
                stack(int1);
                IF_SETGRAPHIC();
                break;
            }
            default: {
                stack(-1);
                stack(int1);
                IF_SETGRAPHIC();
                break;
            }
        };
        IF_SETHIDE(false, int1);
    } else {
        stack(-1);
        stack(int1);
        IF_SETGRAPHIC();
        IF_SETHIDE(1, int1);
    };
    return;
}