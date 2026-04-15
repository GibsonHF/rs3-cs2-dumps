//
function script19239(): void {
    var int0 = script10495(2);
    var int1 = script10495(0);
    var int2 = script10495(21);
    var string0 = script17015();
    stack(PUSH_CONSTANT_INT[16]("<col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">You are on team:</col> <col=", int1));
    var string1 = `${stack()}${inttostring()}>${string0}</col>`;
    if (((varbitplayer_56136 == 0) || (script18522(515 as quest) == false))) {
        stack(PUSH_CONSTANT_INT[16]("<col=", int0));
        string1 = `${stack()}${inttostring()}>Complete the 'Field of Screams' quest to join The Horsemen.</col>`;
    };
    var int3 = 0;
    var int4 = 0;
    if ((varclient_8346 == 0)) {
        int3 = varbitplayer_56120;
    } else if ((varclient_8347 == 0)) {
        int3 = varbitplayer_56121;
    } else if ((varclient_8348 == 0)) {
        int3 = varbitplayer_56122;
    } else if ((varclient_8349 == 0)) {
        int3 = varbitplayer_59980;
    };
    int4 = (((varbitplayer_56120 + varbitplayer_56121) + varbitplayer_56122) + varbitplayer_59980);
    stack(string1);
    stack(PUSH_CONSTANT_INT[16]("<br><col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">Confections this week:</col> <col=", int2));
    stack(inttostring());
    stack(">");
    stack(TOSTRING_LOCALISED(int3, 1));
    stack(PUSH_CONSTANT_INT[16]("</col><br><col=", int0));
    stack(inttostring());
    stack(PUSH_CONSTANT_INT[16](">Confections this event:</col> <col=", int2));
    IF_SETTEXT(`${stack()}${inttostring()}>${TOSTRING_LOCALISED(int4, 1)}</col>`, comp(1289, 43));
    return;
}