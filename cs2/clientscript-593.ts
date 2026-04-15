//
function script593(int0: int): void {
    var int1 = enum_getvalue(0, 39, 1079 as cs2enum, varplayer_138);
    var int2 = INV_GETOBJ(int1, 0);
    var int3 = INV_GETOBJ(int1, 1);
    [int2, int3] = script17386(int2, int3, INV_GETOBJ(int1, 2));
    script9263(comp(105, 358), int2, int1);
    script9263(comp(105, 360), int3, int1);
    IF_SETONINVTRANSMIT(callback(script589, int1, 1), comp(105, 347));
    var int4 = STOCKMARKET_GETOFFERTYPE(int0, 0);
    var int5 = STOCKMARKET_GETOFFERCOUNT(int0, 0);
    var int6 = STOCKMARKET_GETOFFERCOMPLETEDCOUNT(int0, 0);
    stack(int0);
    stack(0);
    var long0 = STOCKMARKET_GETOFFERCOMPLETEDGOLD();
    var long1 = script12802(int0, STOCKMARKET_GETOFFERITEM(int0, 0), int6, long0, int4);
    var string0 = TOSTRING_LOCALISED(int6, 1);
    var string1 = TOSTRING_LOCALISED_LONG(SUB_LONG(long0, long1), 1);
    CC_DELETEALL(6881634);
    if ((IF_FIND(6881634) == 1)) {
        if ((STOCKMARKET_ISOFFERADDING(int0, 0) == 1)) {
            CC_CREATE[1](comp(105, 354), 4, 0);
            CC_SETPOSITION[1](0, 0, 0, 0);
            CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
            CC_SETTEXTFONT[1](26 as fontmetrics);
            CC_SETCOLOUR[1](14407812);
            CC_SETTEXT[1]("Submitting offer...");
            CC_SETTEXTALIGN[1](1, 1, 0);
        } else {
            script652(0, 0, CC_GETWIDTH(), CC_GETHEIGHT(), int0, comp(105, 354), 0, 0, 2, 1);
        };
    };
    if ((STOCKMARKET_ISOFFERFINISHED(int0, 0) == 1)) {
        if ((int4 == 0)) {
            IF_SETTEXT(`You bought <col=cc9900>${string0}</col> for <col=cc9900>${string1}</col> coins.`, comp(105, 353));
        } else {
            IF_SETTEXT(`You sold <col=cc9900>${string0}</col> and received <col=cc9900>${string1}</col> coins.`, comp(105, 353));
        };
        IF_SETHIDE(true, comp(105, 355));
        IF_SETHIDE(false, comp(105, 356));
    } else {
        if ((int4 == 0)) {
            IF_SETTEXT(`You have bought <col=cc9900>${string0}</col> so far for <col=cc9900>${string1}</col> coins.`, comp(105, 353));
        } else {
            IF_SETTEXT(`You have sold <col=cc9900>${string0}</col> so far and received  <col=cc9900>${string1}</col> coins.`, comp(105, 353));
        };
        IF_SETHIDE(false, comp(105, 355));
        IF_SETHIDE(true, comp(105, 356));
    };
    return;
}