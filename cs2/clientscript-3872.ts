//
function script3872(): string {
    var int0 = (script12477() - 7847);
    if ((MODULO(int0, 7) != 0)) {
        return "Thalmund has left the City of Um smithy and will return on Wednesday.";
    };
    if (((((varbitplayer_55087 > 0) || (varbitplayer_55089 > 0)) || (varbitplayer_55091 > 0)) || (varbitplayer_55093 > 0))) {
        if (((((varbitplayer_55086 >= varbitplayer_55087) && (varbitplayer_55088 >= varbitplayer_55089)) && (varbitplayer_55090 >= varbitplayer_55091)) && (varbitplayer_55092 >= varbitplayer_55093))) {
            return "You have purchased all of Thalmund's wares this week.";
        };
        return "You have viewed Thalmund's wares this week.";
    };
    return "Thalmund has arrived by the City of Um smithy, with a variety of wares for sale!";
}