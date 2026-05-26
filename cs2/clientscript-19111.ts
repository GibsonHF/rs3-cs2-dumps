//
function script19111(): void {
    var int0 = -1 as graphic;
    var int1 = -1 as graphic;
    switch (MAP_LANG()) {
        case 0: {
            int0 = 34137 as graphic;
            int1 = 34141 as graphic;
            break;
        }
        case 1: {
            int0 = 34138 as graphic;
            int1 = 34142 as graphic;
            break;
        }
        case 2: {
            int0 = 34139 as graphic;
            int1 = 34143 as graphic;
            break;
        }
        case 3: {
            int0 = 34140 as graphic;
            int1 = 34144 as graphic;
            break;
        }
    };
    IF_SETGRAPHIC(int0, comp(1147, 68));
    IF_SETGRAPHIC(int1, comp(1147, 69));
    return;
}