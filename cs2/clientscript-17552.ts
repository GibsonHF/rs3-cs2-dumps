//
function script17552(): void {
    var int0 = 77398038;
    switch (varplayer_10946) {
        case 45780: {
            IF_SETTEXT(`Wave: ${inttostring((varplayer_10949 + 1), 10)}`, int0);
            break;
        }
        case 46256: {
            IF_SETTEXT(`Edicts active:<br> ${inttostring(varplayer_10949, 10)}`, int0);
            break;
        }
        default: {
            IF_SETTEXT(`Phase: ${inttostring((varplayer_10949 + 1), 10)}`, int0);
            break;
        }
    };
    return;
}