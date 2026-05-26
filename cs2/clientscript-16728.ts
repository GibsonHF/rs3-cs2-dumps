//
function script16728(int0: number, int1: number): void {
    if ((CC_FINDBYCATEGORY(31784973, 0, 1) == 1)) {
        if ((int0 != 5)) {
            CC_SETGRAPHIC(20673);
        } else {
            CC_SETGRAPHIC(-1);
        };
    } else if (((int0 != 5) && (IF_FIND(31784973) == 1))) {
        script7919(0, 1, 20, 0, 1, 0, 28, 27, 0, 0, 20673, 0, 0, 0, 0);
    };
    if ((CC_FINDBYCATEGORY(31784973, 0, 2) == 1)) {
        if ((int1 > 1)) {
            CC_SETGRAPHIC(script10980(int1));
        } else {
            CC_SETGRAPHIC(-1);
        };
    } else if (((int1 > 1) && (IF_FIND(31784973) == 1))) {
        script7919(0, 2, 0, 30, 1, 0, 50, 50, 0, 0, script10980(int1), 0, 0, 0, 0);
    };
    return;
}