//
function script15574(int0: number): void {
    var int1 = varbitplayer_49031;
    varbitplayer_49031 = int0;
    script7867();
    if ((IF_GETHIDE(comp(1420, 127)) == true)) {  // acc_create:colours_sliding
        script13992(93061242, -1, 28557, 1);
        IF_SETHIDE(false, comp(1420, 127));  // acc_create:colours_sliding
    } else {
        script13992(93061242, -1, 28557, 0);
        IF_SETHIDE(true, comp(1420, 127));  // acc_create:colours_sliding
    };
    return;
}