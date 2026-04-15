//
function script5488(): void {
    switch (varclient_2688) {
        case 1: {
            IF_SETMODEL(81333 as model, comp(672, 0));
            IF_SETTEXT("The Death Lotus assassins, their contracts fulfilled, left the port. The Black Marketeer was able to return to the warehouse.", comp(672, 4));
            break;
        }
        case 2: {
            IF_SETMODEL(81302 as model, comp(672, 0));
            IF_SETTEXT("Surula, satisfied with a job well done was able to relax for a whole minute before the next load of customers arrived.", comp(672, 4));
            break;
        }
        case 3: {
            IF_SETMODEL(115039 as model, comp(672, 0));
            IF_SETTEXT("Umi successfully helped out in the warehouse. She can go back to learning the ways of the Seasingers now.", comp(672, 4));
            break;
        }
    };
    var int0 = -1;
    var string0 = "";
    [int0, string0] = script5492(varclient_2685);
    string0 = strconcat("1 x ", string0);
    IF_SETTEXT(string0, comp(672, 3));
    stack(int0);
    stack(44040194);
    IF_SETGRAPHIC();
    [int0, string0] = script5492(varclient_2686);
    string0 = strconcat("1 x ", string0);
    IF_SETTEXT(string0, 44040199);
    stack(int0);
    stack(44040198);
    IF_SETGRAPHIC();
    [int0, string0] = script5492(varclient_2687);
    string0 = strconcat("1 x ", string0);
    IF_SETTEXT(string0, 44040201);
    stack(int0);
    stack(44040200);
    IF_SETGRAPHIC();
    return;
}