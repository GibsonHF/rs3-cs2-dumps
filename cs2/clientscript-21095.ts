//
function script21095(): void {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    if ((dbrow_getfield(int0, 1343664, 0) == 1)) {
        stack(int0);
        script20948();
        [int3, int4, int5] = [];
        switch (int1) {
            case 0: {
                var int2 = script12585(int3);
                break;
            }
            case 1: {
                int2 = script12585(int4);
                break;
            }
            case 2: {
                int2 = script12585(int5);
                break;
            }
        };
    };
    stack(int2);
    return;
}