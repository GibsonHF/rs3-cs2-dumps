//
function script17329(): void {
    if ((varbitplayer_52882 == 1)) {
        script10943("Please wait before previewing rewards.", 75497518);
        return;
    };
    IF_SETHIDE(false, comp(1152, 1));
    IF_SETHIDE(true, comp(1152, 0));
    IF_SETGRAPHIC(27895 as graphic, comp(1152, 48));
    IF_SETTEXT(`Loose arrows to earn the <col=89CFF0>${OC_NAME(54769 as obj)}</col>! With a chance to receive a <col=89CFF0>${OC_NAME(54768 as obj)}</col> with each arrow shot!`, comp(1152, 57));
    script17335(script17310(1), 0, 0, 100, -1947, 0, 650, `<col=89CFF0>${OC_NAME(54769 as obj)}</col>`, 17970, 75497523, 75497522, 75497526);
    script17335(script17310(0), 0, 0, 100, 1947, 0, 650, `<col=89CFF0>${OC_NAME(54768 as obj)}</col>`, 35290, 75497525, 75497524, 75497527);
    script16198(0, 75497473);
    return;
}