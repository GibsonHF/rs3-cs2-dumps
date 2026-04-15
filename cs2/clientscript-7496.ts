//
function script7496(int0: unknown_int): void {
    IF_SETHIDE(true, comp(554, 2));
    IF_SETHIDE(true, comp(554, 4));
    IF_SETHIDE(true, comp(554, 5));
    IF_SETHIDE(true, comp(554, 6));
    IF_SETHIDE(true, comp(554, 7));
    IF_SETHIDE(true, comp(554, 8));
    IF_SETHIDE(true, comp(554, 9));
    IF_SETHIDE(false, comp(554, 10));
    IF_SETHIDE(false, comp(554, 11));
    switch (int0) {
        case 0: {
            IF_SETHIDE(false, comp(554, 2));
            IF_SETHIDE(true, comp(554, 10));
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(554, 4));
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(554, 5));
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(554, 6));
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(554, 7));
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(554, 8));
            break;
        }
        case 6: {
            IF_SETHIDE(false, comp(554, 9));
            IF_SETHIDE(true, comp(554, 11));
            break;
        }
    };
    return;
}