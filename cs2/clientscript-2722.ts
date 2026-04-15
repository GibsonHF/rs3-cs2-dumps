//
function script2722(int0: component): void {
    script5219(comp(92, 36));
    var int1 = IF_GETGRAPHIC(int0);
    var int2 = -1;
    switch (int1) {
        case 20363: {
            int2 = 20360;
            break;
        }
        case 20364: {
            int2 = 20361;
            break;
        }
        case 20365: {
            int2 = 20362;
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