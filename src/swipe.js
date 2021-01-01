import { AnimationCurve } from "@nativescript/core/ui/enums"
const SwipeDirection = require("@nativescript/core/ui/gestures").SwipeDirection;

export default function swipe(el) {

    el.nativeView.on('swipe', (swipeGestureEventData ) => {
     

        if (swipeGestureEventData.direction === (SwipeDirection.down = "down")) {
            el.nativeView.animate({
                scale: { x: 0.2, y: 0.2 },
                opacity: 0.2,
                curve: AnimationCurve.easeIn,
                duration: 100
            });
        

        } else if (swipeGestureEventData.direction === (SwipeDirection.up = "up")) {
            el.nativeView.animate({
                scale: { x: 1, y: 1 },
                opacity: 1,
                curve: AnimationCurve.easeIn,
                duration: 100
            });

        }
    
    });
}