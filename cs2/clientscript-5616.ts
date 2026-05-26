//
function script5616(): void {
    if ((varbitplayer_11719 == 0)) {
        IF_SETSIZE(0, IF_GETHEIGHT(78512129), 0, 0, 78512129);
    } else {
        switch (varbitplayer_11719) {
            case 1: {
                IF_SETONTIMER(callback(script5617, (IF_GETWIDTH(78512136) / 4)), 78512136);
                break;
            }
            case 2: {
                IF_SETONTIMER(callback(script5617, (IF_GETWIDTH(78512136) / 2)), 78512136);
                break;
            }
            case 3: {
                IF_SETONTIMER(callback(script5617, ((IF_GETWIDTH(78512136) * 3) / 4)), 78512136);
                break;
            }
            case 4: {
                IF_SETONTIMER(callback(script5617, IF_GETWIDTH(78512136)), 78512136);
                break;
            }
        };
    };
    return;
}