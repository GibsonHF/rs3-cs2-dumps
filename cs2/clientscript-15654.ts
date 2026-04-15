//
function script15654(int0: component, int1: component, int2: component, int3: component, int4: dbrow): void {
    var int5 = script438(dbrow_getfield(int4, 794720, 0));
    var int6 = dbrow_getfield(int4, 794656, 0);
    IF_SETNPCMODEL(int6, int0);
    IF_SETTEXT(dbrow_getfield(int4, 794640, 0), int1);
    if ((varclient_7075 == false)) {
        IF_SETMODELANIM(dbrow_getfield(int4, 794672, 0), int0);
        IF_SETMODELANGLE(dbrow_getfield(int4, 794704, 0), int0);
    };
    var int7 = 0;
    var int8 = 0;
    [int7, int8] = dbrow_getfield(int5, 504000, 0);
    IF_SETTEXT(`${script10979(int7)}${script3186(int7)}</col>`, int2);
    var string0 = `${script10979(int7)}${script3202(int7)}</col>`;
    if ((IF_FIND(int3) == 1)) {
        script3537(string0);
    };
    var int9 = script16788(int3);
    if ((int5 == 6482 as dbrow)) {
        stack(-1);
        stack(int3);
        IF_SETGRAPHIC();
        stack(-1);
        stack(int9);
        IF_SETGRAPHIC();
    } else {
        stack(script16202(int7, 0));
        stack(int3);
        IF_SETGRAPHIC();
        stack(20673);
        stack(int9);
        IF_SETGRAPHIC();
    };
    return;
}