//
function script15405(int0: number, int1: number): void {
    var int2 = script17704(int0);
    if ((int2 != 0)) {
        switch (int2) {
            case 1: {
                IF_SETGRAPHIC(10431, int1);
                break;
            }
            case 2: {
                IF_SETGRAPHIC(10429, int1);
                break;
            }
            case 3: {
                IF_SETGRAPHIC(10430, int1);
                break;
            }
            case 4: {
                IF_SETGRAPHIC(10428, int1);
                break;
            }
            default: {
                IF_SETGRAPHIC(-1, int1);
                break;
            }
        };
        IF_SETHIDE(0, int1);
    } else {
        IF_SETGRAPHIC(-1, int1);
        IF_SETHIDE(1, int1);
    };
    return;
}