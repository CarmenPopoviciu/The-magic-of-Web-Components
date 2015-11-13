(function() {
    var importDoc = document.currentScript.ownerDocument;
    var nameBadgePrototype = Object.create(HTMLElement.prototype);
    nameBadgePrototype.createdCallback = function () {
          var shadow = this.createShadowRoot();
          var template = importDoc.querySelector('#nameTagTemplate');
          shadow.appendChild(template.content.cloneNode(true));
    };
    document.registerElement("name-badge", {
        prototype: nameBadgePrototype
    });
})();