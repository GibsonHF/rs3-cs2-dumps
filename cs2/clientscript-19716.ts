//
function script19716(int0: int, int1: struct, int2: dbrow, int3: int, int4: int): void {
    var int5 = comp(1495, 19);
    var int6 = comp(1495, 18);
    var int7 = comp(1495, 13);
    var int8 = comp(1495, 17);
    switch (int0) {
        case 4: {
            script18695(int1, int5, int6, int8, int7, int5, 50, int2, int3);
            break;
        }
        default: {
            unk11022(`Variant button selected for an unsupported category ${inttostring(int0, 10)}.`);
            return;
        }
    };
    script20076(int4, int3);
    return;
}