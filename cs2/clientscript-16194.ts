//
function script16194(int0: component): void {
    IF_SETOP(1, "", int0);
    script10026(int0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 5);
    if ((IF_CREATENESTED(0, 1, 0, 0, 0, int0) == 1)) {
        CC_SETSIZE(0, 0, 1, 1);
        script7863(int0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 4476 as dbrow, "");
        CC_SETOP(1, "Select");
        if ((IF_CREATENESTED(5, 1, 2, 1, 0, int0) == 1)) {
            CC_SETPOSITION(0, 0, 1, 1);
            CC_SETSIZE(4, 4, 1, 1);
            CC_SETGRAPHIC(16027 as graphic);
        };
        if ((IF_CREATENESTED(4, 1, 3, 1, 0, int0) == 1)) {
            CC_SETPOSITION(0, 4, 1, 2);
            CC_SETSIZE(14, 20, 1, 0);
            CC_SETTEXT("Buy Keys");
            CC_SETCOLOUR(11837586);
            CC_SETTEXTFONT(31 as fontmetrics);
            CC_SETTEXTALIGN(1, 1, 0);
        };
    };
    if ((IF_CREATENESTED(0, 2, 0, 0, 0, int0) == 1)) {
        CC_SETSIZE(0, 0, 1, 1);
        script7863(int0, 2, 1, 2, 0, 0, 0, 1, 1, 0, 0, 1, 1, 4476 as dbrow, "");
        CC_SETOP(1, "Select");
        if ((IF_CREATENESTED(5, 2, 2, 2, 0, int0) == 1)) {
            CC_SETGRAPHIC(16026 as graphic);
            CC_SETPOSITION(0, 0, 1, 1);
            CC_SETSIZE(4, 4, 1, 1);
        };
        if ((IF_CREATENESTED(4, 2, 3, 2, 0, int0) == 1)) {
            CC_SETPOSITION(0, 4, 1, 2);
            CC_SETSIZE(14, 20, 1, 0);
            CC_SETTEXT("Earn Keys");
            CC_SETCOLOUR(11837586);
            CC_SETTEXTFONT(31 as fontmetrics);
            CC_SETTEXTALIGN(1, 1, 0);
        };
    };
    if ((IF_CREATENESTED(0, 3, 0, 0, 0, int0) == 1)) {
        CC_SETSIZE(0, 0, 1, 1);
        script7863(int0, 3, 1, 3, 0, 0, 0, 1, 1, 0, 0, 1, 1, 4476 as dbrow, "");
        CC_SETOP(1, "Select");
        if ((IF_CREATENESTED(5, 3, 2, 3, 0, int0) == 1)) {
            CC_SETPOSITION(0, 0, 1, 1);
            CC_SETASPECT(1, 1);
            CC_SETSIZE(4, 1, 1, 4);
            CC_SETGRAPHIC(13711 as graphic);
        };
        if ((IF_CREATENESTED(4, 3, 3, 3, 0, int0) == 1)) {
            CC_SETPOSITION(0, 4, 1, 2);
            CC_SETSIZE(14, 20, 1, 0);
            CC_SETTEXT("Redeem Bonds");
            CC_SETCOLOUR(11837586);
            CC_SETTEXTFONT(31 as fontmetrics);
            CC_SETTEXTALIGN(1, 1, 0);
        };
    };
    return;
}