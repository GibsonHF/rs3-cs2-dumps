//
function script13143(int0: unknown_int, int1: unknown_int): void {
    if (((int0 == 16) || (int1 == 49))) {
        script13144(1);
    } else if (((int0 == 17) || (int1 == 50))) {
        script13144(2);
    } else if (((int0 == 18) || (int1 == 51))) {
        script13144(3);
    } else if (((int0 == 19) || (int1 == 52))) {
        script13144(4);
    } else if (((int0 == 20) || (int1 == 53))) {
        script13144(5);
    } else if (((int0 == 21) || (int1 == 54))) {
        script13144(6);
    } else if (((int0 == 22) || (int1 == 55))) {
        script13144(7);
    } else if ((int0 == 13)) {
        if ((TESTBIT(varclient_841, 0) == 1)) {
            IF_RESUME_PAUSEBUTTON(85590070);
        } else {
            script675();
        };
    };
    return;
}