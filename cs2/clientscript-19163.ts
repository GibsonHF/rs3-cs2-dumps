//
function script19163(): void {
    IF_SETHIDE(0, 84410368);
    IF_SETHIDE(1, 84410369);
    IF_SETHIDE(1, 84410519);
    IF_SETHIDE(0, 84410521);
    script4170(84410521, 34265, 34266, 34267, 34268);
    IF_SETPOSITION(0, 20, 1, 0, 84410520);
    IF_SETSIZE(325, 200, 0, 0, 84410520);
    IF_SETTEXTFONT(209, 84410520);
    IF_SETHIDE(1, 84410517);
    IF_SETTEXT(`Increase your skill level up to a maximum of <col=F0BE79>${inttostring(99, 10)}</col> by completing skilling locations.<br><br><br>Reach level milestones to get extra <col=F0BE79>Christmas wrapping paper</col>!`, 84410520);
    stack(34244);
    stack(84410453);
    IF_SETGRAPHIC();
    IF_SETPOSITION(0, 4, 1, 2, 84410453);
    if ((script18365() == 0)) {
        IF_SETNPCMODEL(31245, 84410530);
        IF_SETPOSITION(-29, -3, 1, 1, 84410530);
        IF_SETMODELANGLE(-55, 72, 0, -230, 0, 400, 84410530);
        IF_SETMODELANIM(18019, 84410530);
        IF_SETNPCMODEL(31246, 84410531);
        IF_SETPOSITION(29, -3, 1, 1, 84410531);
        IF_SETMODELANGLE(55, 72, 0, 230, 0, 400, 84410531);
        IF_SETMODELANIM(18019, 84410531);
    } else {
        IF_SETNPCMODEL(31492, 84410530);
        IF_SETPOSITION(-29, -3, 1, 1, 84410530);
        IF_SETMODELANGLE(-55, 72, 0, -230, 0, 400, 84410530);
        IF_SETMODELANIM(18019, 84410530);
        IF_SETNPCMODEL(31493, 84410531);
        IF_SETPOSITION(29, -3, 1, 1, 84410531);
        IF_SETMODELANGLE(60, 50, 0, 150, 0, 300, 84410531);
        IF_SETMODELANIM(22645, 84410531);
    };
    return;
}