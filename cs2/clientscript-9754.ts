//
function script9754(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if (((int0 == comp(-1, 65535)) || (int1 == comp(-1, 65535)))) {
        return;
    };
    IF_SETGRAPHIC(18525 as graphic, int0);
    IF_SETGRAPHIC(18526 as graphic, int1);
    if ((int2 != comp(-1, 65535))) {
        IF_SETGRAPHIC(18526 as graphic, int2);
    };
    if ((int3 != comp(-1, 65535))) {
        IF_SETGRAPHIC(18526 as graphic, int3);
    };
    if ((int4 != comp(-1, 65535))) {
        IF_SETGRAPHIC(18526 as graphic, int4);
    };
    return;
}