//
function script16571(int0: number): void {
    switch (int0) {
        case 0: {
            IF_SETOP(2, "Always Show Mode", 18284550);
            IF_SETOP(3, "Hidden Mode", 18284550);
            break;
        }
        case 1: {
            IF_SETOP(2, "Dynamic Mode", 18284550);
            IF_SETOP(3, "Hidden Mode", 18284550);
            break;
        }
        case 2: {
            IF_SETOP(2, "Dynamic Mode", 18284550);
            IF_SETOP(3, "Always Show Mode", 18284550);
            break;
        }
    };
    return;
}