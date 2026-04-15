//
function script6940(int0: component, int1: unknown_int): void {
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, 0);
    CC_SETSIZE(50, 50, 0, 0);
    var int2 = ((IF_GETHEIGHT(int0) - CC_GETHEIGHT()) / 2);
    CC_SETPOSITION(int2, 0, 0, 1);
    CC_CREATE[1](int0, 4, 1);
    CC_SETSIZE[1]((int2 + CC_GETWIDTH()), 0, 1, 1);
    CC_SETPOSITION[1](0, 0, 2, 1);
    CC_SETTEXTFONT[1](67 as fontmetrics);
    CC_SETTEXTALIGN[1](1, 1, 0);
    CC_SETTEXTSHADOW[1](true);
    IF_SETONMOUSEOVER(callback(script1356, int0, CC_GETID[1](), 16777215), int0);
    script6942(int0, int1);
    switch (int1) {
        case 7500: {
            CC_SETTEXT[1]("Dwarf");
            CC_SETGRAPHIC(17181 as graphic);
            IF_SETONVARTRANSMIT(callback(script6941, int0, int1, CC_GETID[1](), 2582, 1), int0);
            break;
        }
        case 7501: {
            CC_SETTEXT[1]("Wartface & Bentnoze");
            CC_SETGRAPHIC(17190 as graphic);
            IF_SETONVARTRANSMIT(callback(script6941, int0, int1, CC_GETID[1](), 2580, 1), int0);
            break;
        }
        case 7505: {
            CC_SETTEXT[1]("Pirate Pete");
            CC_SETGRAPHIC(17189 as graphic);
            IF_SETONVARTRANSMIT(callback(script6941, int0, int1, CC_GETID[1](), 2584, 1), int0);
            break;
        }
        case 7502: {
            CC_SETTEXT[1]("Lumbridge Sage");
            CC_SETGRAPHIC(17184 as graphic);
            IF_SETONVARTRANSMIT(callback(script6941, int0, int1, CC_GETID[1](), 2584, 1), int0);
            break;
        }
        case 7499: {
            CC_SETTEXT[1]("Evil Dave");
            CC_SETGRAPHIC(17185 as graphic);
            IF_SETONVARTRANSMIT(callback(script6941, int0, int1, CC_GETID[1](), 2581, 1), int0);
            break;
        }
        case 7503: {
            CC_SETTEXT[1]("Monkey Ambassador");
            CC_SETGRAPHIC(17187 as graphic);
            IF_SETONVARTRANSMIT(callback(script6941, int0, int1, CC_GETID[1](), 2586, 1), int0);
            break;
        }
        case 7506: {
            CC_SETTEXT[1]("Sir Amik Varze");
            CC_SETGRAPHIC(17186 as graphic);
            IF_SETONVARTRANSMIT(callback(script6941, int0, int1, CC_GETID[1](), 2585, 1), int0);
            break;
        }
        case 7507: {
            CC_SETTEXT[1]("Skrach Uglogwee");
            CC_SETGRAPHIC(17188 as graphic);
            IF_SETONVARTRANSMIT(callback(script6941, int0, int1, CC_GETID[1](), 2585, 1), int0);
            break;
        }
    };
    return;
}