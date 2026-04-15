//
function script16061(int0: component, int1: component): void {
    var int2 = 0;
    switch (RANDOMINC(3)) {
        case 0: {
            int2 = 5461;
            break;
        }
        case 1: {
            int2 = 6371;
            break;
        }
        case 2: {
            int2 = 3640;
            break;
        }
        case 3: {
            int2 = 4551;
            break;
        }
    };
    IF_SET2DANGLE(int2, int0);
    IF_SET2DANGLE((65535 - int2), int1);
    return;
}