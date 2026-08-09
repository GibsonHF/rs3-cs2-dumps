//
function script20368(int0: number): [number, number] {
    var int1 = -1;
    var int2 = 0;
    var int3 = -1;
    var int4 = 17177;
    var int5 = 17182;
    var int6 = 17177;
    var int7 = 17182;
    var int8 = 17177;
    var int9 = 17182;
    var int10 = 17177;
    var int11 = 17181;
    switch (int0) {
        case 1: {
            int3 = int4;
            break;
        }
        case 2: {
            int3 = int5;
            break;
        }
        case 3: {
            int3 = int6;
            break;
        }
        case 4: {
            int3 = int7;
            break;
        }
        case 5: {
            int3 = int8;
            break;
        }
        case 6: {
            int3 = int9;
            break;
        }
        case 7: {
            int3 = int10;
            break;
        }
        case 8: {
            int3 = int11;
            break;
        }
        default: {
            script12478("Incorrect milestone value received when claiming prize. Defaulting.");
            int3 = int4;
            break;
        }
    };
    [int1, int2] = dbrow_getfield(int3, 1396736, 0);
    return [int1, int2];
}