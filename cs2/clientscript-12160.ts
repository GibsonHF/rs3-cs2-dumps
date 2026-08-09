//
function script12160(int0: number): [number, string] {
    var int1 = db_find_with_count(16384, int0, 0);
    if ((int1 == 0)) {
        return ["", -1];
    };
    var int2 = dbrow_findnext();
    return [dbrow_getfield(int2, 16400, 0), dbrow_getfield(int2, 16448, 0)];
}