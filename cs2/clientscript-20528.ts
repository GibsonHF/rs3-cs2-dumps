//
function script20528(int0: int, int1: struct, int2: unknown_int): void {
    if ((int0 <= -1)) {
        return;
    };
    if ((int1 == -1 as struct)) {
        if ((((int2 == -1) || (int2 == 0)) || (int2 == 2))) {
            script3927(int0);
        };
        return;
    };
    var int3 = 0;
    switch (script20451(int1)) {
        case 0: {
            int3 = 1;
            break;
        }
        case 1: {
            if (((int2 != 3) && (int2 != 4))) {
                int3 = 1;
            };
            break;
        }
        case 2: {
            if ((int2 != 6)) {
                int3 = 1;
            };
            break;
        }
    };
    if ((int3 == 1)) {
        if ((((int2 == 0) || (int2 == 1)) || (int2 == 2))) {
            script3927(int0);
        };
    } else {
        script3880(int0, int2);
    };
    return;
}