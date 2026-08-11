//
function script4660(int0: number): void {
    var int1 = SCALE(varplayer_1563, 3200, 100);
    IF_SETTEXT(inttostring(varplayer_1563, 10), int0);
    script4542(int1, 1441888, 1441893);
    if ((varplayer_1563 <= 1000)) {
        IF_SETMODELANIM(9777 as seq, comp(22, 0));  // fremsaga_signature_healthoverlay:arianehead
    } else {
        IF_SETMODELANIM(9804 as seq, comp(22, 0));  // fremsaga_signature_healthoverlay:arianehead
    };
    return;
}