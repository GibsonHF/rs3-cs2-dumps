//
function script20871(int0: number, string0: string): void {
    var int1 = 0;
    [string0, int1] = script20895(string0);
    if ((int1 == 1)) {
        IF_SETTEXT(string0, comp(707, 15));  // stock_favourites:search_input_display ?
    };
    varclient_6788 = string0;
    switch (int0) {
        case 3: {
            varclient_6788 = "";
            script15016();
            break;
        }
        case 4: {
            script15060(string0, varplayer_135, 0);
            break;
        }
        default: {
            script15060(string0, varplayer_135, 0);
            script20639();
            break;
        }
    };
    return;
}