//[clientscript,tog_update_interface]
function script1443(): void {
    IF_SETTEXT(inttostring(varbitplayer_4913, 10), comp(4, 8));
    if ((varbitplayer_4913 == 0)) {
        IF_SETMODEL(-1 as model, comp(4, 4));
    } else if ((varbitplayer_4913 == 1)) {
        IF_SETMODEL(6545 as model, comp(4, 4));
    } else if ((varbitplayer_4913 < 4)) {
        IF_SETMODEL(6547 as model, comp(4, 4));
    } else if ((varbitplayer_4913 < 7)) {
        IF_SETMODEL(6548 as model, comp(4, 4));
    } else if ((varbitplayer_4913 < 11)) {
        IF_SETMODEL(6549 as model, comp(4, 4));
    } else if ((varbitplayer_4913 < 16)) {
        IF_SETMODEL(6550 as model, comp(4, 4));
    } else if ((varbitplayer_4913 < 22)) {
        IF_SETMODEL(6551 as model, comp(4, 4));
    } else if ((varbitplayer_4913 < 29)) {
        IF_SETMODEL(6552 as model, comp(4, 4));
    } else if ((varbitplayer_4913 < 37)) {
        IF_SETMODEL(6553 as model, comp(4, 4));
    } else if ((varbitplayer_4913 < 46)) {
        IF_SETMODEL(6554 as model, comp(4, 4));
    } else {
        IF_SETMODEL(6546 as model, comp(4, 4));
    };
    if ((varbitplayer_4912 == 0)) {
        IF_SETMODEL(-1 as model, comp(4, 2));
    } else if ((varbitplayer_4912 == 1)) {
        IF_SETMODEL(6557 as model, comp(4, 2));
    } else if ((varbitplayer_4912 == 2)) {
        IF_SETMODEL(6559 as model, comp(4, 2));
    } else if ((varbitplayer_4912 == 3)) {
        IF_SETMODEL(6560 as model, comp(4, 2));
    } else if ((varbitplayer_4912 == 4)) {
        IF_SETMODEL(6561 as model, comp(4, 2));
    } else if ((varbitplayer_4912 == 5)) {
        IF_SETMODEL(6562 as model, comp(4, 2));
    } else if ((varbitplayer_4912 == 6)) {
        IF_SETMODEL(6563 as model, comp(4, 2));
    } else if ((varbitplayer_4912 == 7)) {
        IF_SETMODEL(6564 as model, comp(4, 2));
    } else if ((varbitplayer_4912 == 8)) {
        IF_SETMODEL(6565 as model, comp(4, 2));
    } else if ((varbitplayer_4912 == 9)) {
        IF_SETMODEL(6566 as model, comp(4, 2));
    } else {
        IF_SETMODEL(6558 as model, comp(4, 2));
    };
    return;
}