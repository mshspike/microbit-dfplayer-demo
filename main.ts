input.onButtonPressed(Button.AB, function () {
    dfplayermini.press(dfplayermini.playType.Pause)
})
dfplayermini.connect(SerialPin.P0, SerialPin.P1)
dfplayermini.setVolume(15)
dfplayermini.playFile(1, dfplayermini.isRepeat.No)
