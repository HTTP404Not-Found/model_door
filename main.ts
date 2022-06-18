input.onButtonPressed(Button.A, function () {
    radio.sendString("bye")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("ok")
})
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
radio.setGroup(1)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        radio.sendString("ok")
    }
})
