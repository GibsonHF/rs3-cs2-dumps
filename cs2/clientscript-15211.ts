//
function script15211(int0: number, int1: number): number {
    var int2 = 0;
    if ((int1 == 1)) {
        stack(int2);
        int2 = (int2 + 1);
        pop_array(7);
    };
    switch (PLATFORMTYPE()) {
        case 2: {
            stack(int2);
            int2 = (int2 + 1);
            pop_array(5);
            break;
        }
        case 3: {
            stack(int2);
            int2 = (int2 + 1);
            pop_array(6);
            break;
        }
    };
    return int2;
}