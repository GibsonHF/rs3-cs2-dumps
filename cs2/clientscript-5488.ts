//
function script5488(): void {
    switch (varclient_2688) {
        case 1: {
            IF_SETMODEL(81333 as model, comp(672, 0));  // pop_rewards:chathead
            IF_SETTEXT("The Death Lotus assassins, their contracts fulfilled, left the port. The Black Marketeer was able to return to the warehouse.", comp(672, 4));  // pop_rewards:flavour
            break;
        }
        case 2: {
            IF_SETMODEL(81302 as model, comp(672, 0));  // pop_rewards:chathead
            IF_SETTEXT("Surula, satisfied with a job well done was able to relax for a whole minute before the next load of customers arrived.", comp(672, 4));  // pop_rewards:flavour
            break;
        }
        case 3: {
            IF_SETMODEL(115039 as model, comp(672, 0));  // pop_rewards:chathead
            IF_SETTEXT("Umi successfully helped out in the warehouse. She can go back to learning the ways of the Seasingers now.", comp(672, 4));  // pop_rewards:flavour
            break;
        }
    };
    var int0 = -1 as graphic;
    var string0 = "";
    [int0, string0] = script5492(varclient_2685);
    string0 = strconcat("1 x ", string0);
    IF_SETTEXT(string0, comp(672, 3));  // pop_rewards:reward_text
    IF_SETGRAPHIC(int0, comp(672, 2));  // pop_rewards:item
    [int0, string0] = script5492(varclient_2686);
    string0 = strconcat("1 x ", string0);
    IF_SETTEXT(string0, comp(672, 7));  // pop_rewards:reward_text_2
    IF_SETGRAPHIC(int0, comp(672, 6));  // pop_rewards:item_2
    [int0, string0] = script5492(varclient_2687);
    string0 = strconcat("1 x ", string0);
    IF_SETTEXT(string0, comp(672, 9));  // pop_rewards:reward_text_3
    IF_SETGRAPHIC(int0, comp(672, 8));  // pop_rewards:item_3
    return;
}