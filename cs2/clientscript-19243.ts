//
function script19243(): void {
    var int0 = script10495(2);
    var int1 = script10495(21);
    stack(PUSH_CONSTANT_INT[16]("<col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">Spooky Tokens:</col> <col=", int1));
    IF_SETTEXT(`${stack()}${inttostring()}>${TOSTRING_LOCALISED(varbitplayer_56081, 1)}</col>`, comp(1289, 47));
    return;
}