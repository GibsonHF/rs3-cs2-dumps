//
function script14259(int0: int): void {
    var int1 = script9670(int0, 1);
    var int2 = script6427(int1);
    script13972(comp(1015, 97), comp(1015, 98), 28595 as struct, "Select Troops", int1);
    IF_SETHIDE(int2, comp(1015, 51));
    IF_SETHIDE(int2, comp(1015, 39));
    int1 = script9670(int0, 2);
    int2 = script6427(int1);
    script13972(comp(1015, 100), comp(1015, 101), 28595 as struct, "Select Commands", int1);
    IF_SETHIDE(int2, comp(1015, 52));
    IF_SETHIDE(int2, comp(1015, 40));
    return;
}