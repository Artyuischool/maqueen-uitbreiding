function randomnummer (min: number, max: number) {
    random = randint(min, max)
}
function bestuur (recievednumber: number) {
    if (recievednumber == 0) {
        if (radio2 == 0) {
            radio2 = 1
        } else {
            radio2 = 0
        }
    } else if (recievednumber == 1) {
        if (radio2 == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        }
    } else if (recievednumber == 2) {
        if (radio2 == 1) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        }
    } else {
    	
    }
}
function randommovement () {
    if (0 == 0) {
        sensor = maqueen.Ultrasonic(PingUnit.Centimeters)
        if (sensor < 30) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 117)
            control.waitMicros(4000)
            maqueen.motorStop(maqueen.Motors.M1)
        } else {
            randomnummer(0, 5)
            if (random == 2) {
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            } else if (random == 1) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            } else if (random == 0) {
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            } else if (random == 3) {
                maqueen.motorStop(maqueen.Motors.All)
            } else if (random == 4) {
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            } else if (random == 5) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            } else if (random == 6) {
                maqueen.motorStop(maqueen.Motors.All)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            } else if (random == 7) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            } else if (random == 8) {
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            } else {
            	
            }
        }
    }
}
let sensor = 0
let radio2 = 0
let random = 0
radio.setGroup(1019)
