//[clientscript,tog_update_interface]
function script1443(): void {
    IF_SETTEXT(inttostring(varbitplayer_4913, 10), 262152);
    if ((varbitplayer_4913 == 0)) {
        IF_SETMODEL(-1, 262148);
    } else if ((varbitplayer_4913 == 1)) {
        IF_SETMODEL(6545, 262148);
    } else if ((varbitplayer_4913 < 4)) {
        IF_SETMODEL(6547, 262148);
    } else if ((varbitplayer_4913 < 7)) {
        IF_SETMODEL(6548, 262148);
    } else if ((varbitplayer_4913 < 11)) {
        IF_SETMODEL(6549, 262148);
    } else if ((varbitplayer_4913 < 16)) {
        IF_SETMODEL(6550, 262148);
    } else if ((varbitplayer_4913 < 22)) {
        IF_SETMODEL(6551, 262148);
    } else if ((varbitplayer_4913 < 29)) {
        IF_SETMODEL(6552, 262148);
    } else if ((varbitplayer_4913 < 37)) {
        IF_SETMODEL(6553, 262148);
    } else if ((varbitplayer_4913 < 46)) {
        IF_SETMODEL(6554, 262148);
    } else {
        IF_SETMODEL(6546, 262148);
    };
    if ((varbitplayer_4912 == 0)) {
        IF_SETMODEL(-1, 262146);
    } else if ((varbitplayer_4912 == 1)) {
        IF_SETMODEL(6557, 262146);
    } else if ((varbitplayer_4912 == 2)) {
        IF_SETMODEL(6559, 262146);
    } else if ((varbitplayer_4912 == 3)) {
        IF_SETMODEL(6560, 262146);
    } else if ((varbitplayer_4912 == 4)) {
        IF_SETMODEL(6561, 262146);
    } else if ((varbitplayer_4912 == 5)) {
        IF_SETMODEL(6562, 262146);
    } else if ((varbitplayer_4912 == 6)) {
        IF_SETMODEL(6563, 262146);
    } else if ((varbitplayer_4912 == 7)) {
        IF_SETMODEL(6564, 262146);
    } else if ((varbitplayer_4912 == 8)) {
        IF_SETMODEL(6565, 262146);
    } else if ((varbitplayer_4912 == 9)) {
        IF_SETMODEL(6566, 262146);
    } else {
        IF_SETMODEL(6558, 262146);
    };
    return;
}