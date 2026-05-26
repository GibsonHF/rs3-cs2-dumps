//
function script11536(): void {
    if ((varbitplayer_51271 == 0)) {
        IF_SETGRAPHIC(27372 as graphic, comp(1253, 5));
        CC_DELETEALL(comp(1253, 3));
        IF_SETHIDE(true, comp(300, 1));
    } else {
        script17173();
        IF_SETHIDE(false, comp(300, 1));
    };
    return;
}