//[clientscript,brew_colourwater]
function script1755(int0: component, int1: component): void {
    if ((varclient_227 > 2)) {
        if ((INV_GETOBJ(94 as inv, 0) == 8950 as obj)) {
            IF_SETMODEL(15700 as model, int0);
        } else {
            IF_SETMODEL(15674 as model, int0);
        };
        IF_SETCOLOUR(3407616, int1);
    } else {
        if ((INV_GETOBJ(94 as inv, 0) == 8950 as obj)) {
            IF_SETMODEL(15699 as model, int0);
        } else {
            IF_SETMODEL(15673 as model, int0);
        };
        IF_SETCOLOUR(9502720, int1);
    };
    IF_SETTEXT(inttostring(varclient_227, 10), int1);
    return;
}