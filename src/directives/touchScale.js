import { AnimationCurve } from "@nativescript/core/ui/enums"

export default function touchScale(el) {
    
    el.nativeView.on('touch', (touchGestureEventData) => {
        if (touchGestureEventData.action === 'down') {
            el.nativeView.animate({
                scale: { x: 0.98, y: 0.98 },
                opacity: 0.8,
                curve: AnimationCurve.easeIn,
                duration: 100
            });

        } else if (touchGestureEventData.action === 'up') {
            el.nativeView.animate({
                scale: { x: 1, y: 1 },
                opacity: 1,
                curve: AnimationCurve.easeIn,
                duration: 100
            });

        } else if (touchGestureEventData.action === 'move') {
            el.nativeView.animate({
                scale: { x: 1, y: 1 },
                opacity: 1,
                curve: AnimationCurve.easeIn,
                duration: 100
            });

        }  else if (touchGestureEventData.action === 'cancel') {
            el.nativeView.animate({
                scale: { x: 1, y: 1 },
                opacity: 1,
                curve: AnimationCurve.easeIn,
                duration: 100
            });

        } 
    });
}