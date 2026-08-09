//
function script20463(int0: number): [number, number] {
    var int1 = 1;
    var int2 = 0;
    var int3 = dbrow_getfield(int0, 1417360, 0);
    if ((int3 == -1)) {
        return [1, -1];
    };
    [int1, int2] = script20469(dbrow_getfield(int3, 1425504, 0), int3, 0, 0);
    return [int1, int2];
}