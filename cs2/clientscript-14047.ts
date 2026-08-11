//
function script14047(int0: number, int1: number): void {
    var int2 = 31190 as graphic;
    if ((int1 == 1)) {
        int2 = 31191 as graphic;
    };
    var int3 = 0;
    var int4 = comp(-1, 65535);
    int3 = (int3 + 1);
    while ((int3 <= 5)) {
        switch (int3) {
            case 1: {
                int4 = comp(1433, 54);  // escape_menu:csat_star_1
                break;
            }
            case 2: {
                int4 = comp(1433, 53);  // escape_menu:csat_star_2
                break;
            }
            case 3: {
                int4 = comp(1433, 52);  // escape_menu:csat_star_3
                break;
            }
            case 4: {
                int4 = comp(1433, 51);  // escape_menu:csat_star_4
                break;
            }
            case 5: {
                int4 = comp(1433, 50);  // escape_menu:csat_star_5
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