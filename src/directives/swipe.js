import { AnimationCurve } from "@nativescript/core/ui/enums"


export default function swipe(el) {

    el.nativeView.on('swipe', (swipeGestureEventData ) => {
       //alert(swipeGestureEventData.direction);

        if (swipeGestureEventData.direction === 4) {
            el.nativeView.animate({
                scale: { x: 0.2, y: 0.2 },
                opacity: 0.2,
                curve: AnimationCurve.easeIn,
                duration: 100
            });

        } else if (swipeGestureEventData.direction === 8) {
            el.nativeView.animate({
                scale: { x: 1, y: 1 },
                opacity: 1,
                curve: AnimationCurve.easeIn,
                duration: 100
            });

        }
    
    });
}