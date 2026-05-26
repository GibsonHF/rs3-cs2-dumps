//
function script1416(int0: number, int1: number): number {
    IF_SETPOSITION(IF_GETX(int0), (225 - (int1 * IF_GETHEIGHT(int0))), 0, 0, int0);
    return ++int1;
}