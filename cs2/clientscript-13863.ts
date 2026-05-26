//
function script13863(int0: number, int1: number, int2: number, int3: number): number {
    if (((PLAYERMEMBER() == 0) && (int0 == script2390(7)))) {
        script426("The Marketplace button must be within the first eight slots.", int2, int3, 0);
        printmessage("The Marketplace button must be within the first eight slots.");
        return 0;
    };
    return 1;
}