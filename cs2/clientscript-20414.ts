//
function script20414(): void {
    IF_SETTEXT("Seasonal Quest: Cold Front", 12517388);
    IF_SETTEXT("The Queen of Snow has arrived in the Christmas Village! Help her rediscover the joy of Christmas in this new seasonal quest.", 12517389);
    IF_SETTEXT("Wrapping Paper", 12517390);
    IF_SETTEXT("Exchange your Wrapping Paper for festive presents to earn both classic and brand-new rewards!", 12517391);
    IF_SETTEXT("Christmas Spirit Shop", 12517392);
    IF_SETTEXT("Earn Christmas spirit as you play and complete seasonal activities in the Land of Snow. Spend your Christmas spirit in the Christmas Spirit Shop to earn classic holiday rewards.", 12517393);
    IF_SETTEXT("Rewards", 12517394);
    IF_SETTEXT("Santa's Lodge", 12517384);
    IF_SETTEXT("Secure a spot on Santa's Nice List and join him in his lodge to obtain unique cosmetic rewards each week, including a chance at the Black Partyhat.<br><br>Visit Santa himself from 8pm to 10pm game time each Sunday until the 28th December.", 12517387);
    IF_SETOBJECT(56161, 1, 12517395);
    var string0 = "Black Partyhat - Santa's Lodge";
    IF_SETOBJECT(60020, 1, 12517396);
    var string1 = "Blue Santa hat - Wrapping paper";
    IF_SETOBJECT(60072, 1, 12517397);
    var string2 = "Christmas jumper (Snowman) - Christmas Spirit Shop";
    IF_SETOBJECT(60073, 1, 12517398);
    var string3 = "Christmas jumper (Snow imp) - Christmas Spirit Shop";
    IF_SETOBJECT(60074, 1, 12517399);
    var string4 = "Snowman Slippers - Cold Front seasonal quest";
    if ((script6431() == 1)) {
        IF_SETONCLICK(callback(script7774, string0, 12517395, -1, 0), 12517395);
        IF_SETONCLICK(callback(script7774, string1, 12517396, -1, 0), 12517396);
        IF_SETONCLICK(callback(script7774, string2, 12517397, -1, 0), 12517397);
        IF_SETONCLICK(callback(script7774, string3, 12517398, -1, 0), 12517398);
        IF_SETONCLICK(callback(script7774, string4, 12517399, -1, 0), 12517399);
    } else {
        IF_SETONMOUSEREPEAT(callback(script3876, string0, 12517395, -1), 12517395);
        IF_SETONMOUSEREPEAT(callback(script3876, string1, 12517396, -1), 12517396);
        IF_SETONMOUSEREPEAT(callback(script3876, string2, 12517397, -1), 12517397);
        IF_SETONMOUSEREPEAT(callback(script3876, string3, 12517398, -1), 12517398);
        IF_SETONMOUSEREPEAT(callback(script3876, string4, 12517399, -1), 12517399);
    };
    return;
}