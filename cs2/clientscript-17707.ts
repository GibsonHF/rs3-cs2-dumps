//
function script17707(int0: int, int1: unknown_int): string {
    switch (int0) {
        case 1: {
            if ((int1 == 1)) {
                return "<sprite=10431><nbsp>Single-target";
            };
            return "Single-target";
        }
        case 2: {
            if ((int1 == 1)) {
                return "<sprite=10429><nbsp>Multi-target";
            };
            return "Multi-target";
        }
        case 3: {
            if ((int1 == 1)) {
                return "<sprite=10430><nbsp>Self-target";
            };
            return "Self-target";
        }
        case 4: {
            if ((int1 == 1)) {
                return "<sprite=10428><nbsp>Area-target";
            };
            return "Area-target";
        }
    };
    return "";
}