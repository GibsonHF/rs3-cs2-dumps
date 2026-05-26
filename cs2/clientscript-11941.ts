//
function script11941(): void {
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(32572, 49807429);
            break;
        }
        case 1: {
            IF_SETGRAPHIC(32573, 49807429);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(32574, 49807429);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(32575, 49807429);
            break;
        }
    };
    IF_SETHIDE(0, 49807360);
    IF_SETHIDE(1, 49807361);
    IF_SETHIDE(1, 82116616);
    IF_SETNPCMODEL(32251, 49807439);
    IF_SETMODELANGLE(-10, 108, 0, 140, 0, 370, 49807439);
    IF_SETMODELANIM(18019, 49807439);
    script15415(49807435, 5, -1);
    script15415(49807447, 8, -1);
    IF_SETTEXT("Activate the <col=F0BE79>Curios Bonus</col> to choose between an <col=F0BE79>increase</col> or <col=F0BE79>minimum</col> <col=FF00>multiplier</col> modifier!<br><br><br>For a <col=F0BE79>limited time</col> you have a chance to win the NEW <col=F0BE79>Heavenforged Warrior Armour token</col>!", 49807430);
    return;
}