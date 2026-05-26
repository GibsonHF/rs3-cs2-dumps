//
function script11007(int0: number): void {
    CC_DELETEALL(85918087);
    var int1 = 78;
    var int2 = 0;
    var int3 = script11005(int0);
    var int4 = 0;
    CC_CREATE(85918087, 5, 0);
    CC_SETSIZE(2, 6, 0, 0);
    CC_SETPOSITION(4, 3, 0, 0);
    if ((int3 > 0)) {
        CC_SETGRAPHIC(18398);
    } else {
        CC_SETGRAPHIC(18404);
    };
    if (((int3 == 0) || (int3 == 9000))) {
        int2 = 0;
    } else if ((int3 < 9000)) {
        int2 = ((((int1 * 1000) / 9000) * int3) / 1000);
    } else if (((int3 > 9000) && (int3 < 24000))) {
        int2 = ((((int1 * 1000) / (24000 - 9000)) * (int3 - 9000)) / 1000);
    } else if ((int3 == 24000)) {
        int2 = int1;
    };
    int4 = ((int2 * 100) / int1);
    if ((int3 < 9000)) {
        IF_SETTEXT(`Growth until Adolescence: <col=FFFFFF>${inttostring(int4, 10)}%</col>`, 85918084);
    } else if (((int3 >= 9000) && (int3 < 24000))) {
        IF_SETTEXT(`Growth until Adult: <col=FFFFFF>${inttostring(int4, 10)}%</col>`, 85918084);
    } else {
        IF_SETTEXT("Adult", 85918084);
    };
    CC_CREATE(85918087, 5, 1);
    CC_SETSIZE(2, 6, 0, 0);
    CC_SETHFLIP(1);
    CC_SETPOSITION(((int2 + CC_GETWIDTH()) + 4), 3, 0, 0);
    if ((int3 > 0)) {
        CC_SETGRAPHIC(18398);
    } else {
        CC_SETGRAPHIC(18404);
    };
    if ((int2 != 0)) {
        CC_CREATE(85918087, 5, 2);
        CC_SETSIZE(int2, 6, 0, 0);
        CC_SETPOSITION(6, 3, 0, 0);
        CC_SETGRAPHIC(18399);
    };
    return;
}