//
function script5614(int0: component, int1: int, int2: int, int3: unknown_int, int4: int): [int, unknown_int, int] {
    if ((CLIENTCLOCK() > int4)) {
        var int4 = (CLIENTCLOCK() + 50);
        if ((int3 == 1)) {
            if (((int2 + 5) <= 100)) {
                var int2 = (int2 + 5);
            } else {
                int2 = 100;
                var int3 = 0;
            };
        } else if (((int2 - 5) >= 0)) {
            int2 = (int2 - 5);
        } else {
            int2 = 0;
            int3 = 1;
        };
        IF_SETMODELTINT(int1, 5, 60, int2, int0);
    };
    return [int2, int3, int4];
}