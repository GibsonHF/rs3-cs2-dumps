//
function script7514(int0: unknown_int, int1: component): void {
    var string0 = "";
    var int2 = -1 as graphic;
    switch (int0) {
        case 1: {
            int2 = IF_GETGRAPHIC(comp(1389, 9));
            break;
        }
        case 2: {
            int2 = IF_GETGRAPHIC(comp(1389, 10));
            break;
        }
        case 3: {
            int2 = IF_GETGRAPHIC(comp(1389, 11));
            break;
        }
        case 4: {
            int2 = IF_GETGRAPHIC(comp(1389, 12));
            break;
        }
        case 5: {
            int2 = IF_GETGRAPHIC(comp(1389, 13));
            break;
        }
    };
    string0 = script7515(int2);
    script8800(string0, int1, -1);
    return;
}