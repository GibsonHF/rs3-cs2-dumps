//
function script17543(int0: component): void {
    var int1 = script18321(int0, comp(1171, 20));
    var int2 = script18321(int0, comp(1171, 21));
    var int3 = script18321(int0, comp(1171, 23));
    var int4 = script18321(int0, comp(1171, 22));
    IF_SETHIDE(true, int1);
    IF_SETHIDE(true, int2);
    IF_SETMODELZOOM(2000, int1);
    IF_SETMODELZOOM(2000, int2);
    IF_SETHIDE(true, int3);
    IF_SETHIDE(true, int4);
    IF_SETMODELANIM(-1 as seq, int3);
    IF_SETMODELANIM(-1 as seq, int4);
    IF_SETHIDE(true, script18321(int0, comp(1171, 17)));
    IF_SETHIDE(true, script18321(int0, comp(1171, 12)));
    IF_SETTRANS(255, script18321(int0, comp(1171, 24)));
    IF_SETTRANS(255, script18321(int0, comp(1171, 9)));
    IF_SETTRANS(255, script18321(int0, comp(1171, 25)));
    IF_SETTRANS(255, script18321(int0, comp(1171, 27)));
    IF_SETTRANS(255, script18321(int0, comp(1171, 26)));
    IF_SETTRANS(255, script18321(int0, comp(1171, 5)));
    IF_SETTRANS(255, script18321(int0, comp(1171, 14)));
    IF_SETTRANS(255, script18321(int0, comp(1171, 30)));
    IF_SETTRANS(255, script18321(int0, comp(1171, 7)));
    IF_SETTRANS(255, script18321(int0, comp(1171, 8)));
    IF_SETTRANS(255, script18321(int0, comp(1171, 6)));
    IF_SETTRANS(255, script18321(int0, comp(1171, 31)));
    IF_SETONTIMER(callback(script17544, int0, CLIENTCLOCK()), int0);
    return;
}