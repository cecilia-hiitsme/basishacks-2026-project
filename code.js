var postList = [
  "Happy vacation post",
  "Funny meme post",
  "Study grind post",
  "Perfect selfie post",
  "Late night quote post"
];
var surfaceList = [
  "On the surface, this post looks exciting, fun, and carefree.",
  "On the surface, this post looks humorous and entertaining.",
  "On the surface, this post looks productive, motivated, and successful.",
  "On the surface, this post looks confident, beautiful, and perfect.",
  "On the surface, this post looks calm, deep, and meaningful."
];
var hiddenEmotionList = [
  "Hidden emotion: The person may be feeling lonely or trying to prove that they are happy.",
  "Hidden emotion: The person may be using humor to hide stress, sadness, or discomfort.",
  "Hidden emotion: The person may be feeling pressure, burnout, or fear of failure.",
  "Hidden emotion: The person may be feeling insecure and seeking approval from others.",
  "Hidden emotion: The person may be quietly struggling with sadness, anxiety, or overthinking."
];
var adviceList = [
  "Advice: Remember that social media only shows part of someone's life. Check in with friends instead of assuming they are always okay.",
  "Advice: Humor can be a coping strategy. If someone jokes constantly, it may still be helpful to ask how they really feel.",
  "Advice: Productivity is not the same as emotional health. Rest and balance are important too.",
  "Advice: A perfect photo does not mean a perfect life. Try not to compare yourself to online appearances.",
  "Advice: Emotional posts may be a quiet way of asking for support. A kind message can make a difference."
];
var selectedPost = "";

setProperty("postDropdown_select","options",postList);

setScreen("homeScreen");
onEvent("startButton_home","click",function(){
  setScreen("selectScreen");
});
onEvent("analyzeButton_select", "click", function() {
  selectedPost = getText("postDropdown_select");
  analyzePost(selectedPost);
  setScreen("resultScreen");
});
onEvent("postDropdown_select", "click", function() {
  setScreen("selectScreen");
});
onEvent("learnMoreButton_result", "click", function() {
  setText("learnTitle_learn", "Social media often shows only the surface of people's lives. A happy post may hide loneliness, a funny post may hide stress, and a perfect photo may hide insecurity. This app encourages users to look beneath the surface and understand that people may have hidden emotions that are not immediately visible.");
  setScreen("LearnScreen");
});

onEvent("homeButton_learn", "click", function() {
  setScreen("homeScreen");
});


function analyzePost(postType) {
  for (var i = 0; i < postList.length; i++) {
    if (postType == postList[i]) {
      setText("surfaceLabel", surfaceList[i]);
      setText("emotionLabel", hiddenEmotionList[i]);
      setText("adviceLabel", adviceList[i]);
    }
  }
}
