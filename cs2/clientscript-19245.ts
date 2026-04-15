//
function script19245(): void {
    var int0 = script10495(2);
    stack(PUSH_CONSTANT_INT[16]("<col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">Runs: Mon 13th Oct - Sun 19th Oct</col><br><col=", int0));
    IF_SETTEXT(`${stack()}${inttostring()}>Sunday Ceremony: 8:00PM UTC</col>`, comp(1289, 61));
    stack(PUSH_CONSTANT_INT[16]("<col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">Runs: Mon 20th Oct - Sun 26th Oct</col><br><col=", int0));
    IF_SETTEXT(`${stack()}${inttostring()}>Sunday Ceremony: 8:00PM UTC</col>`, comp(1289, 64));
    stack(PUSH_CONSTANT_INT[16]("<col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">Runs: Mon 27th Oct - Sun 2nd Nov</col><br><col=", int0));
    IF_SETTEXT(`${stack()}${inttostring()}>Sunday Ceremony: 8:00PM UTC</col>`, comp(1289, 67));
    stack(PUSH_CONSTANT_INT[16]("<col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">Runs: Mon 3rd Nov - Sun 9th Nov</col><br><col=", int0));
    IF_SETTEXT(`${stack()}${inttostring()}>Sunday Ceremony: 8:00PM UTC</col>`, comp(1289, 70));
    return;
}