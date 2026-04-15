//
function script16830(int0: int, int1: int, int2: unknown_int): string {
    switch (int1) {
        case 172: {
            return script16833(int2);
        }
        case 173: {
            return script16834(int2);
        }
        case 169: {
            return "+50% Accuracy in combat";
        }
        case 170: {
            return "+100% Accuracy in combat";
        }
        case 171: {
            return script16831(int0);
        }
        case 130: {
            return "Free deaths";
        }
        case 174: {
            return `${inttostring(20, 10)}% chance to double monster drops`;
        }
        case 165:
        case 135: {
            return "";
        }
    };
    script12478(`No string available for event ID ${inttostring(int1, 10)}`);
    return "";
}