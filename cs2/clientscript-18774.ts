//
function script18774(int0: int): void {
    var int1 = -1;
    IF_SETTRANS(int0, comp(764, 3));
    IF_SETTRANS(int0, comp(764, 5));
    IF_SETTRANS(int0, comp(764, 14));
    IF_SETTRANS(int0, comp(764, 17));
    IF_SETTRANS(int0, comp(764, 20));
    IF_SETTRANS(int0, comp(764, 18));
    int1 = -1;
    while ((++int1 < IF_GETNEXTSUBID(comp(764, 13)))) {
        if ((CC_FIND(comp(764, 13), int1) == 1)) {
            CC_SETTRANS(int0);
        };
    };
    int1 = -1;
    while ((++int1 < IF_GETNEXTSUBID(comp(764, 1)))) {
        if ((CC_FIND(comp(764, 1), int1) == 1)) {
            CC_SETTRANS(MIN((int0 + 224), 255));
        };
    };
    IF_SETTRANS(int0, comp(764, 21));
    IF_SETTRANS(int0, comp(764, 22));
    IF_SETTRANS(int0, comp(764, 23));
    IF_SETTRANS(int0, comp(764, 24));
    IF_SETTRANS(int0, comp(764, 25));
    IF_SETTRANS(int0, comp(764, 26));
    IF_SETTRANS(int0, comp(764, 27));
    IF_SETTRANS(int0, comp(764, 28));
    IF_SETTRANS(int0, comp(764, 29));
    IF_SETTRANS(int0, comp(764, 30));
    IF_SETTRANS(int0, comp(764, 31));
    IF_SETTRANS(int0, comp(764, 32));
    IF_SETTRANS(int0, comp(764, 33));
    IF_SETTRANS(int0, comp(764, 34));
    IF_SETTRANS(int0, comp(764, 35));
    IF_SETTRANS(int0, comp(764, 36));
    IF_SETTRANS(int0, comp(764, 37));
    return;
}