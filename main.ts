input.onButtonPressed(Button.A, function () {
    volume += -1
    dfplayermini.setVolume(volume)
})
input.onButtonPressed(Button.AB, function () {
    if (status == 1) {
        dfplayermini.press(dfplayermini.playType.Pause)
        status = 0
    } else {
        dfplayermini.press(dfplayermini.playType.Play)
        status = 1
    }
})
input.onButtonPressed(Button.B, function () {
    volume += 1
    dfplayermini.setVolume(volume)
})
let volume = 0
let status = 0
dfplayermini.connect(SerialPin.P0, SerialPin.P1)
dfplayermini.press(dfplayermini.playType.Stop)
status = 0
volume = 15
while (pins.digitalReadPin(DigitalPin.P2) == 1) {
    basic.showIcon(IconNames.No)
}
basic.showIcon(IconNames.Heart)
status = 1
dfplayermini.playFile(1, dfplayermini.isRepeat.No)
