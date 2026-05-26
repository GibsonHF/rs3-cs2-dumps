//
function script18495(int0: number, int1: number): [number, number, number, number] {
    var int2 = script19981(int0, int1);
    var int3 = -1 as struct;
    var int4 = -1 as graphic;
    [int3, int4] = dbrow_getfield(int2, 1138720, 0);
    var int5 = -1 as obj;
    var int6 = 0;
    [int5, int6] = dbrow_getfield(int2, 1138704, 0);
    return [int5, int6, int3, int4];
}