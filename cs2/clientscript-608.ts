//
function script608(int0: component): void {
    if ((int0 != comp(-1, 65535))) {
        IF_SETOPBASE(`<col=00FF00>${varclient_2516}`, int0);
        IF_SETTARGETVERB("Cast", int0);
        if ((varclient_1436 == 1)) {
            IF_SETOP(1, "Cast", int0);
        };
    };
    if ((IF_FIND(comp(1430, 36)) == 1)) {
        CC_SETOPBASE(`<col=00FF00>${varclient_2516}`);
        CC_SETTARGETVERB("Cast");
        if ((varclient_1436 == 1)) {
            CC_SETOP(1, "Cast");
        };
    };
    if ((IF_FIND(comp(1506, 18)) == 1)) {
        CC_SETOPBASE(`<col=00FF00>${varclient_2516}`);
        CC_SETTARGETVERB("Cast");
        if ((varclient_1436 == 1)) {
            CC_SETOP(1, "Cast");
        };
    };
    if ((IF_FIND(comp(1923, 36)) == 1)) {
        CC_SETOPBASE(`<col=00FF00>${varclient_2516}`);
        CC_SETTARGETVERB("Cast");
        if ((varclient_1436 == 1)) {
            CC_SETOP(1, "Cast");
        };
    };
    return;
}