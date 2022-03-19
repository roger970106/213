def on_a_released():
    pause(100)
controller.A.on_event(ControllerButtonEvent.RELEASED, on_a_released)

def on_on_overlap(sprite, otherSprite):
    otherSprite.destroy()
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

mySprite: Sprite = None
_123 = sprites.create(assets.image("""
    我的影像
"""), SpriteKind.player)
controller.move_sprite(_123)
info.set_score(0)

def on_update_interval():
    global mySprite
    mySprite = sprites.create(assets.image("""
        我的影像0
    """), SpriteKind.enemy)
    mySprite.set_position(randint(0, 160), randint(0, 120))
game.on_update_interval(500, on_update_interval)
