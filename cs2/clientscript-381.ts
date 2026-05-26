//
function script381(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int0, int2, int1, int3] = script2956();
    int0 = (int0 + 5);
    int2 = (int2 + 5);
    int1 = (int1 + 5);
    int3 = (int3 + 5);
    IF_SETPOSITION(int0, int2, 0, 0, comp(387, 2));
    IF_SETPOSITION(int0, int2, 0, 0, comp(327, 1));
    IF_SETSIZE(int1, int3, 1, 1, comp(387, 2));
    IF_SETSIZE(int1, int3, 1, 1, comp(327, 1));
    IF_SETSIZE(0, (40 + int3), 1, 1, comp(327, 6));
    IF_SETONRESIZE(callback(script379), comp(327, 6));
    return;
}