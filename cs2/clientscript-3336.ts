//
function script3336(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = IF_GET2DANGLE(79691784);
    if ((--int4 < 0)) {
        int4 = 65000;
    };
    IF_SET2DANGLE(int4, 79691784);
    var int5 = MAX(1, (int1 - int0));
    var int6 = ((255 / int5) + 1);
    IF_SETHIDE(0, 79691778);
    IF_SETHIDE(0, 79691780);
    if (((CLIENTCLOCK() < int1) && (CLIENTCLOCK() > int0))) {
        IF_SETTRANS(MIN(175, (IF_GETTRANS(79691793) + int6)), 79691793);
        IF_SETTRANS(MAX(0, (IF_GETTRANS(79691790) - int6)), 79691790);
        IF_SETTRANS(MAX(0, (IF_GETTRANS(79691790) - int6)), 79691792);
        IF_SETTRANS(MAX(0, (IF_GETTRANS(79691790) - int6)), 79691791);
        return;
    };
    if (((CLIENTCLOCK() < int2) && (CLIENTCLOCK() >= int1))) {
        if ((CLIENTCLOCK() >= (int1 + 25))) {
            IF_SETHIDE(1, 79691778);
            IF_SETHIDE(1, 79691779);
            IF_SETHIDE(1, 79691780);
        };
        if ((CLIENTCLOCK() == int1)) {
            script3337(int3, (int2 - int1));
        };
    } else if ((CLIENTCLOCK() >= int2)) {
        if ((IF_GETHIDE(79691778) == 0)) {
            IF_SETHIDE(1, 79691778);
        };
        if ((IF_GETHIDE(79691779) == 0)) {
            IF_SETHIDE(1, 79691779);
        };
        if ((IF_GETHIDE(79691780) == 0)) {
            IF_SETHIDE(1, 79691780);
        };
        if ((IF_GETTRANS(79691783) < 255)) {
            IF_SETTRANS(MIN(255, (IF_GETTRANS(79691793) + 10)), 79691793);
            IF_SETTRANS(MIN(255, (IF_GETTRANS(79691783) + 10)), 79691787);
            IF_SETTRANS(MIN(255, (IF_GETTRANS(79691783) + 10)), 79691788);
            IF_SETTRANS(MIN(255, (IF_GETTRANS(79691783) + 10)), 79691786);
            IF_SETTRANS(MIN(255, (IF_GETTRANS(79691783) + 10)), 79691789);
            IF_SETTRANS(MIN(255, (IF_GETTRANS(79691783) + 10)), 79691790);
            IF_SETTRANS(MIN(255, (IF_GETTRANS(79691783) + 10)), 79691792);
            IF_SETTRANS(MIN(255, (IF_GETTRANS(79691783) + 10)), 79691791);
            IF_SETTRANS(MIN(255, (IF_GETTRANS(79691783) + 10)), 79691784);
            IF_SETTRANS(MIN(255, (IF_GETTRANS(79691783) + 10)), 79691783);
        } else {
            CC_DELETEALL(79691782);
            CC_DELETEALL(79691777);
            IF_SETONTIMER(callback(), 79691776);
            IF_SETHIDE(1, 79691781);
            IF_SETHIDE(script734(varbitplayer_228), 79495169);
        };
    };
    return;
}