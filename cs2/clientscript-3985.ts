//
function script3985(int0: number, int1: number): [number, number, number] {
    var int2 = script3386(int0, int1);
    var int3 = (int2 / 1440);
    var int4 = (MODULO(int2, 1440) / 60);
    var int5 = MODULO(int2, 60);
    return [int3, int4, int5];
}