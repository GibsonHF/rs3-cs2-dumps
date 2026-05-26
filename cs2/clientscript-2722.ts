//
function script2722(int0: number): void {
    script5219(6029348);
    var int1 = IF_GETGRAPHIC(int0);
    var int2 = -1 as graphic;
    switch (int1) {
        case 20363: {
            int2 = 20360 as graphic;
            break;
        }
        case 20364: {
            int2 = 20361 as graphic;
            break;
        }
        case 20365: {
            int2 = 20362 as graphic;
            break;
        }
    };
    if ((int2 == -1 as graphic)) {
        return;
    };
    IF_SETGRAPHIC(int2, int0);
    return;
}