//
function script19163(): void {
    IF_SETHIDE(false, comp(1288, 0));
    IF_SETHIDE(true, comp(1288, 1));
    IF_SETHIDE(true, comp(1288, 151));
    IF_SETHIDE(false, comp(1288, 153));
    script4170(84410521, 34265 as graphic, 34266 as graphic, 34267 as graphic, 34268 as graphic);
    IF_SETPOSITION(0, 20, 1, 0, comp(1288, 152));
    IF_SETSIZE(325, 200, 0, 0, comp(1288, 152));
    IF_SETTEXTFONT(209 as fontmetrics, comp(1288, 152));
    IF_SETHIDE(true, comp(1288, 149));
    IF_SETTEXT(`Increase your skill level up to a maximum of <col=F0BE79>${inttostring(99, 10)}</col> by completing skilling locations.<br><br><br>Reach level milestones to get extra <col=F0BE79>Christmas wrapping paper</col>!`, comp(1288, 152));
    stack(34244);
    stack(84410453);
    IF_SETGRAPHIC();
    IF_SETPOSITION(0, 4, 1, 2, 84410453);
    if ((script18365() == 0)) {
        IF_SETNPCMODEL(31245 as npc, comp(1288, 162));
        IF_SETPOSITION(-29, -3, 1, 1, comp(1288, 162));
        IF_SETMODELANGLE(-55, 72, 0, -230, 0, 400, comp(1288, 162));
        IF_SETMODELANIM(18019 as seq, comp(1288, 162));
        IF_SETNPCMODEL(31246 as npc, comp(1288, 163));
        IF_SETPOSITION(29, -3, 1, 1, comp(1288, 163));
        IF_SETMODELANGLE(55, 72, 0, 230, 0, 400, comp(1288, 163));
        IF_SETMODELANIM(18019 as seq, comp(1288, 163));
    } else {
        IF_SETNPCMODEL(31492 as npc, comp(1288, 162));
        IF_SETPOSITION(-29, -3, 1, 1, comp(1288, 162));
        IF_SETMODELANGLE(-55, 72, 0, -230, 0, 400, comp(1288, 162));
        IF_SETMODELANIM(18019 as seq, comp(1288, 162));
        IF_SETNPCMODEL(31493 as npc, comp(1288, 163));
        IF_SETPOSITION(29, -3, 1, 1, comp(1288, 163));
        IF_SETMODELANGLE(60, 50, 0, 150, 0, 300, comp(1288, 163));
        IF_SETMODELANIM(22645 as seq, comp(1288, 163));
    };
    return;
}