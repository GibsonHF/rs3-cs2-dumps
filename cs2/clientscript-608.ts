//
function script608(int0: number): void {
    if ((int0 != -1)) {
        IF_SETOPBASE(`<col=00FF00>${varclient_2516}`, int0);
        IF_SETTARGETVERB("Cast", int0);
        if ((varclient_1436 == 1)) {
            IF_SETOP(1, "Cast", int0);
        };
    };
    if ((IF_FIND(93716518) == 1)) {
        CC_SETOPBASE(`<col=00FF00>${varclient_2516}`);
        CC_SETTARGETVERB("Cast");
        if ((varclient_1436 == 1)) {
            CC_SETOP(1, "Cast");
        };
    };
    if ((IF_FIND(98697234) == 1)) {
        CC_SETOPBASE(`<col=00FF00>${varclient_2516}`);
        CC_SETTARGETVERB("Cast");
        if ((varclient_1436 == 1)) {
            CC_SETOP(1, "Cast");
        };
    };
    if ((IF_FIND(126025764) == 1)) {
        CC_SETOPBASE(`<col=00FF00>${varclient_2516}`);
        CC_SETTARGETVERB("Cast");
        if ((varclient_1436 == 1)) {
            CC_SETOP(1, "Cast");
        };
    };
    return;
}