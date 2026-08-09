//
function script20894(int0: number, string0: string): void {
    var int1 = 0;
    [string0, int1] = script20895(string0);
    if ((int1 == 1)) {
        IF_SETTEXT(string0, comp(105, 225));
    };
    varclient_6788 = string0;
    switch (int0) {
        case 3: {
            script15054();
            script15060(string0, varplayer_135, 0);
            break;
        }
        case 4: {
            script15054();
            script15060(string0, varplayer_135, 0);
            break;
        }
        default: {
            script15060(string0, varplayer_135, 0);
            script12012();
            break;
        }
    };
    script20886();
    return;
}