namespace SpriteKind {
    export const tree = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    是否已按過 = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (是否已按過 == 1) {
        是否已按過 = 0
        otherSprite.destroy()
        info.changeScoreBy(1)
    }
})
let 是否已按過 = 0
let _1 = 0
scene.setBackgroundImage(assets.image`我的影像2`)
info.setScore(0)
是否已按過 = 0
let _345 = sprites.create(assets.image`我的影像0`, SpriteKind.Enemy)
_345.destroy()
let _123 = sprites.create(assets.image`我的影像5`, SpriteKind.Player)
let _456 = sprites.create(assets.image`我的影像`, SpriteKind.tree)
controller.moveSprite(_123)
_123.setBounceOnWall(true)
info.startCountdown(60)
game.onUpdateInterval(1000, function () {
    _1 = randint(1, 6)
    if (_1 == 1) {
        _345 = sprites.create(assets.image`我的影像0`, SpriteKind.Enemy)
        _345.setPosition(21, 58)
    } else if (_1 == 2) {
        _345 = sprites.create(assets.image`我的影像0`, SpriteKind.Enemy)
        _345.setPosition(77, 58)
    } else if (_1 == 3) {
        _345 = sprites.create(assets.image`我的影像0`, SpriteKind.Enemy)
        _345.setPosition(131, 58)
    } else if (_1 == 4) {
        _345 = sprites.create(assets.image`我的影像0`, SpriteKind.Enemy)
        _345.setPosition(21, 89)
    } else if (_1 == 5) {
        _345 = sprites.create(assets.image`我的影像0`, SpriteKind.Enemy)
        _345.setPosition(77, 89)
    } else {
        _345 = sprites.create(assets.image`我的影像0`, SpriteKind.Enemy)
        _345.setPosition(131, 89)
    }
})
