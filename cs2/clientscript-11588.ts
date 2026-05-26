//
function script11588(): void {
    var int0 = script4148();
    script10428(107151431, 107151432, 10114, -1, "Select a skill", varbitplayer_28340, 0);
    if ((int0 == 0)) {
        if ((MAP_LANG() == 0)) {
            script10428(107151433, 107151434, 10117, -1, "Select an entry fee", varbitplayer_28343, 0);
        } else if ((MAP_LANG() == 2)) {
            script10428(107151433, 107151434, 9897, -1, "Select an entry fee", varbitplayer_28343, 0);
        } else {
            script10428(107151433, 107151434, 9898, -1, "Select an entry fee", varbitplayer_28343, 0);
        };
    };
    script10428(107151435, 107151436, 10118, -1, "Select a competition time limit", varbitplayer_28344, 0);
    script10428(107151437, 107151438, 10119, -1, "Select a time delay for the competition", varbitplayer_28345, 0);
    IF_SETHIDE(1, 107151390);
    IF_SETTEXT("Challenge gems allow players to compete against each other, either for fun or as staked competition. All challenge details are shown on this interface.<br><br>Upon entering, your stake will be placed in the prize pool and at the end of the competition the winner will be rewarded with the full prize pool.<br><br>Once the competition begins you can begin to gain points. Only activities done on this world will count towards your score.<br><br>At the end of the competition the winner is the person who has the highest score greater than 0; in the case of a draw the money is split evenly between those players (up to 10).<br><br>You must be logged in and on this world at the end of the competition to be considered for the win.<br><br>For skilling competitions, points are awarded for the base XP gained.<br>For combat competitions, points are awarded for the amount of damage dealt.", 107151487);
    return;
}