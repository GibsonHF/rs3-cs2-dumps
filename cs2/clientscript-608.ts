//
function script608(int0: number): void {
    if ((int0 != -1)) {
        IF_SETOPBASE(`<col=00FF00>${varclient_2516}`, int0);
        IF_SETTARGETVERB("Cast", int0);
        if ((varclient_1436 == 1)) {
            IF_SETOP(1, "Cast", int0);
        };
    };
    if ((IF_FIND(comp(1430, 38)) == 1)) {  // toplevel_v2_combat_bar:spell_icon
        CC_SETOPBASE(`<col=00FF00>${varclient_2516}`);
        CC_SETTARGETVERB("Cast");
        if ((varclient_1436 == 1)) {
            CC_SETOP(1, "Cast");
        };
    };
    if ((IF_FIND(comp(1506, 18)) == 1)) {  // topstat_lore:spell_icon
        CC_SETOPBASE(`<col=00FF00>${varclient_2516}`);
        CC_SETTARGETVERB("Cast");
        if ((varclient_1436 == 1)) {
            CC_SETOP(1, "Cast");
        };
    };
    if ((IF_FIND(comp(1923, 36)) == 1)) {  // toplevel_v2_combat_bar_mobile:spell_icon
        CC_SETOPBASE(`<col=00FF00>${varclient_2516}`);
        CC_SETTARGETVERB("Cast");
        if ((varclient_1436 == 1)) {
            CC_SETOP(1, "Cast");
        };
    };
    return;
}