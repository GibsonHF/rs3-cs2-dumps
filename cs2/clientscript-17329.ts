//
function script17329(): void {
    if ((varbitplayer_52882 == 1)) {
        script10943("Please wait before previewing rewards.", comp(1152, 46));
        return;
    };
    IF_SETHIDE(false, comp(1152, 1));
    IF_SETHIDE(true, comp(1152, 0));
    stack(27895);
    stack(75497520);
    IF_SETGRAPHIC();
    IF_SETTEXT(`Loose arrows to earn the <col=89CFF0>${OC_NAME(54769)}</col>! With a chance to receive a <col=89CFF0>${OC_NAME(54768)}</col> with each arrow shot!`, 75497529);
    script17335(script17310(1), 0, 0, 100, -1947, 0, 650, `<col=89CFF0>${OC_NAME(54769)}</col>`, 17970, 75497523, 75497522, 75497526);
    script17335(script17310(0), 0, 0, 100, 1947, 0, 650, `<col=89CFF0>${OC_NAME(54768)}</col>`, 35290, 75497525, 75497524, 75497527);
    script16198(0, 75497473);
    return;
}