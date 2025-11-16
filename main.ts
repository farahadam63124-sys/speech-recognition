speech.onSpeechRecognitionReceive(function (result) {
    if ("this".includes("")) {
        scene.setBackgroundColor(2)
    } else {
    	
    }
    mySprite.say(":)")
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    speech.startVoiceInput()
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    speech.getSrResult()
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`adam`, SpriteKind.Player)
wifi.connect("ATTFtHfUrR", "t8%sk+frgp+%")
while (!(wifi.isConnected())) {
    mySprite.say("connecting 2 WiFi")
    pause(100)
    mySprite.say("connected")
}
speech.setSrCloud(SrCloud.Google)
speech.setSRLanguageInGoogle(GSRLangTypes.EN)
