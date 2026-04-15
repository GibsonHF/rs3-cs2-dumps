//
function script6432(int0: int): int {
    var int1 = 0;
    var int2 = 0;
    switch (int0) {
        case 4: {
            [int2, int1] = script5172();
            return int2;
        }
        case 8: {
            [int2, int1] = script5173();
            return int2;
        }
        case 12: {
            [int2, int1] = script5174();
            return int2;
        }
    };
    script12478(`Herald cape: Unrecognised task set it: ${inttostring(int0, 10)}`);
    return 0;
}