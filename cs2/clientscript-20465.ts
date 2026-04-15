//
function script20465(int0: struct, int1: int): int {
    switch (int1) {
        case 0: {
            return script20613(int0);
        }
        case 1: {
            return 0;
        }
    };
    script12478(`Unsupported currency ID ${inttostring(int1, 10)}.`);
    return 0;
}