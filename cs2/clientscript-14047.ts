//
function script14047(int0: number, int1: number): void {
    var int2 = 31190 as graphic;
    if ((int1 == 1)) {
        int2 = 31191 as graphic;
    };
    var int3 = 0;
    var int4 = comp(-1, 65535);
    while ((++int3 <= 5)) {
        switch (int3) {
            case 1: {
                int4 = comp(1433, 54);
                break;
            }
            case 2: {
                int4 = comp(1433, 53);
                break;
            }
            case 3: {
                int4 = comp(1433, 52);
                break;
            }
            case 4: {
                int4 = comp(1433, 51);
                break;
            }
            case 5: {
                int4 = comp(1433, 50);
                break;
            }
        };
        if ((int0 >= int3)) {
            IF_SETGRAPHIC(int2, int4);
        } else {
            IF_SETGRAPHIC(31192 as graphic, int4);
        };
    };
    return;
}