//
function script11941(): void {
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(32572 as graphic, comp(760, 69));  // trh193_overlay:title
            break;
        }
        case 1: {
            IF_SETGRAPHIC(32573 as graphic, comp(760, 69));  // trh193_overlay:title
            break;
        }
        case 2: {
            IF_SETGRAPHIC(32574 as graphic, comp(760, 69));  // trh193_overlay:title
            break;
        }
        case 3: {
            IF_SETGRAPHIC(32575 as graphic, comp(760, 69));  // trh193_overlay:title
            break;
        }
    };
    IF_SETHIDE(false, comp(760, 0));  // trh193_overlay:splash_screen
    IF_SETHIDE(true, comp(760, 1));  // trh193_overlay:universe
    IF_SETHIDE(true, comp(1253, 8));  // wheel_of_fortune:chests_layer
    IF_SETNPCMODEL(32251 as npc, comp(760, 79));  // trh193_overlay:npc_model_2
    IF_SETMODELANGLE(-10, 108, 0, 140, 0, 370, comp(760, 79));  // trh193_overlay:npc_model_2
    IF_SETMODELANIM(18019 as seq, comp(760, 79));  // trh193_overlay:npc_model_2
    script15415(49807435, 5, -1);
    script15415(49807447, 8, -1);
    IF_SETTEXT("Activate the <col=F0BE79>Curios Bonus</col> to choose between an <col=F0BE79>increase</col> or <col=F0BE79>minimum</col> <col=FF00>multiplier</col> modifier!<br><br><br>For a <col=F0BE79>limited time</col> you have a chance to win the NEW <col=F0BE79>Heavenforged Warrior Armour token</col>!", comp(760, 70));  // trh193_overlay:desc
    return;
}