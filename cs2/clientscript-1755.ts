//[clientscript,brew_colourwater]
function script1755(int0: number, int1: number): void {
    if ((varclient_227 > 2)) {
        if ((INV_GETOBJ(94, 0) == 8950)) {
            IF_SETMODEL(15700, int0);
        } else {
            IF_SETMODEL(15674, int0);
        };
        IF_SETCOLOUR(3407616, int1);
    } else {
        if ((INV_GETOBJ(94, 0) == 8950)) {
            IF_SETMODEL(15699, int0);
        } else {
            IF_SETMODEL(15673, int0);
        };
        IF_SETCOLOUR(9502720, int1);
    };
    IF_SETTEXT(inttostring(varclient_227, 10), int1);
    return;
}