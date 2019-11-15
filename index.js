(function(document) {
  "use strict";

  function $(selector) {
    return document.querySelector(selector);
  }

  window.addEventListener("WebComponentsReady", function() {
    var textInput = $("#textInput");
    var submitButton = $("#customButton");
    // var textButton = $('#textButton');
    // var mathButton = $('#mathButton');
    var writeHere = $(".write-here");    
     
    // if (
    //   $("#textInput") &&
    //   $("#textInput")
    //     .shadowRoot.querySelector("[apiversion]")
    //     .shadowRoot.querySelector("svg[data-layer]")
    // )

    if (
      textInput.applicationkey === "REPLACE_ME" ||
      textInput.hmackey === "REPLACE_ME"
    ) {
      $("header").remove();
      $(".warningkeys").classList.remove("hidden");
    } else {
      var listOfInputs = [textInput];
      listOfInputs.forEach(function(input) {
        input.addEventListener("loaded", function() {
          writeHere.classList.remove("hidden");
        });
        input.addEventListener("pointerdown", function() {
          writeHere.classList.add("hidden");
        });
        input.addEventListener("pointerup", function() {
          writeHere.classList.add("hidden");
        });
      });
      writeHere.addEventListener("pointermove", function() {
        writeHere.classList.add("hidden");
      });

      // Manage the tap on the various buttons
      var isTextButton = true;
      var setButtonsStates = function() {
        writeHere.classList.add("hidden");
        listOfInputs.forEach(function(input) {
          input.classList.add("hidden");
        });

        // textButton.active = isTextButton;
        if (isTextButton) {
          textInput.classList.remove("hidden");
          textInput.removeAttribute("unloaded");
          // mathInput.setAttribute('unloaded', true);
          // mathInput.classList.add('hidden');
          // mathInput.clear();
        }

        // mathButton.active = isMathButton;
        // if (isMathButton) {
        //     mathInput.classList.remove('hidden');
        //     mathInput.removeAttribute('unloaded');
        //     textInput.setAttribute('unloaded', true);
        //     textInput.classList.add('hidden');
        //     textInput.clear();
        // }
      };

      // textButton.addEventListener('tap', function() {
      //     setButtonsStates(true, false);
      // });
      // mathButton.addEventListener('tap', function() {
      //     setButtonsStates(false, true);
      // });
      function readGestureData() {
        console.log("here");
        var gestureValue = $("#textInput")
          .shadowRoot.querySelector("[apiversion]")
          .shadowRoot.querySelector(".prompter-text").textContent;
        console.log("gesture data", gestureValue);
        if (gestureValue) {
          window.postMessage(gestureValue);
        } else {
          console.log("No value");
        }
        // return
      }

      //   submitButton.addEventListener("click", function() {

      //     readGestureData();
      //     // window.postMessage()
      //   });

      submitButton.addEventListener("tap", function() {
        readGestureData();
        // window.postMessage()
      });

      //   submitButton.onclick = () => {
      //       console.log('heree')
      //     readGestureData();
      //     // window.postMessage()
      //   };
      // Initialize the default demo
      setButtonsStates(true, false);
    }
  });
})(document);
