//
function script2719(int0: component): void {
    var int1 = IF_GETGRAPHIC(int0);
    var int2 = -1;
    switch (int1) {
        case 20360: {
            int2 = 20363;
            break;
        }
        case 20361: {
            int2 = 20364;
            break;
        }
        case 20362: {
            int2 = 20365;
            break;
        }
    };
    if ((int2 == -1)) {
        return;
    };
    stack(int2);
    stack(int0);
    IF_SETGRAPHIC();
    return;
}