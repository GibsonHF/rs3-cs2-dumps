//
function script16714(): void {
    CC_DELETEALL(comp(1253, 556));
    var int0 = -1;
    while ((++int0 <= 5)) {
        CC_CREATE(comp(1253, 556), 5, int0);
    };
    var int1 = comp(-1, 65535);
    int0 = 0;
    while ((++int0 <= 3)) {
        switch (int0) {
            case 1: {
                int1 = comp(1014, 79);
                break;
            }
            case 2: {
                int1 = comp(1014, 80);
                break;
            }
            case 3: {
                int1 = comp(1014, 81);
                break;
            }
        };
        script11028(int0, int1);
    };
    if ((IF_GETHIDE(comp(1014, 41)) == false)) {
        IF_SETHIDE(true, comp(1014, 41));
    };
    return;
}