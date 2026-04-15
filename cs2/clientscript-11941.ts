//
function script11941(): void {
    switch (MAP_LANG()) {
        case 0: {
            stack(32572);
            stack(49807429);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            stack(32573);
            stack(49807429);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(32574);
            stack(49807429);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(32575);
            stack(49807429);
            IF_SETGRAPHIC();
            break;
        }
    };
    IF_SETHIDE(false, comp(760, 0));
    IF_SETHIDE(true, comp(760, 1));
    IF_SETHIDE(true, comp(1253, 8));
    IF_SETNPCMODEL(32251 as npc, comp(760, 79));
    IF_SETMODELANGLE(-10, 108, 0, 140, 0, 370, comp(760, 79));
    IF_SETMODELANIM(18019 as seq, comp(760, 79));
    script15415(comp(760, 75), 5, -1 as obj);
    script15415(comp(760, 87), 8, -1 as obj);
    IF_SETTEXT("Activate the <col=F0BE79>Curios Bonus</col> to choose between an <col=F0BE79>increase</col> or <col=F0BE79>minimum</col> <col=FF00>multiplier</col> modifier!<br><br><br>For a <col=F0BE79>limited time</col> you have a chance to win the NEW <col=F0BE79>Heavenforged Warrior Armour token</col>!", comp(760, 70));
    return;
}