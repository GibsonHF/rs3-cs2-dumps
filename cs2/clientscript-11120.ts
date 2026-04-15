//
function script11120(int0: unknown_int): string {
    switch (int0) {
        case 0: {
            return "Target: Below -500)";
        }
        case 1: {
            return "Target: Between -500 and 500";
        }
        case 2: {
            return "Target: Above 500";
        }
    };
    return "Target: Any value";
}