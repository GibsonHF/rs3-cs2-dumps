//
function script15574(int0: int): void {
    var int1 = varbitplayer_49031;
    varbitplayer_49031 = int0;
    script7867();
    if ((IF_GETHIDE(comp(1420, 127)) == true)) {
        script13992(comp(1420, 122), comp(-1, 65535), 28557 as struct, 1);
        IF_SETHIDE(false, comp(1420, 127));
    } else {
        script13992(comp(1420, 122), comp(-1, 65535), 28557 as struct, 0);
        IF_SETHIDE(true, comp(1420, 127));
    };
    return;
}