//
function script13822(): void {
    CC_DELETEALL(comp(1477, 886));  // toplevel_v2:optext_bg
    var int0 = 0;
    stack(comp(1477, 886));  // toplevel_v2:optext_bg
    stack(3);
    stack(int0);
    int0 = (int0 + 1);
    CC_CREATE();
    CC_SETSIZE(4, 4, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETFILL(1);
    CC_SETCOLOUR(986636);
    stack(comp(1477, 886));  // toplevel_v2:optext_bg
    stack(5);
    stack(int0);
    int0 = (int0 + 1);
    CC_CREATE();
    CC_SETSIZE(10, 10, 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETGRAPHIC(4650 as graphic);
    CC_SETHFLIP(true);
    stack(comp(1477, 886));  // toplevel_v2:optext_bg
    stack(5);
    stack(int0);
    int0 = (int0 + 1);
    CC_CREATE();
    CC_SETSIZE(10, 10, 0, 0);
    CC_SETPOSITION(0, 0, 2, 0);
    CC_SETGRAPHIC(4650 as graphic);
    stack(comp(1477, 886));  // toplevel_v2:optext_bg
    stack(5);
    stack(int0);
    int0 = (int0 + 1);
    CC_CREATE();
    CC_SETSIZE(10, 10, 0, 0);
    CC_SETPOSITION(0, 0, 0, 2);
    CC_SETGRAPHIC(4650 as graphic);
    CC_SETVFLIP(true);
    CC_SETHFLIP(true);
    stack(comp(1477, 886));  // toplevel_v2:optext_bg
    stack(5);
    stack(int0);
    int0 = (int0 + 1);
    CC_CREATE();
    CC_SETSIZE(10, 10, 0, 0);
    CC_SETPOSITION(0, 0, 2, 2);
    CC_SETGRAPHIC(4650 as graphic);
    CC_SETVFLIP(true);
    stack(comp(1477, 886));  // toplevel_v2:optext_bg
    stack(5);
    stack(int0);
    int0 = (int0 + 1);
    CC_CREATE();
    CC_SETSIZE(20, 10, 1, 0);
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETGRAPHIC(4649 as graphic);
    CC_SETTILING(true);
    stack(comp(1477, 886));  // toplevel_v2:optext_bg
    stack(5);
    stack(int0);
    int0 = (int0 + 1);
    CC_CREATE();
    CC_SETSIZE(20, 10, 1, 0);
    CC_SETPOSITION(0, 0, 1, 2);
    CC_SETGRAPHIC(4649 as graphic);
    CC_SETTILING(true);
    CC_SETVFLIP(true);
    stack(comp(1477, 886));  // toplevel_v2:optext_bg
    stack(5);
    stack(int0);
    int0 = (int0 + 1);
    CC_CREATE();
    CC_SETSIZE(10, 20, 0, 1);
    CC_SETPOSITION(0, 0, 0, 1);
    CC_SETGRAPHIC(4651 as graphic);
    CC_SETTILING(true);
    CC_SETHFLIP(true);
    stack(comp(1477, 886));  // toplevel_v2:optext_bg
    stack(5);
    stack(int0);
    int0 = (int0 + 1);
    CC_CREATE();
    CC_SETSIZE(10, 20, 0, 1);
    CC_SETPOSITION(0, 0, 2, 1);
    CC_SETGRAPHIC(4651 as graphic);
    CC_SETTILING(true);
    IF_SETONTIMER(callback(script13823), comp(1477, 882));  // toplevel_v2:optext_layer
    IF_SETONVARTRANSMIT(callback(script13823, 5967, 1), comp(1477, 882));  // toplevel_v2:optext_layer
    return;
}