//
function script9640(int0: int): int {
    var int1 = 0;
    var int2 = (int0 / 32);
    var int3 = MODULO(int0, 32);
    switch (int2) {
        case 0: {
            int1 = TESTBIT(varclient_3934, int3);
            break;
        }
    };
    return int1;
}