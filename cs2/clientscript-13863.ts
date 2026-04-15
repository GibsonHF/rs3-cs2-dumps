//
function script13863(int0: int, int1: int, int2: component, int3: int): unknown_int {
    if (((PLAYERMEMBER() == false) && (int0 == script2390(7)))) {
        script426("The Marketplace button must be within the first eight slots.", int2, int3, 0);
        printmessage("The Marketplace button must be within the first eight slots.");
        return 0;
    };
    return 1;
}