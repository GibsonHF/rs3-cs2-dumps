//
function script4102(int0: unknown_int, int1: int): void {
    if ((script4550(847) == 0)) {
        return;
    };
    if (((int0 == 37) || ((int1 == 48) && (int0 == 16)))) {
        if ((IF_GETHIDE(comp(847, 37)) == false)) {
            script8841(int1, 0);
            if ((IF_GETHIDE(comp(847, 23)) == true)) {
                IF_RESUME_PAUSEBUTTON(55509014);
            } else {
                IF_RESUME_PAUSEBUTTON(55509015);
            };
        };
    } else if ((int0 == 69)) {
    } else if ((((int1 == 48) && (int0 == 17)) && (IF_GETHIDE(comp(847, 35)) == false))) {
        script8841(int1, 0);
        if ((IF_GETHIDE(comp(847, 14)) == true)) {
            IF_RESUME_PAUSEBUTTON(55509005);
        } else {
            IF_RESUME_PAUSEBUTTON(55509006);
        };
    };
    return;
}