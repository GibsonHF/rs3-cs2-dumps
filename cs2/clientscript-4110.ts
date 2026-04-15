//
function script4110(int0: component): void {
    var int1 = enum_getreverseindex(9, 0, 11270 as cs2enum, int0, 0);
    var int2 = script672(int1);
    var int3 = SCALE(65536, 360, (int2 * 90));
    IF_SET2DANGLE(int3, int0);
    return;
}