import { a as __extends, b as __assign, M as MDCFoundation, _ as __decorate } from '../common/foundation-dde8a859.js';
import { h as html } from '../common/lit-html-a1e3435b.js';
import { query, property, eventOptions, css, customElement } from '../lit-element.js';
import { a as addHasRemoveClass } from '../common/base-element-b8d447e1.js';
import { classMap } from '../lit-html/directives/class-map.js';
import { F as FormElement, s as styleMap } from '../common/form-element-c661a2bf.js';
import { o as observer } from '../common/observer-8c5412ba.js';
import { a as applyPassive } from '../common/events-a64aa528.js';

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssPropertyNameMap = {
    animation: {
        prefixed: '-webkit-animation',
        standard: 'animation',
    },
    transform: {
        prefixed: '-webkit-transform',
        standard: 'transform',
    },
    transition: {
        prefixed: '-webkit-transition',
        standard: 'transition',
    },
};
var jsEventTypeMap = {
    animationend: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationEnd',
        standard: 'animationend',
    },
    animationiteration: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationIteration',
        standard: 'animationiteration',
    },
    animationstart: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationStart',
        standard: 'animationstart',
    },
    transitionend: {
        cssProperty: 'transition',
        prefixed: 'webkitTransitionEnd',
        standard: 'transitionend',
    },
};
function isWindow(windowObj) {
    return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
}
function getCorrectPropertyName(windowObj, cssProperty) {
    if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
        var el = windowObj.document.createElement('div');
        var _a = cssPropertyNameMap[cssProperty], standard = _a.standard, prefixed = _a.prefixed;
        var isStandard = standard in el.style;
        return isStandard ? standard : prefixed;
    }
    return cssProperty;
}
function getCorrectEventName(windowObj, eventType) {
    if (isWindow(windowObj) && eventType in jsEventTypeMap) {
        var el = windowObj.document.createElement('div');
        var _a = jsEventTypeMap[eventType], standard = _a.standard, prefixed = _a.prefixed, cssProperty = _a.cssProperty;
        var isStandard = cssProperty in el.style;
        return isStandard ? standard : prefixed;
    }
    return eventType;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ACTIVE: 'mdc-slider--active',
    DISABLED: 'mdc-slider--disabled',
    DISCRETE: 'mdc-slider--discrete',
    FOCUS: 'mdc-slider--focus',
    HAS_TRACK_MARKER: 'mdc-slider--display-markers',
    IN_TRANSIT: 'mdc-slider--in-transit',
    IS_DISCRETE: 'mdc-slider--discrete',
    DISABLE_TOUCH_ACTION: 'mdc-slider--disable-touch-action',
};
var strings = {
    ARIA_DISABLED: 'aria-disabled',
    ARIA_VALUEMAX: 'aria-valuemax',
    ARIA_VALUEMIN: 'aria-valuemin',
    ARIA_VALUENOW: 'aria-valuenow',
    CHANGE_EVENT: 'MDCSlider:change',
    INPUT_EVENT: 'MDCSlider:input',
    PIN_VALUE_MARKER_SELECTOR: '.mdc-slider__pin-value-marker',
    STEP_DATA_ATTR: 'data-step',
    THUMB_CONTAINER_SELECTOR: '.mdc-slider__thumb-container',
    TRACK_MARKER_CONTAINER_SELECTOR: '.mdc-slider__track-marker-container',
    TRACK_SELECTOR: '.mdc-slider__track',
};
var numbers = {
    PAGE_FACTOR: 4,
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
// Accessing `window` without a `typeof` check will throw on Node environments.
var hasWindow = typeof window !== 'undefined';
var hasPointerEventSupport = hasWindow && !!window.PointerEvent;
var DOWN_EVENTS = hasPointerEventSupport ? ['pointerdown'] : ['mousedown', 'touchstart'];
var UP_EVENTS = hasPointerEventSupport ? ['pointerup'] : ['mouseup', 'touchend'];
var MOVE_EVENT_MAP = {
    mousedown: 'mousemove',
    pointerdown: 'pointermove',
    touchstart: 'touchmove',
};
var KEY_IDS = {
    ARROW_DOWN: 'ArrowDown',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_UP: 'ArrowUp',
    END: 'End',
    HOME: 'Home',
    PAGE_DOWN: 'PageDown',
    PAGE_UP: 'PageUp',
};
var MDCSliderFoundation = /** @class */ (function (_super) {
    __extends(MDCSliderFoundation, _super);
    function MDCSliderFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCSliderFoundation.defaultAdapter), adapter)) || this;
        /**
         * We set this to NaN since we want it to be a number, but we can't use '0' or
         * '-1' because those could be valid tabindices set by the client code.
         */
        _this.savedTabIndex_ = NaN;
        _this.active_ = false;
        _this.inTransit_ = false;
        _this.isDiscrete_ = false;
        _this.hasTrackMarker_ = false;
        _this.handlingThumbTargetEvt_ = false;
        _this.min_ = 0;
        _this.max_ = 100;
        _this.step_ = 0;
        _this.value_ = 0;
        _this.disabled_ = false;
        _this.preventFocusState_ = false;
        _this.thumbContainerPointerHandler_ = function () { return _this.handlingThumbTargetEvt_ =
            true; };
        _this.interactionStartHandler_ = function (evt) {
            return _this.handleDown_(evt);
        };
        _this.keydownHandler_ = function (evt) { return _this.handleKeydown_(evt); };
        _this.focusHandler_ = function () { return _this.handleFocus_(); };
        _this.blurHandler_ = function () { return _this.handleBlur_(); };
        _this.resizeHandler_ = function () { return _this.layout(); };
        return _this;
    }
    Object.defineProperty(MDCSliderFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSliderFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSliderFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSliderFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same
            // order as the adapter interface.
            return {
                hasClass: function () { return false; },
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                getAttribute: function () { return null; },
                setAttribute: function () { return undefined; },
                removeAttribute: function () { return undefined; },
                computeBoundingRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                getTabIndex: function () { return 0; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                registerThumbContainerInteractionHandler: function () { return undefined; },
                deregisterThumbContainerInteractionHandler: function () { return undefined; },
                registerBodyInteractionHandler: function () { return undefined; },
                deregisterBodyInteractionHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                notifyInput: function () { return undefined; },
                notifyChange: function () { return undefined; },
                setThumbContainerStyleProperty: function () { return undefined; },
                setTrackStyleProperty: function () { return undefined; },
                setMarkerValue: function () { return undefined; },
                setTrackMarkers: function () { return undefined; },
                isRTL: function () { return false; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCSliderFoundation.prototype.init = function () {
        var _this = this;
        this.isDiscrete_ = this.adapter.hasClass(cssClasses.IS_DISCRETE);
        this.hasTrackMarker_ = this.adapter.hasClass(cssClasses.HAS_TRACK_MARKER);
        DOWN_EVENTS.forEach(function (evtName) {
            _this.adapter.registerInteractionHandler(evtName, _this.interactionStartHandler_);
            _this.adapter.registerThumbContainerInteractionHandler(evtName, _this.thumbContainerPointerHandler_);
        });
        if (hasPointerEventSupport) {
            /*
             * When pointermove happens, if too much sliding happens, the browser
             * believes you are panning in the x direction and stops firing
             * pointermove events and supplies its own gestures. (similar to
             * preventing default on touchmove)
             */
            this.adapter.addClass(cssClasses.DISABLE_TOUCH_ACTION);
        }
        this.adapter.registerInteractionHandler('keydown', this.keydownHandler_);
        this.adapter.registerInteractionHandler('focus', this.focusHandler_);
        this.adapter.registerInteractionHandler('blur', this.blurHandler_);
        this.adapter.registerResizeHandler(this.resizeHandler_);
        this.layout();
        // At last step, provide a reasonable default value to discrete slider
        if (this.isDiscrete_ && this.getStep() === 0) {
            this.step_ = 1;
        }
    };
    MDCSliderFoundation.prototype.destroy = function () {
        var _this = this;
        DOWN_EVENTS.forEach(function (evtName) {
            _this.adapter.deregisterInteractionHandler(evtName, _this.interactionStartHandler_);
            _this.adapter.deregisterThumbContainerInteractionHandler(evtName, _this.thumbContainerPointerHandler_);
        });
        this.adapter.deregisterInteractionHandler('keydown', this.keydownHandler_);
        this.adapter.deregisterInteractionHandler('focus', this.focusHandler_);
        this.adapter.deregisterInteractionHandler('blur', this.blurHandler_);
        this.adapter.deregisterResizeHandler(this.resizeHandler_);
    };
    MDCSliderFoundation.prototype.setupTrackMarker = function () {
        if (this.isDiscrete_ && this.hasTrackMarker_ && this.getStep() !== 0) {
            this.adapter.setTrackMarkers(this.getStep(), this.getMax(), this.getMin());
        }
    };
    MDCSliderFoundation.prototype.layout = function () {
        this.rect_ = this.adapter.computeBoundingRect();
        this.updateUIForCurrentValue_();
    };
    MDCSliderFoundation.prototype.getValue = function () {
        return this.value_;
    };
    MDCSliderFoundation.prototype.setValue = function (value) {
        this.setValue_(value, false);
    };
    MDCSliderFoundation.prototype.getMax = function () {
        return this.max_;
    };
    MDCSliderFoundation.prototype.setMax = function (max) {
        if (max < this.min_) {
            throw new Error('Cannot set max to be less than the slider\'s minimum value');
        }
        this.max_ = max;
        this.setValue_(this.value_, false, true);
        this.adapter.setAttribute(strings.ARIA_VALUEMAX, String(this.max_));
        this.setupTrackMarker();
    };
    MDCSliderFoundation.prototype.getMin = function () {
        return this.min_;
    };
    MDCSliderFoundation.prototype.setMin = function (min) {
        if (min > this.max_) {
            throw new Error('Cannot set min to be greater than the slider\'s maximum value');
        }
        this.min_ = min;
        this.setValue_(this.value_, false, true);
        this.adapter.setAttribute(strings.ARIA_VALUEMIN, String(this.min_));
        this.setupTrackMarker();
    };
    MDCSliderFoundation.prototype.getStep = function () {
        return this.step_;
    };
    MDCSliderFoundation.prototype.setStep = function (step) {
        if (step < 0) {
            throw new Error('Step cannot be set to a negative number');
        }
        if (this.isDiscrete_ && (typeof (step) !== 'number' || step < 1)) {
            step = 1;
        }
        this.step_ = step;
        this.setValue_(this.value_, false, true);
        this.setupTrackMarker();
    };
    MDCSliderFoundation.prototype.isDisabled = function () {
        return this.disabled_;
    };
    MDCSliderFoundation.prototype.setDisabled = function (disabled) {
        this.disabled_ = disabled;
        this.toggleClass_(cssClasses.DISABLED, this.disabled_);
        if (this.disabled_) {
            this.savedTabIndex_ = this.adapter.getTabIndex();
            this.adapter.setAttribute(strings.ARIA_DISABLED, 'true');
            this.adapter.removeAttribute('tabindex');
        }
        else {
            this.adapter.removeAttribute(strings.ARIA_DISABLED);
            if (!isNaN(this.savedTabIndex_)) {
                this.adapter.setAttribute('tabindex', String(this.savedTabIndex_));
            }
        }
    };
    /**
     * Called when the user starts interacting with the slider
     */
    MDCSliderFoundation.prototype.handleDown_ = function (downEvent) {
        var _this = this;
        if (this.disabled_) {
            return;
        }
        this.preventFocusState_ = true;
        this.setInTransit_(!this.handlingThumbTargetEvt_);
        this.handlingThumbTargetEvt_ = false;
        this.setActive_(true);
        var moveHandler = function (moveEvent) {
            _this.handleMove_(moveEvent);
        };
        var moveEventType = MOVE_EVENT_MAP[downEvent.type];
        // Note: upHandler is [de]registered on ALL potential pointer-related
        // release event types, since some browsers do not always fire these
        // consistently in pairs. (See
        // https://github.com/material-components/material-components-web/issues/1192)
        var upHandler = function () {
            _this.handleUp_();
            _this.adapter.deregisterBodyInteractionHandler(moveEventType, moveHandler);
            UP_EVENTS.forEach(function (evtName) { return _this.adapter.deregisterBodyInteractionHandler(evtName, upHandler); });
        };
        this.adapter.registerBodyInteractionHandler(moveEventType, moveHandler);
        UP_EVENTS.forEach(function (evtName) {
            return _this.adapter.registerBodyInteractionHandler(evtName, upHandler);
        });
        this.setValueFromEvt_(downEvent);
    };
    /**
     * Called when the user moves the slider
     */
    MDCSliderFoundation.prototype.handleMove_ = function (evt) {
        evt.preventDefault();
        this.setValueFromEvt_(evt);
    };
    /**
     * Called when the user's interaction with the slider ends
     */
    MDCSliderFoundation.prototype.handleUp_ = function () {
        this.setActive_(false);
        this.adapter.notifyChange();
    };
    /**
     * Returns the clientX of the event
     */
    MDCSliderFoundation.prototype.getClientX_ = function (evt) {
        if (evt.targetTouches &&
            evt.targetTouches.length > 0) {
            return evt.targetTouches[0].clientX;
        }
        return evt.clientX;
    };
    /**
     * Sets the slider value from an event
     */
    MDCSliderFoundation.prototype.setValueFromEvt_ = function (evt) {
        var clientX = this.getClientX_(evt);
        var value = this.computeValueFromClientX_(clientX);
        this.setValue_(value, true);
    };
    /**
     * Computes the new value from the clientX position
     */
    MDCSliderFoundation.prototype.computeValueFromClientX_ = function (clientX) {
        var _a = this, max = _a.max_, min = _a.min_;
        var xPos = clientX - this.rect_.left;
        var pctComplete = xPos / this.rect_.width;
        if (this.adapter.isRTL()) {
            pctComplete = 1 - pctComplete;
        }
        // Fit the percentage complete between the range [min,max]
        // by remapping from [0, 1] to [min, min+(max-min)].
        return min + pctComplete * (max - min);
    };
    /**
     * Handles keydown events
     */
    MDCSliderFoundation.prototype.handleKeydown_ = function (evt) {
        var keyId = this.getKeyId_(evt);
        var value = this.getValueForKeyId_(keyId);
        if (isNaN(value)) {
            return;
        }
        // Prevent page from scrolling due to key presses that would normally scroll
        // the page
        evt.preventDefault();
        this.adapter.addClass(cssClasses.FOCUS);
        this.setValue_(value, true);
        this.adapter.notifyChange();
    };
    /**
     * Returns the computed name of the event
     */
    MDCSliderFoundation.prototype.getKeyId_ = function (kbdEvt) {
        if (kbdEvt.key === KEY_IDS.ARROW_LEFT || kbdEvt.keyCode === 37) {
            return KEY_IDS.ARROW_LEFT;
        }
        if (kbdEvt.key === KEY_IDS.ARROW_RIGHT || kbdEvt.keyCode === 39) {
            return KEY_IDS.ARROW_RIGHT;
        }
        if (kbdEvt.key === KEY_IDS.ARROW_UP || kbdEvt.keyCode === 38) {
            return KEY_IDS.ARROW_UP;
        }
        if (kbdEvt.key === KEY_IDS.ARROW_DOWN || kbdEvt.keyCode === 40) {
            return KEY_IDS.ARROW_DOWN;
        }
        if (kbdEvt.key === KEY_IDS.HOME || kbdEvt.keyCode === 36) {
            return KEY_IDS.HOME;
        }
        if (kbdEvt.key === KEY_IDS.END || kbdEvt.keyCode === 35) {
            return KEY_IDS.END;
        }
        if (kbdEvt.key === KEY_IDS.PAGE_UP || kbdEvt.keyCode === 33) {
            return KEY_IDS.PAGE_UP;
        }
        if (kbdEvt.key === KEY_IDS.PAGE_DOWN || kbdEvt.keyCode === 34) {
            return KEY_IDS.PAGE_DOWN;
        }
        return '';
    };
    /**
     * Computes the value given a keyboard key ID
     */
    MDCSliderFoundation.prototype.getValueForKeyId_ = function (keyId) {
        var _a = this, max = _a.max_, min = _a.min_, step = _a.step_;
        var delta = step || (max - min) / 100;
        var valueNeedsToBeFlipped = this.adapter.isRTL() &&
            (keyId === KEY_IDS.ARROW_LEFT || keyId === KEY_IDS.ARROW_RIGHT);
        if (valueNeedsToBeFlipped) {
            delta = -delta;
        }
        switch (keyId) {
            case KEY_IDS.ARROW_LEFT:
            case KEY_IDS.ARROW_DOWN:
                return this.value_ - delta;
            case KEY_IDS.ARROW_RIGHT:
            case KEY_IDS.ARROW_UP:
                return this.value_ + delta;
            case KEY_IDS.HOME:
                return this.min_;
            case KEY_IDS.END:
                return this.max_;
            case KEY_IDS.PAGE_UP:
                return this.value_ + delta * numbers.PAGE_FACTOR;
            case KEY_IDS.PAGE_DOWN:
                return this.value_ - delta * numbers.PAGE_FACTOR;
            default:
                return NaN;
        }
    };
    MDCSliderFoundation.prototype.handleFocus_ = function () {
        if (this.preventFocusState_) {
            return;
        }
        this.adapter.addClass(cssClasses.FOCUS);
    };
    MDCSliderFoundation.prototype.handleBlur_ = function () {
        this.preventFocusState_ = false;
        this.adapter.removeClass(cssClasses.FOCUS);
    };
    /**
     * Sets the value of the slider
     */
    MDCSliderFoundation.prototype.setValue_ = function (value, shouldFireInput, force) {
        if (force === void 0) { force = false; }
        if (value === this.value_ && !force) {
            return;
        }
        var _a = this, min = _a.min_, max = _a.max_;
        var valueSetToBoundary = value === min || value === max;
        if (this.step_ && !valueSetToBoundary) {
            value = this.quantize_(value);
        }
        if (value < min) {
            value = min;
        }
        else if (value > max) {
            value = max;
        }
        value = value || 0; // coerce -0 to 0
        this.value_ = value;
        this.adapter.setAttribute(strings.ARIA_VALUENOW, String(this.value_));
        this.updateUIForCurrentValue_();
        if (shouldFireInput) {
            this.adapter.notifyInput();
            if (this.isDiscrete_) {
                this.adapter.setMarkerValue(value);
            }
        }
    };
    /**
     * Calculates the quantized value
     */
    MDCSliderFoundation.prototype.quantize_ = function (value) {
        var numSteps = Math.round(value / this.step_);
        return numSteps * this.step_;
    };
    MDCSliderFoundation.prototype.updateUIForCurrentValue_ = function () {
        var _this = this;
        var _a = this, max = _a.max_, min = _a.min_, value = _a.value_;
        var pctComplete = (value - min) / (max - min);
        var translatePx = pctComplete * this.rect_.width;
        if (this.adapter.isRTL()) {
            translatePx = this.rect_.width - translatePx;
        }
        var transformProp = hasWindow ? getCorrectPropertyName(window, 'transform') : 'transform';
        var transitionendEvtName = hasWindow ? getCorrectEventName(window, 'transitionend') : 'transitionend';
        if (this.inTransit_) {
            var onTransitionEnd_1 = function () {
                _this.setInTransit_(false);
                _this.adapter.deregisterThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd_1);
            };
            this.adapter.registerThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd_1);
        }
        requestAnimationFrame(function () {
            // NOTE(traviskaufman): It would be nice to use calc() here,
            // but IE cannot handle calcs in transforms correctly.
            // See: https://goo.gl/NC2itk
            // Also note that the -50% offset is used to center the slider thumb.
            _this.adapter.setThumbContainerStyleProperty(transformProp, "translateX(" + translatePx + "px) translateX(-50%)");
            _this.adapter.setTrackStyleProperty(transformProp, "scaleX(" + pctComplete + ")");
        });
    };
    /**
     * Toggles the active state of the slider
     */
    MDCSliderFoundation.prototype.setActive_ = function (active) {
        this.active_ = active;
        this.toggleClass_(cssClasses.ACTIVE, this.active_);
    };
    /**
     * Toggles the inTransit state of the slider
     */
    MDCSliderFoundation.prototype.setInTransit_ = function (inTransit) {
        this.inTransit_ = inTransit;
        this.toggleClass_(cssClasses.IN_TRANSIT, this.inTransit_);
    };
    /**
     * Conditionally adds or removes a class based on shouldBePresent
     */
    MDCSliderFoundation.prototype.toggleClass_ = function (className, shouldBePresent) {
        if (shouldBePresent) {
            this.adapter.addClass(className);
        }
        else {
            this.adapter.removeClass(className);
        }
    };
    return MDCSliderFoundation;
}(MDCFoundation));

const INPUT_EVENT = 'input';
const CHANGE_EVENT = 'change';
class SliderBase extends FormElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCSliderFoundation;
        this.min = 0;
        this.max = 100;
        this._value = 0;
        this.step = 0;
        this.disabled = false;
        this.pin = false;
        this.markers = false;
        this.pinMarkerText = '';
        this.trackMarkerContainerStyles = {};
        this.thumbContainerStyles = {};
        this.trackStyles = {};
        this.isFoundationDestroyed = false;
    }
    set value(value) {
        if (this.mdcFoundation) {
            this.mdcFoundation.setValue(value);
        }
        this._value = value;
        this.requestUpdate('value', value);
    }
    get value() {
        if (this.mdcFoundation) {
            return this.mdcFoundation.getValue();
        }
        else {
            return this._value;
        }
    }
    // TODO(sorvell) #css: needs a default width
    render() {
        const isDiscrete = this.step !== 0;
        const hostClassInfo = {
            'mdc-slider--discrete': isDiscrete,
            'mdc-slider--display-markers': this.markers && isDiscrete,
        };
        let markersTemplate = '';
        if (isDiscrete && this.markers) {
            markersTemplate = html `
        <div
            class="mdc-slider__track-marker-container"
            style="${styleMap(this.trackMarkerContainerStyles)}">
        </div>`;
        }
        let pin = '';
        if (this.pin) {
            pin = html `
      <div class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker">${this.pinMarkerText}</span>
      </div>`;
        }
        return html `
      <div class="mdc-slider ${classMap(hostClassInfo)}"
           tabindex="0" role="slider"
           aria-valuemin="${this.min}" aria-valuemax="${this.max}"
           aria-valuenow="${this.value}"
           aria-disabled="${this.disabled.toString()}"
           data-step="${this.step}"
           @mousedown=${this.layout}
           @touchstart=${this.layout}>
        <div class="mdc-slider__track-container">
          <div
              class="mdc-slider__track"
              style="${styleMap(this.trackStyles)}">
          </div>
          ${markersTemplate}
        </div>
        <div
            class="mdc-slider__thumb-container"
            style="${styleMap(this.thumbContainerStyles)}">
          <!-- TODO: use cache() directive -->
          ${pin}
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875"></circle>
          </svg>
        <div class="mdc-slider__focus-ring"></div>
      </div>
    </div>`;
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.mdcRoot && this.isFoundationDestroyed) {
            this.isFoundationDestroyed = false;
            this.mdcFoundation.init();
        }
    }
    updated(changed) {
        const minChanged = changed.has('min');
        const maxChanged = changed.has('max');
        if (minChanged && maxChanged) {
            if (this.max < this.mdcFoundation.getMin()) {
                // for when min is above previous max
                this.mdcFoundation.setMin(this.min);
                this.mdcFoundation.setMax(this.max);
            }
            else {
                // for when max is below previous min
                this.mdcFoundation.setMax(this.max);
                this.mdcFoundation.setMin(this.min);
            }
        }
        else if (minChanged) {
            this.mdcFoundation.setMin(this.min);
        }
        else if (maxChanged) {
            this.mdcFoundation.setMax(this.max);
        }
        super.updated(changed);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.isFoundationDestroyed = true;
        this.mdcFoundation.destroy();
    }
    createAdapter() {
        return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { getAttribute: (name) => this.mdcRoot.getAttribute(name), setAttribute: (name, value) => this.mdcRoot.setAttribute(name, value), removeAttribute: (name) => this.mdcRoot.removeAttribute(name), computeBoundingRect: () => {
                const rect = this.mdcRoot.getBoundingClientRect();
                const myRect = {
                    bottom: rect.bottom,
                    height: rect.height,
                    left: rect.left + window.pageXOffset,
                    right: rect.right,
                    top: rect.top,
                    width: rect.width,
                };
                return myRect;
            }, getTabIndex: () => this.mdcRoot.tabIndex, registerInteractionHandler: (type, handler) => {
                const init = type === 'touchstart' ? applyPassive() : undefined;
                this.mdcRoot.addEventListener(type, handler, init);
            }, deregisterInteractionHandler: (type, handler) => this.mdcRoot.removeEventListener(type, handler), registerThumbContainerInteractionHandler: (type, handler) => {
                const init = type === 'touchstart' ? applyPassive() : undefined;
                this.thumbContainer.addEventListener(type, handler, init);
            }, deregisterThumbContainerInteractionHandler: (type, handler) => this.thumbContainer.removeEventListener(type, handler), registerBodyInteractionHandler: (type, handler) => document.body.addEventListener(type, handler), deregisterBodyInteractionHandler: (type, handler) => document.body.removeEventListener(type, handler), registerResizeHandler: (handler) => window.addEventListener('resize', handler, applyPassive()), deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler), notifyInput: () => {
                const value = this.mdcFoundation.getValue();
                if (value !== this._value) {
                    this.value = value;
                    this.dispatchEvent(new CustomEvent(INPUT_EVENT, { detail: this, composed: true, bubbles: true, cancelable: true }));
                }
            }, notifyChange: () => {
                this.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: this, composed: true, bubbles: true, cancelable: true }));
            }, setThumbContainerStyleProperty: (propertyName, value) => {
                this.thumbContainerStyles[propertyName] = value;
                this.requestUpdate();
            }, setTrackStyleProperty: (propertyName, value) => {
                this.trackStyles[propertyName] = value;
                this.requestUpdate();
            }, setMarkerValue: (value) => this.pinMarkerText =
                value.toLocaleString(), setTrackMarkers: (step, max, min) => {
                // calculates the CSS for the notches on the slider. Taken from
                // https://github.com/material-components/material-components-web/blob/8f851d9ed2f75dc8b8956d15b3bb2619e59fa8a9/packages/mdc-slider/component.ts#L122
                const stepStr = step.toLocaleString();
                const maxStr = max.toLocaleString();
                const minStr = min.toLocaleString();
                // keep calculation in css for better rounding/subpixel behavior
                const markerAmount = `((${maxStr} - ${minStr}) / ${stepStr})`;
                const markerWidth = '2px';
                const markerBkgdImage = `linear-gradient(to right, currentColor ${markerWidth}, transparent 0)`;
                const markerBkgdLayout = `0 center / calc((100% - ${markerWidth}) / ${markerAmount}) 100% repeat-x`;
                const markerBkgdShorthand = `${markerBkgdImage} ${markerBkgdLayout}`;
                this.trackMarkerContainerStyles['background'] = markerBkgdShorthand;
                this.requestUpdate();
            }, isRTL: () => getComputedStyle(this.mdcRoot).direction === 'rtl' });
    }
    resetFoundation() {
        if (this.mdcFoundation) {
            this.mdcFoundation.destroy();
            this.mdcFoundation.init();
        }
    }
    async firstUpdated() {
        await super.firstUpdated();
        this.mdcFoundation.setValue(this._value);
    }
    /**
     * Layout is called on mousedown / touchstart as the dragging animations of
     * slider are calculated based off of the bounding rect which can change
     * between interactions with this component, and this is the only location
     * in the foundation that udpates the rects. e.g. scrolling horizontally
     * causes adverse effects on the bounding rect vs mouse drag / touchmove
     * location.
     */
    layout() {
        this.mdcFoundation.layout();
    }
}
__decorate([
    query('.mdc-slider')
], SliderBase.prototype, "mdcRoot", void 0);
__decorate([
    query('.mdc-slider')
], SliderBase.prototype, "formElement", void 0);
__decorate([
    query('.mdc-slider__thumb-container')
], SliderBase.prototype, "thumbContainer", void 0);
__decorate([
    query('.mdc-slider__pin-value-marker')
], SliderBase.prototype, "pinMarker", void 0);
__decorate([
    property({ type: Number })
], SliderBase.prototype, "min", void 0);
__decorate([
    property({ type: Number })
], SliderBase.prototype, "max", void 0);
__decorate([
    property({ type: Number })
], SliderBase.prototype, "value", null);
__decorate([
    property({ type: Number }),
    observer(function (value, old) {
        const oldWasDiscrete = old !== 0;
        const newIsDiscrete = value !== 0;
        if (oldWasDiscrete !== newIsDiscrete) {
            this.resetFoundation();
        }
        this.mdcFoundation.setStep(value);
    })
], SliderBase.prototype, "step", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    observer(function (value) {
        this.mdcFoundation.setDisabled(value);
    })
], SliderBase.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], SliderBase.prototype, "pin", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    observer(function () {
        this.mdcFoundation.setupTrackMarker();
    })
], SliderBase.prototype, "markers", void 0);
__decorate([
    property({ type: String })
], SliderBase.prototype, "pinMarkerText", void 0);
__decorate([
    property({ type: Object })
], SliderBase.prototype, "trackMarkerContainerStyles", void 0);
__decorate([
    property({ type: Object })
], SliderBase.prototype, "thumbContainerStyles", void 0);
__decorate([
    property({ type: Object })
], SliderBase.prototype, "trackStyles", void 0);
__decorate([
    eventOptions({ capture: true, passive: true })
], SliderBase.prototype, "layout", null);

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const style = css `@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(0.85)}100%{transform:scale(0.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);opacity:.26}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#018786;fill:var(--mdc-theme-secondary, #018786);stroke:#018786;stroke:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.mdc-slider--disable-touch-action{touch-action:none}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container::after{background-color:#9a9a9a;opacity:.26}.mdc-slider--disabled .mdc-slider__track-marker-container{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component, white)}.mdc-slider:focus{outline:none}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track-container::after{position:absolute;top:0;left:0;display:block;width:100%;height:100%;content:""}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:2px;height:2px;content:""}.mdc-slider__track-marker:first-child::after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(0.571);stroke-width:3.5;transition:transform 100ms ease-out,fill 100ms ease-out,stroke 100ms ease-out}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0;transition:transform 266.67ms ease-out,opacity 266.67ms ease-out,background-color 266.67ms ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0, 0);border-radius:50% 50% 50% 0%;z-index:1;transition:transform 100ms ease-out}.mdc-slider__pin-value-marker{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1, 1, 1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize 266.67ms linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55, 1.55, 1.55);opacity:.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px, -20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}:host{display:inline-block;min-width:120px;outline:none}`;

let Slider = class Slider extends SliderBase {
};
Slider.styles = style;
Slider = __decorate([
    customElement('mwc-slider')
], Slider);

export { Slider };
