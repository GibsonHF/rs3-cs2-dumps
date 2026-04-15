//
function script11102(int0: int): void {
    IF_SETMODEL(48043 as model, comp(866, 4));
    IF_SETMODEL(48036 as model, comp(866, 6));
    IF_SETMODEL(48044 as model, comp(866, 7));
    IF_SETMODEL(48046 as model, comp(866, 8));
    switch (int0) {
        case 1: {
            IF_SETMODEL(48017 as model, comp(866, 4));
            break;
        }
        case 2: {
            IF_SETMODEL(48033 as model, comp(866, 6));
            break;
        }
        case 3: {
            IF_SETMODEL(48053 as model, comp(866, 7));
            break;
        }
        case 4: {
            IF_SETMODEL(48019 as model, comp(866, 8));
            break;
        }
        default: {
            return;
        }
    };
    return;
}