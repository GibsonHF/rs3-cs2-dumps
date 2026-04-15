//
function script11007(int0: struct): void {
    CC_DELETEALL(comp(1311, 391));
    var int1 = 78;
    var int2 = 0;
    var int3 = script11005(int0);
    var int4 = 0;
    CC_CREATE(comp(1311, 391), 5, 0);
    CC_SETSIZE(2, 6, 0, 0);
    CC_SETPOSITION(4, 3, 0, 0);
    if ((int3 > 0)) {
        CC_SETGRAPHIC(18398 as graphic);
    } else {
        CC_SETGRAPHIC(18404 as graphic);
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
        IF_SETTEXT(`Growth until Adolescence: <col=FFFFFF>${inttostring(int4, 10)}%</col>`, comp(1311, 388));
    } else if (((int3 >= 9000) && (int3 < 24000))) {
        IF_SETTEXT(`Growth until Adult: <col=FFFFFF>${inttostring(int4, 10)}%</col>`, comp(1311, 388));
    } else {
        IF_SETTEXT("Adult", comp(1311, 388));
    };
    CC_CREATE(comp(1311, 391), 5, 1);
    CC_SETSIZE(2, 6, 0, 0);
    CC_SETHFLIP(true);
    CC_SETPOSITION(((int2 + CC_GETWIDTH()) + 4), 3, 0, 0);
    if ((int3 > 0)) {
        CC_SETGRAPHIC(18398 as graphic);
    } else {
        CC_SETGRAPHIC(18404 as graphic);
    };
    if ((int2 != 0)) {
        CC_CREATE(comp(1311, 391), 5, 2);
        CC_SETSIZE(int2, 6, 0, 0);
        CC_SETPOSITION(6, 3, 0, 0);
        CC_SETGRAPHIC(18399 as graphic);
    };
    return;
}