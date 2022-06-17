huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
radio.setGroup(1)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isLearned(1)) {
        radio.sendString("Ok")
        basic.pause(1000)
    }
})
