//
function script11683(int0: component): void {
    CC_DELETEALL(int0);
    var int1 = 1;
    if ((int0 == comp(662, 41))) {
        if ((strcmp("Collapse", IF_GETOP(1, comp(662, 13))) == 0)) {
            int1 = 0;
        };
        script15835(int0, 0, 0, IF_GETWIDTH(int0), IF_GETHEIGHT(int0), 16711680, 0, 14314 as graphic, 28 as fontmetrics, 1, int1);
    } else {
        script15835(int0, 0, 0, IF_GETWIDTH(int0), IF_GETHEIGHT(int0), 16711680, 0, 14314 as graphic, 28 as fontmetrics, 1, 0);
    };
    script4895(int0, 0);
    return;
}