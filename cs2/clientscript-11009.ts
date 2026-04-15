//
function script11009(): void {
    CC_DELETEALL(comp(1311, 406));
    var int0 = 68;
    var int1 = 0;
    CC_CREATE(comp(1311, 406), 5, 0);
    CC_SETSIZE(2, 6, 0, 0);
    CC_SETPOSITION(4, 3, 0, 0);
    if ((varbitplayer_17638 > 0)) {
        CC_SETGRAPHIC(18398 as graphic);
    } else {
        CC_SETGRAPHIC(18404 as graphic);
    };
    if ((varbitplayer_17638 == 60)) {
        int1 = int0;
    } else if ((varbitplayer_17638 > 0)) {
        int1 = ((int0 / 60) * varbitplayer_17638);
    } else {
        int1 = 0;
    };
    if ((varbitplayer_17638 == 60)) {
        IF_SETTEXT(`${inttostring(0, 10)}${inttostring(1, 10)}:${inttostring(0, 10)}${inttostring(0, 10)}`, comp(1311, 403));
    } else if ((varbitplayer_17638 == 0)) {
        IF_SETTEXT("No Bonus", comp(1311, 403));
    } else if ((varbitplayer_17638 < 10)) {
        IF_SETTEXT(`${inttostring(0, 10)}${inttostring(0, 10)}:${inttostring(0, 10)}${inttostring(varbitplayer_17638, 10)}`, comp(1311, 403));
    } else {
        IF_SETTEXT(`${inttostring(0, 10)}${inttostring(0, 10)}:${inttostring(varbitplayer_17638, 10)}`, comp(1311, 403));
    };
    CC_CREATE(comp(1311, 406), 5, 1);
    CC_SETSIZE(2, 6, 0, 0);
    CC_SETHFLIP(true);
    CC_SETPOSITION(((int1 + CC_GETWIDTH()) + 4), 3, 0, 0);
    if ((varbitplayer_17638 > 0)) {
        CC_SETGRAPHIC(18398 as graphic);
    } else {
        CC_SETGRAPHIC(18404 as graphic);
    };
    if ((int1 != 0)) {
        CC_CREATE(comp(1311, 406), 5, 2);
        CC_SETSIZE(int1, 6, 0, 0);
        CC_SETPOSITION(6, 3, 0, 0);
        CC_SETGRAPHIC(18399 as graphic);
    };
    return;
}