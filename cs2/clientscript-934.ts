//
function script934(int0: number): void {
    switch (int0) {
        case 1: {
            IF_SETPOSITION(105, IF_GETY(1179660), 0, 0, 1179660);
            break;
        }
        case 2: {
            IF_SETPOSITION(190, IF_GETY(1179660), 0, 0, 1179660);
            break;
        }
        case 3: {
            IF_SETPOSITION(275, IF_GETY(1179660), 0, 0, 1179660);
            break;
        }
    };
    IF_SETONTIMER(callback(script936, CLIENTCLOCK()), 1179660);
    return;
}