//
function script16662(): void {
    var int0 = -1 as dbrow;
    switch (script16161()) {
        case 19622: {
            IF_SETTEXT("You open the plague chest and receive:", comp(984, 14));
            IF_SETCOLOUR(65280, comp(984, 3));
            IF_SETCOLOUR(65280, comp(984, 4));
            IF_SETCOLOUR(65280, comp(984, 2));
            int0 = 6219 as dbrow;
            IF_SETONBUTTONCLICK(callback(script16367, 2, -1), 64487437);
            break;
        }
    };
    if (((int0 != -1 as dbrow) && (varplayer_10476 != -1 as obj))) {
        script16663(int0, varplayer_10476, varplayer_10477);
    };
    return;
}