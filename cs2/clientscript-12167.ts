//
function script12167(int0: unknown_int): void {
    CC_CLEAROPS();
    if ((MAP_MEMBERS() == 0)) {
        return;
    };
    switch (int0) {
        case 2: {
            CC_SETOP(1, "Check Materials");
            CC_SETHIDE(false);
            break;
        }
        case 3: {
            CC_SETOP(1, "Check Charge Pack");
            CC_SETHIDE(false);
            break;
        }
    };
    return;
}