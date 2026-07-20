//
function script20844(int0: number, int1: number): [number, number, number, number] {
    switch (int1) {
        case 0: {
            return script20856(int0);
        }
        case 1: {
            return [0, 0, 0, 0];
        }
    };
    script12478(`Unsupported currency ID ${inttostring(int1, 10)}.`);
    return [0, 0, 0, 0];
}