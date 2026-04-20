//
function script11288(int0: int, int1: int): void {
    var int2 = script88(int0);
    switch (int1) {
        case 2: {
            unk11023(int2, 1470496, 1);
            script89(int0);
            break;
        }
        case 3: {
            unk11023(int2, 1470496, 0);
            script89(int0);
            break;
        }
        case 0: {
            unk11023(int2, 1470480, 1);
            script89(int0);
            break;
        }
        case 1: {
            unk11023(int2, 1470480, 0);
            script89(int0);
            break;
        }
        default: {
            script12478(`PVM hub portal sort type ${inttostring(int1, 10)} is missing from switch case.`);
            break;
        }
    };
    return;
}