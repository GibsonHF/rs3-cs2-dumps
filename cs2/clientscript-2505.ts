//
function script2505(): void {
    CC_DELETEALL(comp(905, 67));
    IF_SETSCROLLSIZE(0, 0, comp(905, 14));
    IF_SETSCROLLPOS(0, 0, comp(905, 14));
    var int0 = IF_GETY(comp(905, 13));
    var int1 = IF_GETHEIGHT(comp(905, 13));
    var int2 = IF_GETHEIGHT(comp(905, 100));
    IF_SETSIZE(IF_GETWIDTH(comp(905, 14)), 0, 0, 1, comp(905, 14));
    if (((int0 + int1) > int2)) {
        IF_SETSIZE(IF_GETWIDTH(comp(905, 14)), (int2 - int0), 0, 0, comp(905, 14));
        IF_SETSIZE(16, (int2 - int0), 0, 0, comp(905, 67));
        IF_SETSCROLLSIZE(0, int1, comp(905, 14));
        script7791(59310147, 59310094);
    };
    IF_SETHIDE(false, comp(905, 13));
    IF_SETGRAPHIC(15558 as graphic, comp(905, 28));
    IF_SETGRAPHIC(15559 as graphic, comp(905, 29));
    IF_SETGRAPHIC(15560 as graphic, comp(905, 30));
    return;
}