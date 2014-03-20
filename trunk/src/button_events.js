/*******************************************
 button_events.js
 Created on March 11, 2014, by Jeremy Davis
 Simon Says
 
 This file defines some callback functions for events that buttons can trigger (like when they are depressed).
 *******************************************
 Copyright 2014 Chris Devers
 
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 
     http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 *******************************************/

/* A helper function to return the button that created the given event. Returns false on failure. */
function getTarget(evt) {
    "use strict";
    
    if (evt.target) {
        return evt.target;
    }
    if (evt.srcElement) {
        return evt.srcElement;
    }
    
    return false;
}

/* Forces the given element to be redrawn. Needed for Webkit-based browsers. */
function forceRedraw(el) {
    "use strict";
    
    var t = el.ownerDocument.createTextNode(' ');
    el.appendChild(t);
    setTimeout(function() { el.removeChild(t); }, 0);
}

/* Updates the button's graphics in response to a mouse-over event. */
function mouseOver(evt) {
    "use strict";
    
    var button, edge;
    
    // Try to find the button. If unsuccessful, return without doing anything.
    button = getTarget(evt);
    if (!button) {
        return;
    }
    
    // TODO: Call onMouseDown if this was the last button pressed and the user never released the mouse button. (Is this even possible?)
    // Otherwise, make the button glow.
    edge = button.ownerDocument.getElementById("edge");
    edge.setAttribute("style", edge.getAttribute("bright_text"));
    
    forceRedraw(button);
}

function mouseOut(evt) {
    "use strict";
    
    var button, highlight, edge;
    
    // Try to find the button. If unsuccessful, return without doing anything.
    button = getTarget(evt);
    if (!button) {
        return;
    }
    
    // Make the button's spectral highlight brighter to give the impression of its being released.
    highlight = button.ownerDocument.getElementById("highlight");
    highlight.setAttribute("style", highlight.getAttribute("bright_text"));
    
    // Make the button stop glowing.
    edge = button.ownerDocument.getElementById("edge");
    edge.setAttribute("style", edge.getAttribute("dark_text"));
    
    forceRedraw(button);
}

function mouseDown(evt, darkenEdge) {
    "use strict";
    
    var button, highlight, edge;
    
    darkenEdge = typeof darkenEdge !== "undefined" ? darkenEdge : true;
    
    // Try to find the button. If unsuccessful, return without doing anything.
    button = getTarget(evt);
    if (!button) {
        return;
    }
    
    // Make the button's spectral highlight darker to give the impression of its being pushed in.
    highlight = button.ownerDocument.getElementById("highlight");
    highlight.setAttribute("style", highlight.getAttribute("dark_text"));
    
    if (darkenEdge) {
        // Make the button stop glowing.
        edge = button.ownerDocument.getElementById("edge");
        edge.setAttribute("style", edge.getAttribute("dark_text"));
    }
    
    forceRedraw(button);
}

function mouseUp(evt, brightenEdge) {
    "use strict";
    
    var button, highlight, edge;
    
    brightenEdge = typeof brightenEdge !== "undefined" ? brightenEdge : true;
    
    // Try to find the button. If unsuccessful, return without doing anything.
    button = getTarget(evt);
    if (!button) {
        return;
    }
    
    // Make the button's spectral highlight brighter to give the impression of its being released.
    highlight = button.ownerDocument.getElementById("highlight");
    highlight.setAttribute("style", highlight.getAttribute("bright_text"));
    
    if (brightenEdge) {
        // Make the button start glowing again.
        edge = button.ownerDocument.getElementById("edge");
        edge.setAttribute("style", edge.getAttribute("bright_text"));
    }
    
    forceRedraw(button);
}

function goBack() {
    "use strict";
    
    // Navigate to the previous page.
    window.location.href = prevPage;
}

function startGame() {
    "use strict";
	
	// Go to the game window.
    window.location.href = "../game.html";
}

function settings() {
    "use strict";
	
	// Go to the settings window.
    window.location.href = "../settings.html";
}

function rules() {
    "use strict";
	
	// Go to the settings window.
    window.location.href = "../rules.html";
}

function highScore() {
    "use strict";
	
	// Go to the settings window.
    window.location.href = "../highScore.html";
}