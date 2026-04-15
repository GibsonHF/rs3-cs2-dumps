//
function script3336(int0: int, int1: int, int2: int, int3: int): void {
    var int4 = IF_GET2DANGLE(comp(1216, 8));
    if ((--int4 < 0)) {
        int4 = 65000;
    };
    IF_SET2DANGLE(int4, comp(1216, 8));
    var int5 = MAX(1, (int1 - int0));
    var int6 = ((255 / int5) + 1);
    IF_SETHIDE(false, comp(1216, 2));
    IF_SETHIDE(false, comp(1216, 4));
    if (((CLIENTCLOCK() < int1) && (CLIENTCLOCK() > int0))) {
        IF_SETTRANS(MIN(175, (IF_GETTRANS(comp(1216, 17)) + int6)), comp(1216, 17));
        IF_SETTRANS(MAX(0, (IF_GETTRANS(comp(1216, 14)) - int6)), comp(1216, 14));
        IF_SETTRANS(MAX(0, (IF_GETTRANS(comp(1216, 14)) - int6)), comp(1216, 16));
        IF_SETTRANS(MAX(0, (IF_GETTRANS(comp(1216, 14)) - int6)), comp(1216, 15));
        return;
    };
    if (((CLIENTCLOCK() < int2) && (CLIENTCLOCK() >= int1))) {
        if ((CLIENTCLOCK() >= (int1 + 25))) {
            IF_SETHIDE(true, comp(1216, 2));
            IF_SETHIDE(true, comp(1216, 3));
            IF_SETHIDE(true, comp(1216, 4));
        };
        if ((CLIENTCLOCK() == int1)) {
            script3337(int3, (int2 - int1));
        };
    } else if ((CLIENTCLOCK() >= int2)) {
        if ((IF_GETHIDE(comp(1216, 2)) == false)) {
            IF_SETHIDE(true, comp(1216, 2));
        };
        if ((IF_GETHIDE(comp(1216, 3)) == false)) {
            IF_SETHIDE(true, comp(1216, 3));
        };
        if ((IF_GETHIDE(comp(1216, 4)) == false)) {
            IF_SETHIDE(true, comp(1216, 4));
        };
        if ((IF_GETTRANS(comp(1216, 7)) < 255)) {
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 17)) + 10)), comp(1216, 17));
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7)) + 10)), comp(1216, 11));
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7)) + 10)), comp(1216, 12));
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7)) + 10)), comp(1216, 10));
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7)) + 10)), comp(1216, 13));
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7)) + 10)), comp(1216, 14));
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7)) + 10)), comp(1216, 16));
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7)) + 10)), comp(1216, 15));
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7)) + 10)), comp(1216, 8));
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(1216, 7)) + 10)), comp(1216, 7));
        } else {
            CC_DELETEALL(comp(1216, 6));
            CC_DELETEALL(comp(1216, 1));
            IF_SETONTIMER(callback(), comp(1216, 0));
            IF_SETHIDE(1, 79691781);
            IF_SETHIDE(script734(varbitplayer_228), 79495169);
        };
    };
    return;
}