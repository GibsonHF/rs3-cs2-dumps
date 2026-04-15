//
function script934(int0: unknown_int): void {
    switch (int0) {
        case 1: {
            IF_SETPOSITION(105, IF_GETY(comp(18, 12)), 0, 0, comp(18, 12));
            break;
        }
        case 2: {
            IF_SETPOSITION(190, IF_GETY(comp(18, 12)), 0, 0, comp(18, 12));
            break;
        }
        case 3: {
            IF_SETPOSITION(275, IF_GETY(comp(18, 12)), 0, 0, comp(18, 12));
            break;
        }
    };
    IF_SETONTIMER(callback(script936, CLIENTCLOCK()), comp(18, 12));
    return;
}