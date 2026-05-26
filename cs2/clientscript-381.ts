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
    IF_SETPOSITION(int0, int2, 0, 0, 25362434);
    IF_SETPOSITION(int0, int2, 0, 0, 21430273);
    IF_SETSIZE(int1, int3, 1, 1, 25362434);
    IF_SETSIZE(int1, int3, 1, 1, 21430273);
    IF_SETSIZE(0, (40 + int3), 1, 1, 21430278);
    IF_SETONRESIZE(callback(script379), 21430278);
    return;
}