//
function script615(): void {
    unk11177();
    if ((stack() > 0)) {
        varbitplayer_61210 = MODULO((varbitplayer_61210 + 1), 4);
        stack(1);
        unk11181();
        MES_TYPED(99, 0, "Room has been rotated");
    };
    return;
}