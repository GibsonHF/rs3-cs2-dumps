//
function script16662(): void {
    var int0 = -1;
    switch (script16161()) {
        case 19622: {
            IF_SETTEXT("You open the plague chest and receive:", 64487438);
            IF_SETCOLOUR(65280, 64487427);
            IF_SETCOLOUR(65280, 64487428);
            IF_SETCOLOUR(65280, 64487426);
            int0 = 6219;
            IF_SETONBUTTONCLICK(callback(script16367, 2, -1), 64487437);
            break;
        }
    };
    if (((int0 != -1) && (varplayer_10476 != -1 as obj))) {
        script16663(int0, varplayer_10476, varplayer_10477);
    };
    return;
}