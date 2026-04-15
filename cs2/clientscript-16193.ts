//
function script16193(int0: int, int1: int): void {
    var int2 = script11185(int1);
    IF_SETHIDE(true, int2);
    IF_SETHIDE(true, script11609(int1));
    var int3 = IF_GETX(int2);
    var int4 = (IF_GETY(int2) + 100);
    script16201(int0, 4, comp(485, 44), int3, int4, int1, 1, 1);
    return;
}